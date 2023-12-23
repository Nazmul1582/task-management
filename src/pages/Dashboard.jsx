import { Link } from "react-router-dom";
import image from "../assets/task-management.jpg";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  return (
    <section>
      <div className="grid grid-cols-[200px_1fr] min-h-screen">
        <div>
          <div className="p-3 bg-accent">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={image} alt="user image" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Md. Nazmul Hasan</h4>
                <p>Date</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
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
