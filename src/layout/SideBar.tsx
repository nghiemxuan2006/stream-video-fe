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
import { ExpandLeftIcon, ExpandRightIcon, ViteIcon } from '../assets/icons';
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTrigger = () => setIsOpen(!isOpen);
    return (
        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <div className='sidebar-header'>
                <div className="trigger" onClick={handleTrigger}>
                    <img src={`${isOpen ? ExpandLeftIcon : ExpandRightIcon}`} alt="Toggle Sidebar" />

                </div>
                <img src={ViteIcon} alt="Logo" />
                <span>Video Stream</span>
            </div>
            <div className='sidebar-content'>
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

            <div className="sidebar-footer">

            </div>
        </div>
    )
}

export default SideBar