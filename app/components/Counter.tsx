"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

const Counter = () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  console.log("Counter component");
  const [count, setCount] = useState(0);

  // Used with useAuth
  // if (!isLoaded || !userId) {
  //   return null;
  // }

  // Used with useUser
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default Counter;
