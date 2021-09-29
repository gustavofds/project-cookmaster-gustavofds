const jwt = require('jsonwebtoken');

const SECRET = 'secretCookmaster';

module.exports = (req, res, next) => {
  try {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'missing auth token' });

  const payload = jwt.verify(token, SECRET);

  const { _id } = payload;

  req.user = _id;

  next();
  } catch (_e) {
    res.status(401).json({ message: 'jwt malformed' });
  } 
};
