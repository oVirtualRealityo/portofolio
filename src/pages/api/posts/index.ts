import dbConnect from "@/lib/dbconnect";
import Post from "@/models/Post";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await dbConnect();
    
    if (req.method === "GET") {
        try {
            const posts = await Post.find({});
            res.status(200).json(posts);
          } catch (error) {
            res.status(500).json({ error: 'Failed to fetch posts' });
          }
    } else if (req.method === "POST") {
        try {

            const { title, description, rating, location, tags } = req.body;
            const tagss : string = tags;
            const splittags: string[] = tagss.split(",");
            // Log incoming data for debugging
            console.log("Request Body:", req.body);
            console.log(tags);
            console.log(tagss);
            console.log(splittags);

            if (!title || !description || !rating || !location) {
              return res.status(400).json({ error: "All fields are required" });
            }

            const newPost = new Post({
                title,
                description,
                rating,
                date: new Date().toISOString(),
                location,
                createdAt: new Date(),
                tags: splittags
            });
            await newPost.save();
            res.status(201).json(newPost);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add post' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default handler;
