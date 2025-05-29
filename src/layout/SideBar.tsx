import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    faCogs,
    faTable,
    faList,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import './SideBar.css'; // Assuming you have a CSS file for styling
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTrigger = () => setIsOpen(!isOpen);
    return (
        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <div className="trigger" onClick={handleTrigger}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>

            <div className="sidebar-position">
                <FontAwesomeIcon icon={faUser} />
                <span>Home</span>
            </div>
            <div className="sidebar-position">
                <FontAwesomeIcon icon={faCogs} />
                <span>Menu item 2</span>
            </div>
            <div className="sidebar-position">
                <FontAwesomeIcon icon={faTable} />
                <span>Menu item 3</span>
            </div>

            <div className="sidebar-position">
                <FontAwesomeIcon icon={faList} />
                <span>Position 4</span>
            </div>
        </div>
    )
}

export default SideBar