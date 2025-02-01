import { NextApiRequest, NextApiResponse } from "next";
import rateLimit from 'express-rate-limit';

// Set up rate limiting (limit to 5 attempts per 15 minutes)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 2,                    // Max 5 login attempts per window
  message: "Too many login attempts, please try again later.",
});

// Define the handler function for the login
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Apply the rate limiter for POST requests
  if (req.method === "POST") {
    // Use the rateLimiter middleware for the request
    loginLimiter(req, res, () => {
      const { password } = req.body;

      // Compare the password with the environment variable
      if (password === process.env.ADMIN_PASSWORD) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(401).json({ success: false, message: "Incorrect password" });
      }
    });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
};

export default handler;
