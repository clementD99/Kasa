<<<<<<< HEAD
import "../Collapse/collapse.scss";
import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => <p key={index}>{item}</p>);
    }
    return <p>{content}</p>;
  };

  return (
    <div className="collapse-barre">
      <div className="collapse-titre" onClick={toggleCollapse}>
        {title}
        <i className={`fas fa-chevron-up ${isOpen ? "rotate" : ""}`}></i>
      </div>
      {isOpen && <div className="collapse-contenu">{renderContent()}</div>}
    </div>
  );
}

export default Collapse;
=======
import "../Collapse/collapse.scss";
import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => <p key={index}>{item}</p>);
    }
    return <p>{content}</p>;
  };

  return (
    <div className="collapse-barre">
      <div className="collapse-titre" onClick={toggleCollapse}>
        {title}
        <i className={`fas fa-chevron-up ${isOpen ? "rotate" : ""}`}></i>
      </div>
      {isOpen && <div className="collapse-contenu">{renderContent()}</div>}
    </div>
  );
}

export default Collapse;
>>>>>>> 0618f01408ec03809c450b68336ce8eccee9970c
