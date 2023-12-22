const UserSegments = () => {
  const userSegments = [
    {
      id: 1,
      title: "Developers",
      description:
        "Streamline development processes, plan sprints, and collaborate seamlessly.",
    },
    {
      id: 2,
      title: "Bankers",
      description:
        "Efficiently manage financial projects and tasks, ensuring timely completion.",
    },
    {
      id: 3,
      title: "Corporate Professionals",
      description:
        "Empower teams with a comprehensive solution for project success.",
    },
    {
      id: 4,
      title: "Small Business Owners",
      description:
        "Organize tasks, assign responsibilities, and monitor progress for smooth operations.",
    },
    {
      id: 5,
      title: "Project Managers",
      description:
        "Take control with intuitive tools for task assignment and project monitoring.",
    },
    {
      id: 6,
      title: "Students and Educators",
      description: "Enhance academic collaboration and project management.",
    },
    {
      id: 7,
      title: "Marketing Professionals",
      description:
        "Coordinate campaigns efficiently with tools for content creation and tracking.",
    },
    {
      id: 8,
      title: "Remote Teams",
      description:
        "Facilitate seamless collaboration and communication for distributed teams.",
    },
    {
      id: 9,
      title: "Event Planners",
      description:
        "Plan and execute events flawlessly with event-focused task management features.",
    },
  ];
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold">Who Benefits Most?</h2>
          <p className="text-gray-500 text-sm mt-5 mb-8">
            Discover who benefits most from our task management system. Tailored
            for developers, bankers, corporate professionals, and more, our
            application maximizes productivity and success across diverse
            industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userSegments.map((item) => (
            <div
              key={item.id}
              className="p-6 shadow-lg rounded-lg"
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserSegments;
