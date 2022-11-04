import {SignJWT, jwtVerify, type JWTPayload} from 'jose';
const token_key = process.env.TOKEN_KEY || ""

const verifyToken = async (token: string) => {
  const {payload} = await jwtVerify(token, new TextEncoder().encode(token_key));

  return payload;
};

const signToken = async (data: {id: number, name: string, email: string}, time = 3600) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + time; // one hour

  return new SignJWT({...data})
    .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(token_key));
};

export {
  verifyToken,
  signToken
}