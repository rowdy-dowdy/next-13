import jwt from "jsonwebtoken";
const token_key = process.env.TOKEN_KEY || ""

const verifyToken = async (token: string) => {
  try {
    const user : any = await jwt.verify(token, token_key);

    return user

  } catch (err) {
    return null
    throw {
      status: 401,
      text: "Invalid Token"
    }
  }
};

const signToken = async (data: {id: number, name: string, email: string}, time = '1h') => {
  try {
    const token = await jwt.sign({
      id: data.id,
      name: data.name,
      email: data.email
    }, token_key, { expiresIn: time })

    return token

  } catch (err) {
    // console.log(err)
    throw {
      status: 500,
      text: "Not created jwt token"
    }
  }
};

export {
  verifyToken,
  signToken
}