import React, { useState } from "react";
import "./Like.css";

export default function Like() {
  const [like, setLike] = useState("Like");

  function LikePhoto() {
    like === "Like" ? setLike("Unlike") : setLike("Like");
  }

  return (
    <button onClick={LikePhoto} type="button">
      {like}
    </button>
  );
}
