import React, { useState } from "react";
import Heart from "react-animated-heart";

export default function Photo() {
  const [isClick, setClick] = useState(false);
  return (
    <article className="Photo">
      <h2>Hello from Photo</h2>
      <button>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </button>
    </article>
  );
}

// API Key is ptWGI0lwo6zmVqleMkST6V9CfElUnCJggQwDRgWs
