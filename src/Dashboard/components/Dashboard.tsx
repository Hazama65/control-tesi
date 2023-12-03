import { useState } from "react";
import { IoSchool, IoHome, IoDocument, IoRepeat,IoMenu, IoPersonCircleOutline,IoSearchOutline} from "react-icons/io5";

interface contentProps{
    mainPage: any
}

export const Dashboard = ({mainPage}:contentProps) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [navigationActive, setNavigationActive] = useState(false);

    const handleMouseOver = (index: any) => {
        setActiveIndex(index);
    };

    const handleToggleClick = () => {
        setNavigationActive(!navigationActive);
    };
    return (
        <>
            <div className={`container ${navigationActive ? 'nav-active' : ''}`}>

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
                        <a href="#">
                        <span className="icon">
                            <IoHome />
                        </span>
                        <span className="title">Dashboard</span>
                        </a>
                    </li>
                    <li className={activeIndex === 2 ? 'hovered' : ''} onMouseOver={() => handleMouseOver(2)}>
                        <a href="#">
                        <span className="icon">
                            <IoDocument />
                        </span>
                        <span className="title">Inscripcion</span>
                        </a>
                    </li>
                    <li className={activeIndex === 3 ? 'hovered' : ''} onMouseOver={() => handleMouseOver(3)}>
                        <a href="#">
                        <span className="icon">
                            <IoRepeat />
                        </span>
                        <span className="title">Reinscripcion</span>
                        </a>
                    </li>
                    </ul>
                </div>

                <div className={`main ${navigationActive ? 'active' : ''}`}>
                    <div className="topbar">
                        <div className="toggle" onClick={handleToggleClick}>
                            <IoMenu />
                        </div>
                        <div className="search">
                            <label>
                            <input type="text" placeholder="" />
                            <IoSearchOutline />
                            </label>
                        </div>

                        <div className="user">
                            <IoPersonCircleOutline />
                        </div>
                    </div>

                    {mainPage}
                </div>
            </div>
        </>
    )
}
