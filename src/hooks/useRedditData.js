// src/hooks/useRedditData.js
import { useState, useEffect } from "react";

export function useRedditData(subreddit) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://www.reddit.com/r/${subreddit}.json`
        );
        if (!response.ok) throw new Error("Subreddit not found");
        const data = await response.json();
        setPosts(data.data.children);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subreddit]);

  return { posts, loading, error };
}
