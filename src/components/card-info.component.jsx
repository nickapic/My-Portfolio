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
        <span>Stack Used : {stack}</span>
        <br />
        <a href={githubUrl} className="button">
          Github Link
        </a>
        <br />
        <a href={hostedUrl} className="button">
          Hosted Link
        </a>
      </div>
    </div>
  );
}