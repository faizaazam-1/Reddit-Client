// src/components/LaneContainer.jsx
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRedditData } from "../hooks/useRedditData";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";

function LaneContainer({ subreddit, onRemove }) {
  const { posts, loading, error } = useRedditData(subreddit);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-w-[350px] h-[800px] bg-gray-900/50 backdrop-blur-sm 
                rounded-lg border border-gray-800 overflow-hidden flex flex-col"
    >
      {/* Lane Header */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gray-900/50">
        <div className="flex items-center gap-2">
          <span className="text-gray-300 font-medium">/r/{subreddit}</span>
        </div>
        <button
          onClick={onRemove}
          className="p-1.5 hover:bg-gray-800 rounded-md transition-colors text-gray-400 hover:text-gray-300"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Lane Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {error ? (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <p className="text-red-400 font-medium">No subreddit found!</p>
            <p className="text-gray-500 text-sm mt-2">
              Try checking the subreddit name and try again
            </p>
          </div>
        ) : loading ? (
          <div className="p-4 space-y-4">
            {[...Array(5)].map((_, i) => (
              <PostSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {posts.map((post) => (
              <Post key={post.data.id} post={post.data} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default LaneContainer;
