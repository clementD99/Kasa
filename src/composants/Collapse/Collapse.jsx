import "../Collapse/collapse.scss";
import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-barre">
      <div className="collapse-titre" onClick={toggleCollapse}>
        {title}
        <i className={`fas fa-chevron-up ${isOpen ? "rotate" : ""}`}></i>
      </div>
      {isOpen && <div className="collapse-contenu">{content}</div>}
    </div>
  );
}

export default Collapse;
