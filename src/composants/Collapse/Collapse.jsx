import collapse from "../../donnees/collapse.json";
import "../Collapse/collapse.scss";
import React, { useState } from "react";

function Collapse ({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };      
}