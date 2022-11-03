// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler( req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Process a POST request
    const user = JSON.parse(res.getHeader('X-HEADER-USER'))

    res.removeHeader('X-HEADER-USER')

    res.status(200).json({ user })
  } else {
    // Handle any other HTTP method
  }
}
