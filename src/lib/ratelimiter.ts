import rateLimit from 'express-rate-limit';

// Create the rate-limiting middleware
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,                    // Allow 5 requests per IP per window
  message: "Too many login attempts, please try again later.",
});

// Export the rate limiter middleware to be used in your API routes
export default rateLimiter;
