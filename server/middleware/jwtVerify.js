import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send();
  }
  jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send();
    }
    req.user_id = decoded.user_id;
    next();
  })
}