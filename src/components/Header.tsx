import { useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import img from "../assets/accountImg.png";

const Header = () => {
    const [phoneActive, setPhoneActive] = useState<boolean>(
        window.innerWidth < 1100
    );

    const resizeHandler = () => {
        setPhoneActive(window.innerWidth < 1300);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);
    return (
        <div className="header">
            <div className="title">
                <span className="headingWORO">Woro</span>
                <span className="headingCRM">crm</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none">
                    <path
                        d="M14.6667 8C14.6667 11.6819 11.682 14.6667 8.00006 14.6667C4.31816 14.6667 1.33339 11.6819 1.33339 8C1.33339 4.3181 4.31816 1.33333 8.00006 1.33333C11.682 1.33333 14.6667 4.3181 14.6667 8Z"
                        stroke="#3F8CFF"
                        strokeWidth="0.666667"
                    />
                    <path
                        d="M8.33339 8.93338H6.83339V11.9334H5.50006V4.16672H8.23339C8.66672 4.16672 9.06672 4.23338 9.43339 4.33338C9.76672 4.43338 10.0667 4.60005 10.3001 4.76672C10.5334 4.96672 10.7334 5.20005 10.8334 5.50005C10.9334 5.80005 11.0334 6.13338 11.0334 6.50005C11.0334 7.03338 10.9001 7.46672 10.6667 7.80005C10.4001 8.13338 10.0667 8.43338 9.63339 8.60005L11.3667 11.8334V11.9001H9.93339L8.33339 8.93338ZM6.83339 7.86672H8.23339C8.46672 7.86672 8.70006 7.83338 8.86672 7.76672C9.03339 7.70005 9.20006 7.60005 9.33339 7.50005C9.46672 7.40005 9.53339 7.26672 9.60006 7.10005C9.66672 6.93338 9.70006 6.76672 9.70006 6.56672C9.70006 6.36672 9.66672 6.20005 9.60006 6.03338C9.53339 5.86672 9.46672 5.73338 9.33339 5.63338C9.20006 5.53338 9.06672 5.43338 8.86672 5.36672C8.70006 5.30005 8.46672 5.26672 8.20006 5.26672H6.83339V7.86672Z"
                        fill="#3F8CFF"
                    />
                </svg>
            </div>
            <div className="inputNotificationData">
                {phoneActive ? (
                    <div className="notification">
                        <IoIosSearch />
                    </div>
                ) : (
                    <div className="inputSearch">
                        <IoIosSearch />
                        <input type="text" placeholder="Search" />
                    </div>
                )}
                <div className="notification">
                    <IoMdNotificationsOutline />
                </div>
                <div className="account">
                    <span>Brio pharma</span>
                    <button>
                        <BiSolidDownArrow />
                    </button>
                </div>
                <div className="imgAccount">
                    <img src={img} alt="" />
                    <span>Akshay</span>
                    <button>
                        <BiSolidDownArrow />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
