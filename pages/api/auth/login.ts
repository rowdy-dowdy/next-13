// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import { removeSpace } from '../../../utils/validator'
import { signToken } from '../../../utils/jwt'
import { PrismaClient } from '@prisma/client'
import type { User } from "@prisma/client";
import { setCookie } from "../../../utils/cookies";
const prisma = new PrismaClient()

export type TypeUser = Omit<User, "password"> & {
  password?: String
};

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const body = req.body
  
      let email: string = removeSpace(body.email || ''),
          password: string = body.password || '',
          remember: boolean = body.remember || false
  
      var user: User | null = await prisma.user.findUnique({
        where: {
          email: email
        },
        select: {
          id: true,
          email: true,
          name: true,
          password: true,
          image: true
        }
      })
  
      var body_response = []
  
      if (!user) {
        body_response.push({ email: 'Email not exists' })
        throw {
          status: 404,
          text: "Email not exists",
          body_response
        }
      }
  
      if (!await bcrypt.compare(password, user.password || '')) {
        body_response.push({ email: 'Email not exists' })
        throw {
          status: 401,
          text: "Password incorrect",
          body_response
        }
      }
  
      var user_without_password: TypeUser  = user
      delete user_without_password.password
  
      const token = await signToken(user_without_password)
      const refresh_token = await signToken(user_without_password, remember ? '60d' : '1d')
  
      setCookie(res, 'token', token, { maxAge: 3600, path: '/', httpOnly: true })
      setCookie(res, 'refresh_token', refresh_token, { maxAge: remember ? 86400 * 60 : 86400, path: '/', httpOnly: true })
      
      res.status(200).json({
        user: user_without_password,
        expiresIn: '1h',
        token,
        refresh_token
      })
    }
    catch (e: any) {
      await new Promise((res) => setTimeout(res, 1000));

      res.status(e?.status || 500).json({
        status: e?.status || 500,
        text: e?.status || "Server Error",
        errors: e?.body_response || []
      })
    }
  } else {
    res.status(200).json({ message: 'ok' })
    // Handle any other HTTP method
  }
}