import React from "react";

export default function Comments({ comments }) {
  const items = comments?.map((e, index) => (
    <div class="comment" key={index}>
      <p>{e.body}</p>
    </div>
  ));
  return (
    <div class="comments">
      <p>Comments:</p>
        {items}
    </div>
  );
}
