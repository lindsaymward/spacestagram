import React, { useState } from "react";

export default function Photo() {
  const [like, setLike] = useState("Like");

  function LikePhoto() {
    like === "Like" ? setLike("Unlike") : setLike("Like");
  }

  return (
    <article className="Photo">
      <h2>Hello from Photo</h2>
      <button onClick={LikePhoto}>{like}</button>
    </article>
  );
}

// API Key is ptWGI0lwo6zmVqleMkST6V9CfElUnCJggQwDRgWs
