import { Link } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
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
                  <img src={user?.photoURL} alt="user image" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold">{user?.displayName}</h4>
                <p>{today}</p>
              </div>
            </div>
          </div>

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
          <button className="btn btn-accent w-full">Logout</button>
        </div>

        <div className="bg-gray-100 py-3 px-5 overflow-x-scroll">
          <AddTask />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            <TaskList title="To Do List" />
            <TaskList title="Ongoing List" />
            <TaskList title="Completed List" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
