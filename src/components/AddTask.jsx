const AddTask = () => {
  return (
    <div className="border rounded-lg shadow-xl p-5">
      <h2 className="text-center font-bold text-3xl mb-6">Create Task</h2>
      <form className="max-w-screen-md mx-auto flex flex-col gap-5 mb-10">
        <input type="text" placeholder="Task title" className="input w-full" />
        <div className="flex flex-col md:flex-row gap-5">
          <input type="date" placeholder="Deadline" className="input w-full" />
          <select defaultValue="default" className="select select-bordered w-full">
            <option disabled value="default">
              Select Your Priority
            </option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <textarea
          type="text"
          placeholder="Task description"
          className="textarea textarea-bordered w-full"
        />
        <button className="btn btn-accent w-full">Create</button>
      </form>
    </div>
  );
};

export default AddTask;
