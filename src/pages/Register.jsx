import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className="hero min-h-screen bg-base-100 py-10">
        <div className="hero-content flex-col">
          <div className="max-w-screen-lg text-center">
            <h1 className="text-5xl font-bold">Join Us and Boost Your Productivity!</h1>
            <p className="py-6">
            Unlock a world of efficiency by creating your account. Register now to access powerful task management tools and take control of your projects and goals. Let&apos;s get started on your journey towards success!
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="file" className="file-input file-input-bordered file-input-accent w-full" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Register</button>
              </div>
            </form>
            <p className="text-center px-5 mb-8">
              Already have an account? Please{" "}
              <Link
                to="/login"
                className="text-accent font-semibold underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
};

export default Register;