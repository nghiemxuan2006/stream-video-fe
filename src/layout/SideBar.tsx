import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCogs,
    faTable,
    faList,
    faUser,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  CalendarIcon,
  HeartIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
  Share2Icon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import './SideBar.css'; // Assuming you have a CSS file for styling
import { Avatar, ExpandLeftIcon, ExpandRightIcon, ViteIcon } from '../assets/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const paths = [
    {
      label: "Home",
      icon: <HomeIcon className="w-5 h-5" />,
      path: "/",
    },
    {
      label: "Favourites",
      icon: <HeartIcon className="w-5 h-5" />,
      path: "/favourites",
    },
    {
      label: "Trending",
      icon: <TrendingUpIcon className="w-5 h-5" />,
      path: "/trending",
    },
    {
      label: "Coming soon",
      icon: <CalendarIcon className="w-5 h-5" />,
      path: "/coming-soon",
    },
    {
      label: "Community",
      icon: <UsersIcon className="w-5 h-5" />,
      path: "/community",
    },
    {
      label: "Social",
      icon: <Share2Icon className="w-5 h-5" />,
      path: "/social",
    },
  ];
const SideBar = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);


    const handleClick = (path: string) => {
        navigate(path);
        setIsOpen(false); // Close sidebar on navigation
    }

    const handleTrigger = () => setIsOpen(!isOpen);
    return (
        <div className={`z-50 sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <div className='relative flex flex-col h-full'>
                <div className="trigger" onClick={handleTrigger}>
                    <img src={`${isOpen ? ExpandLeftIcon : ExpandRightIcon}`} alt="Toggle Sidebar" />

                </div>
                <div className='sidebar-header'>
                    <img src={ViteIcon} alt="Logo" />
                    <span>Video Stream</span>
                </div>
                <div className='sidebar-content'>
                    {paths.map((item, index) => (
                        <div key={index} className={`sidebar-position ${location.pathname === item.path ? 'active' : ''}`} onClick={() => handleClick(item.path)}>
                            {item.icon}
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="sidebar-footer">
                    <div className='flex flex-row items-center '>
                        <img src={Avatar} alt="avatar" className='w-[24px] h-[24px] object-contain rounded-full' />
                        <span>Nghiem xuan</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar