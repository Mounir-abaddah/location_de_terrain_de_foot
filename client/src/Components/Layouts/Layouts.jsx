import React, { useEffect, useState } from 'react'
import './Layouts.css'
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineSportsSoccer } from "react-icons/md";
import {Link, useLocation} from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {  Badge } from "antd";
import logo from '../../assets/img/logo.png'
import { MdOutlineMessage } from "react-icons/md";


const Layout = ({ children }) => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const { user } = useSelector((state) => state.user)
  console.log(user);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formatDateTime = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return date.toLocaleDateString('fr-FR', options);
  };
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  const toggleShowUser = () => {
    setShowUser(!showUser)
  }
  const location = useLocation()
  const menuUser = [
    {
      name: 'Acceuil',
      path: '/Acceuil',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    },
    {
      name: 'Rendez-vous',
      path: '/Rendez_vous',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    },
    {
      name: 'Postulation terrain',
      path: '/reservation',
      icon: <MdOutlineSportsSoccer className='terrain' />
    },
    {
      name: 'Profile',
      path: `/profile/${user?.id}`,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    },
    {
      name: 'Se Déconnecter',
      path: '/login',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
      </svg>
    }
  ]

  const userPhoto = [
    {
      name: 'Profile',
      path: `/profile/${user?.id}`,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    },
    {
      name: 'Se Déconnecter',
      path: '/',
      onClick: () => { localStorage.clear() },
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
      </svg>
    }
  ]
  const adminMenu = [
    {
      name: "Acceuil",
      path: "/admin/Acceuil",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>,
    },
    {
      name: "Utilisateurs",
      path: "/admin/user-lists",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    },
    {
      name: "Messages",
      path: "/admin/Messages",
      icon: <MdOutlineMessage />
    },
    {
      name: 'Se Déconnecter',
      path: '/login',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
      </svg>
    }
  ];
  const menuToRender = user?.isAdmin ? adminMenu : menuUser;
  const userMenu = userPhoto

  return (
    <div className="main">
      <div className="flex layout">
        <div className={`${collapsed ? 'collapsed-sidebar' : 'sidebar'}`}>
          <h1><img src={logo} alt="" /></h1>
          <div className="icones flex flex-col items-center justify-center leading-14 font-bold">
            <div className="icone_1 flex flex-col justify-around ">
              {menuToRender.map((menu) => {
                const isActive = location.pathname === menu.path
                return (
                  <div className={`flex items-center gap-4 cursor-pointer ${isActive && 'active-menu-item'}`} onClick={() => {
                    if (menu.name === 'Se Déconnecter') {
                      localStorage.clear();
                      navigate('/login');
                    }
                  }}>
                    <Link to={menu.path}>
                      {menu.icon}
                    </Link>
                    {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="header flex flex-row justify-around">
            {collapsed ? (
              <CiMenuFries className='hamburgermenu' onClick={() => toggleSidebar(false)} />
            ) : (
              <IoCloseOutline className='hamburgermenu' onClick={() => toggleSidebar(true)} />
            )}
            <div className="datetime flex items-center gap-3">
              <span>{formatDateTime(currentDateTime)}</span>
            </div>
            <div className="image flex items-center gap-3">
              {user?.isAdmin && (
                <div className="notification">
                  <Badge count={user?.unseenNotifications.length} onClick={() => navigate('/admin/Notifications')}>
                    <i className="ri-notification-line layout-action-icon mr-2"></i>
                  </Badge>
                </div>
              )}
            </div>
          </div>

          <div className="body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
