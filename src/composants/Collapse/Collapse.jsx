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
        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
      </div>
      {isOpen && <div className="collapse-contenu">{content}</div>}
    </div>
  );
}

export default Collapse;
