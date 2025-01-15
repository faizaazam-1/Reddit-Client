// src/components/AddLaneButton.jsx
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function AddLaneButton({ onAdd }) {
  const [isAdding, setIsAdding] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
      setIsAdding(false);
    }
  };

  return (
    <div className="min-w-[300px] h-[300px] flex items-center justify-center">
      {isAdding ? (
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          onSubmit={handleSubmit}
          className="w-full max-w-sm p-6 bg-white rounded-lg shadow-sm border border-primary-200"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter subreddit name"
            className="w-full px-4 py-2 rounded-lg border border-primary-200 
                     focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
                     outline-none transition-all"
            autoFocus
          />
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg
                       hover:bg-primary-600 transition-colors"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="flex-1 bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg
                       hover:bg-neutral-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAdding(true)}
          className="w-14 h-14 bg-primary-500 rounded-full text-white
                   hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md
                   flex items-center justify-center group relative"
        >
          <PlusIcon className="w-6 h-6" />
          <span
            className="absolute -bottom-8 opacity-0 group-hover:opacity-100
                        transition-opacity text-neutral-700 whitespace-nowrap text-sm"
          >
            Add Lane
          </span>
        </motion.button>
      )}
    </div>
  );
}

export default AddLaneButton;
