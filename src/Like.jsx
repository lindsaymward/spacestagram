import React, { useState } from "react";
import "./Like.css";

export default function Like() {
  const [heartFill, setHeartFill] = useState("bi bi-heart");
  const [like, setLike] = useState("Like");

  function LikePhoto() {
    heartFill === "bi bi-heart"
      ? setHeartFill("bi bi-heart-fill")
      : setHeartFill("bi bi-heart");
    like === "Like" ? setLike("Unlike") : setLike("Like");
  }

  return (
    <button onClick={LikePhoto} type="button" className="btn">
      <i className={heartFill} alt="Like button"></i>
      <div>{like}</div>
    </button>
  );
}
