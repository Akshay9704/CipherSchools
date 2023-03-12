import { FaBell } from "react-icons/fa";
const Notify = () => {
  return (
    <>
    <div className="cursor-pointer position-relative mr-5">
      <FaBell/>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-sm">+99</span>      
    </div>
    </>
  )
}

export default Notify
