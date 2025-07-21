import { Separator } from "@/components/ui/separator";
import * as React from "react"
import TaskList from "./task-list";

interface TasksProps {
    currentTasks : "all" | "important",
    setCurrentTasks: React.Dispatch<React.SetStateAction<"all" | "important">>
}

const Tasks = ({ currentTasks, setCurrentTasks }: TasksProps) => {
    return ( 
        <div className="w-1/2 h-[70%] mx-0 my-10 p-5 bg-[#FAF9F6] rounded-4xl shadow-[0_30px_80px_rgba(0,0,0,0.35),_0_-15px_40px_rgba(0,0,0,0.15)]">
            <h1 className="text-3xl text-orange-500 font-bold text-center">
                Tasks
            </h1>
            <Separator className="bg-orange-500"/>

            <TaskList currentTasks={currentTasks} setCurrentTasks={setCurrentTasks}/>
        </div>
     );
}
 
export default Tasks;