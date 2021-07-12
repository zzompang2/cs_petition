import React, { useState } from "react";
import "./CustomEditor.scss";


export default function CustomEditor({sendNewComment}) {
  const [content, setContent] = useState("");

 
  return (
    <div className="custom-editor">
      <textarea
        placeholder="댓글 입력..."
        onChange={(e) => setContent(e.target.value)}
        defaultValue={content}
      >
      </textarea>
      <button onClick={()=>sendNewComment(content)}>확인</button>
    </div>
  );
}