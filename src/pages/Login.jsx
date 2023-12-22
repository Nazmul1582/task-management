import { Link } from "react-router-dom";
import googleImage from "../assets/google.png";

const Login = () => {
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Login</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control">
              <button className="btn btn-accent bg-white hover:bg-white hover:shadow-accent/30 hover:shadow-lg">
                <img className="w-10" src={googleImage} alt="google logo" />
                Sign In with Google
              </button>
            </div>
          </form>
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