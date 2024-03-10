import "../index.css";
import React, { useState } from "react";
const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <div className="main">
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
        </div>

        <div className="items" style={{ display: expand ? "block" : "none" }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id}/>
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};

export default Folder;
