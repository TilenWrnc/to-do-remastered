import DeleteTaskButton from "./conformation";
import EditTask from "./edit";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Checkbox } from "@/components/ui/checkbox"
import clsx from 'clsx';
import { Loader } from "lucide-react";
import { DatePickerChange } from "./date-picker-change";

interface TaskListProps {
    currentTasks : string,
}

const TaskList = ({ currentTasks }: TaskListProps) => {
  const tasks = useQuery(api.tasksAndProjectsGet.getTasks);

  if (!tasks) {
    return (
      <div className="flex justify-center mt-30">
        <Loader className="size-5 animate-spin" />
      </div>
    );
  };

  if (tasks.length === 0) {
    return <p className="flex justify-center mt-30 text-black opacity-50">No tasks</p>
  }

  return (
    <div className="overflow-y-scroll overflow-x-hidden w-full py-5 px-10 max-h-[90%]">
      {currentTasks === "all" &&
        tasks.map((task) => (
          <div
            key={task._id}
            className={clsx(
              "flex p-4 my-4 w-full justify-between items-center rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1),_0_4px_12px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-pointer",
              task.priority === "low-priority"
                ? "bg-green-200 border-l-4 border-green-400"
                : task.priority === "medium-priority"
                ? "bg-yellow-200 border-l-4 border-yellow-400"
                : "bg-red-300 border-l-4 border-red-400"
            )}
          >
            <div className="flex gap-x-5 justify-center items-center">
              <Checkbox className="border-black border-3" />
              <p>{task.name}</p>
            </div>

            <div className="flex gap-x-7">
              <DatePickerChange
                dueDate={task.dueDate ? new Date(task.dueDate) : undefined}
                taskId={task._id}
              />
              <EditTask
                taskId={task._id}
                oldName={task.name}
                oldPriority={task.priority}
              />
              <DeleteTaskButton taskId={task._id} />
            </div>
          </div>
        ))}

      {currentTasks === "important" &&
        tasks
          .filter((task) => task.priority === "high-priority")
          .map((task) => (
            <div
              key={task._id}
              className={clsx(
                "flex p-4 my-4 w-full justify-between items-center rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1),_0_4px_12px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-pointer",
                "bg-red-300 border-l-4 border-red-400"
              )}
            >
              <div className="flex gap-x-5 justify-center items-center">
                <Checkbox className="border-black border-3" />
                <p>{task.name}</p>
              </div>

              <div className="flex gap-x-7">
                <DatePickerChange
                  dueDate={task.dueDate ? new Date(task.dueDate) : undefined}
                  taskId={task._id}
                />
                <EditTask
                  taskId={task._id}
                  oldName={task.name}
                  oldPriority={task.priority}
                />
                <DeleteTaskButton taskId={task._id} />
              </div>
            </div>
          ))}
    </div>
  );
};
 
export default TaskList;