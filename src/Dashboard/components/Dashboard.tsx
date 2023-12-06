import { ReactNode, useState } from "react";
import { IoMenu, IoPersonCircleOutline,IoSearchOutline} from "react-icons/io5";
import { SideBar } from "./ui/SideBar";



interface DashBoardProps{
    children: ReactNode
}

export const Dashboard = ({children}:DashBoardProps) => {

    const [navigationActive, setNavigationActive] = useState(false);

    const handleToggleClick = () => {
        setNavigationActive(!navigationActive);
    };

    return (
        <>
            <div className={`container ${navigationActive ? 'nav-active' : ''}`}>

              <SideBar navigationActive={false} />

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

                    {children}
                </div>
            </div>
        </>
    )
}
