// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import type { User } from "@prisma/client";
const prisma = new PrismaClient()

export type TypeUser = Omit<User, "password"> & {
  password?: String
};

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    var user = null

    try {
      user = JSON.parse(res.getHeader('X-HEADER-USER')?.toString() || "")
      res.removeHeader('X-HEADER-USER')

      if (user) {
        var user_data = await prisma.user.findUnique({
          where: {
            id: user?.id
          },
          select: {
            id: true,
            email: true,
            name: true,
            image: true
          }
        })

        console.log(user, user_data)

        res.status(200).json({
          user: user_data,
          // expiresIn: '1h',
          // token: req.cookies?.token,
          // refresh_token: req.cookies?.refresh_token
        })
      }
      else {
        res.status(200).json({ user })
      }
      
    } catch (e: any) {
      await new Promise((res) => setTimeout(res, 1000));

      res.status(e?.status || 500).json({
        status: e?.status || 500,
        text: e?.status || "Server Error",
        errors: e?.body_response || []
      })
    }

  } else {
    // Handle any other HTTP method
  }
}
