import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useTasks = () => {
    const [tasks, setTasks] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/tasks?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log("data", data);
            setTasks(data);
            setLoading(false);
          })
          .catch((error) => console.log(error));
      }, [user.email]);
    return [tasks, loading]
};

export default useTasks;