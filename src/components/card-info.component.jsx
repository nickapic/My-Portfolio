import React from "react";
import "./card-info.style.scss";

export default function Card({
  title,
  info,
  stack,
  image,
  githubUrl,
  hostedUrl
}) {
  return (
    <div className="card">
      <div className="text-content">
        <h1>{title}</h1>
        <p>
          <strong>Information</strong> : {info}
        </p>
        <p>
          <strong>Stack Used</strong> : {stack}
        </p>
        <br />
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Github Link
        </a>
        <br />
        <a
          href={hostedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Hosted Link
        </a>
      </div>
    </div>
  );
}
