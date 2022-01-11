import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <h4>Coded by Lindsay Ward</h4>
      <div className="icons">
        <a
          href="https://github.com/lindsaymward/spacestagram"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi-github" role="img" aria-label="GitHub"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lindsaymward21/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
