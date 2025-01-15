// src/components/Post.jsx
import { motion } from "framer-motion";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

function Post({ post }) {
  const formatScore = (score) => {
    if (score >= 1000) {
      return `${(score / 1000).toFixed(1)}k`;
    }
    return score;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-reddit-dark rounded-lg border border-reddit-border hover:border-reddit-orange transition-colors duration-200"
    >
      <div className="p-4">
        {/* Post Header */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          {post.thumbnail && post.thumbnail !== "self" && (
            <img src={post.thumbnail} alt="" className="w-6 h-6 rounded" />
          )}
          <span>Posted by u/{post.author}</span>
          <span>•</span>
          <span>{new Date(post.created_utc * 1000).toLocaleDateString()}</span>
        </div>

        {/* Post Title */}
        <h3 className="text-white font-medium mb-2">{post.title}</h3>

        {/* Post Preview */}
        {post.thumbnail && post.thumbnail !== "self" && (
          <div className="relative aspect-video mb-2 rounded-lg overflow-hidden">
            <img
              src={post.thumbnail}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Post Actions */}
        <div className="flex items-center gap-4 text-gray-400">
          <div className="flex items-center gap-1">
            <button className="hover:text-reddit-orange p-1 rounded hover:bg-reddit-hover">
              <ArrowUpIcon className="w-5 h-5" />
            </button>
            <span className="font-medium">{formatScore(post.score)}</span>
            <button className="hover:text-blue-500 p-1 rounded hover:bg-reddit-hover">
              <ArrowDownIcon className="w-5 h-5" />
            </button>
          </div>
          <button className="flex items-center gap-1 hover:text-white p-1 rounded hover:bg-reddit-hover">
            <ChatBubbleLeftIcon className="w-5 h-5" />
            <span>{post.num_comments}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-white p-1 rounded hover:bg-reddit-hover">
            <ShareIcon className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Post;
