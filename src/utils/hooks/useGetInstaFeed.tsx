import type * as Behold from "@behold/types";
import { useState, useEffect } from "react";
 


const useGetInstaFeed = (feedURL:string) => {
  const controller = new AbortController();
  const [posts, setPosts] = useState<Behold.Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchFeed = async () => {
    try {
      const rawFeed = await fetch(feedURL as string, {
        signal: controller.signal,
      });

      console.log("Response received");

      // Pass HTTP errors to the catch block
      if (!rawFeed.ok) {
        const errorMessage = await rawFeed.text();
        console.error("ERROR:", errorMessage);
        throw new Error(errorMessage);
      }

      // Parse JSON
      const feedJSON: Behold.Feed = await rawFeed.json();

      // Update state with fetched posts
      setPosts(feedJSON.posts);
    } catch (err: any) {
      // Handle AbortErrors
      if (err.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch Error:", err);
        setError("Failed to fetch feed."); // Set error message for your component if needed
      }
    }
  };

  useEffect(() => {
    fetchFeed();

  }, []);

  return { posts, error }; // Return posts and error state
};

export default useGetInstaFeed;
