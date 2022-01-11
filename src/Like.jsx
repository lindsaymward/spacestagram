import React, { useState } from "react";
import "./Like.css";

export default function Like() {
  const [like, setLike] = useState("bi bi-heart");

  function LikePhoto() {
    like === "bi bi-heart"
      ? setLike("bi bi-heart-fill")
      : setLike("bi bi-heart");
  }

  return (
    <button onClick={LikePhoto} type="button" class="btn">
      <i className={like} alt="Like button"></i>
    </button>
  );
}
