import { useState } from "react";
import { IoSchool, IoHome, IoDocument, IoRepeat } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserStateProps } from "../../../store/interfaces/interfaces";
import { onLogout } from "../../../store/user/userSlice";

interface SideBarProps {
    navigationActive: boolean;
}

export const SideBar = ({navigationActive}: SideBarProps) => {
    const dispatch = useDispatch();
    // const [navigationActive, setNavigationActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    
    const handleMouseOver = (index: any) => {
        setActiveIndex(index);
    };

  const {user} = useSelector( (state: UserStateProps) => state.user );

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(onLogout('Cerrando sesion'))
  }

  return (
    <>
        <div className={`navigation ${navigationActive ? 'active' : ''}`}>
            <ul>
                <li className={activeIndex === 0 ? 'hovered' : ''} onMouseOver={() => handleMouseOver(0)}>
                    <a href="#">
                    <span className="icon">
                        <IoSchool />
                    </span>
                    <span className="title">LEC</span>
                    </a>
                </li>
                <li className={activeIndex === 1 ? 'hovered' : ''} onMouseOver={() => handleMouseOver(1)}>
                    <Link to="/">
                    <span className="icon">
                        <IoHome />
                    </span>
                    <span className="title">Dashboard</span>
                    </Link>
                </li>
                {
                     user.role !== 'ADMIN_ROLE' &&(
                        <>
                        <li className={activeIndex === 2 ? 'hovered' : ''} onMouseOver={() => handleMouseOver(2)}>
                            <Link to='/inscription'>
                                <span className="icon">
                                    <IoDocument />
                                </span>
                                <span className="title">Inscripcion</span>
                            </Link>
                        </li>
                        <li className={activeIndex === 3 ? 'hovered' : ''} onMouseOver={() => handleMouseOver(3)}>
                            <Link to='/reinscription'>
                                <span className="icon">
                                    <IoRepeat />
                                </span>
                                <span className="title">Reinscripcion</span>
                            </Link>
                        </li>
                        </>
                     )
                }

                {
                    user.role === 'ADMIN_ROLE' &&(

                        <li className={activeIndex === 4 ? 'hovered' : ''} onMouseOver={() => handleMouseOver(4)}>
                            <Link to='/admin'>
                                <span className="icon">
                                    <IoRepeat />
                                </span>
                                <span className="title">Admin dashboard</span>
                            </Link>
                        </li>
                    )
                }

                        <li className={activeIndex === 5 ? 'hovered' : ''} onClick={handleLogout} onMouseOver={() => handleMouseOver(5)}>
                        <Link to=''>

                            <span className="icon">
                                {/* <IoRepeat /> */}
                            </span>
                            <span className="title">Logout</span>
                        </Link>
                            
                        </li>
            </ul>
        </div>
    </>
  )
}
