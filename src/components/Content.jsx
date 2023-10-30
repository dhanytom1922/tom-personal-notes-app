import React from "react";

function Content({ title, date, body }) {
  return (
    <div className="noteItem-content">
      <h3 className="noteItem-title">{title}</h3>
      <p className="noteItem-date">{date}</p>
      <p className="noteItem-body">{body}</p>
    </div>
  );
}

export default Content;
