const TaskList = ({ title }) => {
  return (
    <div className="border rounded-lg shadow-xl p-5">
      <h2 className="text-center font-bold text-3xl mb-6">{title}</h2>
      <div className="flex flex-col gap-3">
        <div className="p-2 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between">
            <h4 className="font-semibold mb-2">Task no. 1</h4>
            <div className="badge badge-secondary">high</div>
          </div>
          <p className="text-xs">This is the first task of this project</p>
          <div className="flex gap-2 mt-3 mb-2">
            <p className="text-sm">Deadline: 25-12-23</p>
            <button className="btn btn-xs btn-warning">Edit</button>
            <button className="btn btn-xs btn-error">Delete</button>
          </div>
        </div>
        <div className="p-2 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between">
            <h4 className="font-semibold mb-2">Task no. 2</h4>
            <div className="badge badge-primary">moderate</div>
          </div>
          <p className="text-xs">This is the second task of this project</p>
          <div className="flex gap-2 mt-3 mb-2">
            <p className="text-sm">Deadline: 25-12-23</p>
            <button className="btn btn-xs btn-warning">Edit</button>
            <button className="btn btn-xs btn-error">Delete</button>
          </div>
        </div>
        <div className="p-2 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between">
            <h4 className="font-semibold mb-2">Task no. 3</h4>
            <div className="badge badge-info">low</div>
          </div>
          <p className="text-xs">This is the Third task of this project</p>
          <div className="flex gap-2 mt-3 mb-2">
            <p className="text-sm">Deadline: 25-12-23</p>
            <button className="btn btn-xs btn-warning">Edit</button>
            <button className="btn btn-xs btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
