const jwt = require("jsonwebtoken");

const auth = (res, req, next) => {
   let token = req.headers.authorization?.split(" ")[1];

   if (token) {
      try {
         const decoded = jwt.verify(token, process.env.JWT_WEB_TOKEN);
         req.user = decoded;
         next();
      } catch (error) {
         res.status(401).json({ message: "Token not valid." });
      }
   } else {
      res.status(401).json({ message: "Token not found." });
   }
};

module.exports = { auth };
