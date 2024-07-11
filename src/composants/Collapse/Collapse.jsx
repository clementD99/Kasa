import "../Collapse/collapse.scss";
import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-barre">
      <div onClick={toggleCollapse}>
        {title}
      </div>
      {isOpen && <div className="collapse-contenu">{content}</div>}
    </div>
  );
}

export default Collapse;
