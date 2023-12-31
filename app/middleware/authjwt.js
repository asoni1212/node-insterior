import jsonwebtoken from "jsonwebtoken";

const config = process.env;
export const verifyToken = (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send({error: "A token is required for authentication"});
    }
    try {
      const decoded = jsonwebtoken.verify(token, config.TOKEN_KEY);
      req.user = decoded;
    } catch (err) {
      return res.status(401).send({error: "Invalid Token"});
    }
    return next();
  };
