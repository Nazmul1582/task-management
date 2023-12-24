import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logout } = useAuth();

  const date = new Date();
  const today = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;


  return (
    <section>
      <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[200px_1fr] min-h-screen">
        <div>
          <div className="p-3 bg-accent">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} alt="user image" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold">{user.displayName}</h4>
                <p>{today}</p>
              </div>
            </div>
          </div>

          <ul className="menu">
            <li>
              <Link to="/dashboard">Add Task</Link>
            </li>
            <li>
              <Link to="/dashboard/all-tasks">All Task</Link>
            </li>
          </ul>

          <div className="divider"></div>

          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Link to="/login" onClick={logout} className="btn btn-accent w-full">
            Logout
          </Link>
        </div>

        <div className="bg-gray-100 py-3 px-5 overflow-x-scroll">
          <Outlet />          
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
