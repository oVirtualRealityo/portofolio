import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
      const { password } = req.body;
  
      // Compare the password with the environment variable
      if (password === process.env.ADMIN_PASSWORD) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(401).json({ success: false, message: 'Incorrect password' });
      }
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  }

  export default handler;