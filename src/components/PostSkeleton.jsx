// src/components/PostSkeleton.jsx
function PostSkeleton() {
  return (
    <div className="bg-gray-800/50 rounded-lg p-4 animate-pulse">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
        <div className="h-4 w-32 bg-gray-700 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-700 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-700 rounded"></div>
      </div>
      <div className="mt-4 flex gap-4">
        <div className="h-8 w-16 bg-gray-700 rounded"></div>
        <div className="h-8 w-16 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}

export default PostSkeleton;
