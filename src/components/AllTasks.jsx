import useTasks from "../hooks/useTasks";
import TaskList from "./TaskList";

const AllTasks = () => {
  const [tasks, loading] = useTasks();
  const todo = tasks?.filter((task) => task.status === "todo");
  const ongoing = tasks?.filter((task) => task.status === "ongoing");
  const completed = tasks?.filter((task) => task.status === "completed");
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-lg loading-spinner text-accent"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          <TaskList title="To Do List" tasks={todo} />
          <TaskList title="Ongoing List" tasks={ongoing} />
          <TaskList title="Completed List" tasks={completed} />
        </div>
      )}
    </>
  );
};

export default AllTasks;
