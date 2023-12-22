import image from "../assets/task-management.jpg";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="hero">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div>
            <h1 className="text-5xl font-bold">
              Super charge your productivity
            </h1>
            <p className="py-6">
              Discover a smarter way to manage tasks. ProTaskManager is your
              all-in-one solution for seamless task organization, collaboration,
              and productivity. Experience a new era of efficiency today.
            </p>
            <button className="btn btn-accent">Let&apos;s Explore</button>
          </div>
          <img src={image} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
