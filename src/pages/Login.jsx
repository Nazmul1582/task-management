import { Link, useNavigate } from "react-router-dom";
import googleImage from "../assets/google.png";
import githubImage from "../assets/github-logo.png";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const { login, loginWithGoogle, loginWithGithub } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    // login user
    login(email, password)
      .then(() => {
        reset();
        toast.success("User has loggin in successfully.");
        navigate("/dashboard");
      })
      .catch((error) => {
        reset();
        toast.error(error.message);
      });
  };

  const handleSocialLogin = (social) => {
    social()
      .then(() => {
        toast.success("User loggin in successfully!");
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-100 py-10">
      <div className="hero-content flex-col">
        <div className="max-w-screen-md text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Welcome back! Log in to your account and dive into a world of
            productivity. Your tasks, projects, and goals are just a login away.
            Let&apos;s make progress together!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">Email is required!</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-sm text-red-500">Password is required!</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-sm text-red-500">
                  Password must be 6 characters or longer.
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Login</button>
            </div>
            <div className="divider">OR</div>
          </form>
          <div className="flex flex-col gap-5 mb-5 -mt-5 px-8">
            <button
              onClick={() => handleSocialLogin(loginWithGoogle)}
              className="btn btn-accent bg-white hover:bg-white hover:shadow-accent/30 hover:shadow-lg"
            >
              <img className="w-10" src={googleImage} alt="google logo" />
              Sign In with Google
            </button>
            <button onClick={() => handleSocialLogin(loginWithGithub)} className="btn btn-accent bg-white hover:bg-white hover:shadow-accent/30 hover:shadow-lg">
              <img className="w-10" src={githubImage} alt="github logo" />
              Sign In with Github
            </button>
          </div>
          <p className="text-center px-5 mb-8">
            Are you new here? Please{" "}
            <Link
              to="/register"
              className="text-accent font-semibold underline"
            >
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
