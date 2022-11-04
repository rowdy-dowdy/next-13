import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'

/**
 * This sets `cookie` using the `res` object
 */

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (typeof options.maxAge === 'number') {
    options.expires = new Date(Date.now() + options.maxAge * 1000)
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}

type TypeCookie = {
  name: string,
  value: unknown,
  options: CookieSerializeOptions
}

export const setCookies = (res: NextApiResponse, list: TypeCookie[]) => {
  var data: string[] = []
  list.forEach(v => {
    const stringValue =
      typeof v.value === 'object' ? 'j:' + JSON.stringify(v.value) : String(v.value)
  
    if (typeof v.options.maxAge === 'number') {
      v.options.expires = new Date(Date.now() + v.options.maxAge * 1000)
    }

    data.push(serialize(v.name, stringValue, v.options))
  })

  // console.log(data)

  res.setHeader('Set-Cookie', data)
}