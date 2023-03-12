import Notify from "./Notify";
import { useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Login")
  }
  return (
    <>
      <header className="flex items-center justify-between bg-slate-500 p-4 ">
        <div>
          <h1 className="logo text-4xl ">ONLINE-VIDEO</h1>
        </div>
        <div className="flex">
          <div className="text-xl lg:text-2xl">
            <ul>
              <li className= "lg:mr-10 mr-5 -mt-0.5 cursor-pointer ">
                <h3 onClick={handleClick}>Login/Register</h3>
              </li>
            </ul>
          </div>
          <div className="text-4xl ">
            <Notify />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
