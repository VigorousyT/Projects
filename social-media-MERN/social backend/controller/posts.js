import User from "../models/User.js";
import Post from "../models/Post.js";

/* Create post */
export const createPost = async () => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = newPost({
            userId,
            firstName: user.firstName,
            lastName: user.firstName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        })
        await newPost.save();
        const post = await Post.find();
        resizeBy.status(201).json(post);
    } catch {
        resizeBy.status(409).json({ message: "picture not Created in Database" })
    }
};

/* Read post */
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch {
        res.status(404).json({ message: "Feed not added in database" })
    }
};

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/* Update post */
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};