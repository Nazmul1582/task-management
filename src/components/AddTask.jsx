import { useForm } from "react-hook-form";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="border rounded-lg shadow-xl p-5">
      <h2 className="text-center font-bold text-3xl mb-6">Create Task</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-md mx-auto flex flex-col gap-5 mb-10"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Name</span>
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Task title"
            className="input w-full"
          />
          {errors.title && (
            <p className="text-sm text-red-500">Task Title is required!</p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="form-control flex-grow">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              {...register("deadline", { required: true })}
              type="date"
              placeholder="Deadline"
              className="input w-full"
            />
            {errors.deadline && (
              <p className="text-sm text-red-500">Deadline is required!</p>
            )}
          </div>
          <div className="from-control flex-grow">
            <label className="label">
              <span className="label-text">Priority</span>
              </label>
            <select
              {...register("priority", { required: true })}
              defaultValue="default"
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select Your Priority
              </option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
            {errors.priority && (
              <p className="text-sm text-red-500">Priority is required!</p>
            )}
          </div>
        </div>
        <div className="form-control">
          <label className="lable">
            <span className="label-text">Message</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            type="text"
            placeholder="Task description"
            className="textarea textarea-bordered w-full"
          />
          {errors.message && (
            <p className="text-sm text-red-500">Message is required!</p>
          )}
        </div>
        <button className="btn btn-accent w-full">Create Task</button>
      </form>
    </div>
  );
};

export default AddTask;
