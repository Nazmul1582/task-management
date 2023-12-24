import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const TaskList = ({ title, tasks }) => {
  const handleDelete = async(id) => {
    try{
      const res = await axios.delete(`http://localhost:5000/tasks/${id}`)
      if(res.data.deletedCount > 0){
        toast.success("Task deleted successfully!")
      }
    }
    catch (error) {
      console.log(error);
      toast.error(error.message)
    }
    
  }

  return (
    <div className="border rounded-lg shadow-xl p-5">
      <h2 className="text-center font-bold text-3xl mb-6">{title}</h2>
      <div className="flex flex-col gap-3">
        {
          tasks?.map(task => (
          <div key={task._id} className="p-2 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between">
            <h4 className="font-semibold mb-2">{task?.title}</h4>
            <div className="badge badge-secondary">{task?.priority}</div>
          </div>
          <p className="text-xs">{task?.message}</p>
          <div className="flex flex-col sm:flex-row gap-2 mt-3 mb-2">
            <p className="text-sm">Deadline: {task?.deadline}</p>
            <Link to={`/dashboard/edit-task/${task._id}`} className="btn btn-xs btn-warning">Edit</Link>
            <button onClick={() => handleDelete(task._id)} className="btn btn-xs btn-error">Delete</button>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default TaskList;
