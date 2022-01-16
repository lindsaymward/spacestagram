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
          title="GitHub Repository for this app"
        >
          <i className="bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lindsaymward21/"
          target="_blank"
          rel="noreferrer"
          title="Lindsay's LinkedIn Profile"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}
