import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Check, Plus } from 'lucide-react';
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from 'react-toastify';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { DatePicker } from "./date-picker";


const AddButton = () => {
    type PriorityType = "low-priority" | "medium-priority" | "high-priority" | "";

    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState<PriorityType>("");
    const [dueDate, setDueDate] = useState<Date | undefined>(new Date());

    const createTask = useMutation(api.tasksAndProjectsPost.createTask);

    const handleSubmitTask = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await createTask({
                name: taskName,
                priority: priority,
                dueDate: dueDate ? dueDate.getTime() : undefined,
            });
            setTaskName("")
            toast.success("Succesfully created a new task", {
                icon: <Check className="text-orange-400" />,
                hideProgressBar: true,
            });
            
        } catch (error) {
            console.log(error)
            setTaskName("")
            toast.error("Something went wrong", {
                icon: <Check className="text-orange-400" />,
                hideProgressBar: true,
            });
        };
    };


    return (
        <>
            <div>
                <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="w-80 hover:bg-gray-300">
                                <Plus />
                                Add Task
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader className="flex justify-center gap-y-7">
                                <DialogTitle className="text-orange-400">Add a new task</DialogTitle>
                                <form className="flex gap-x-2 flex-col" onSubmit={handleSubmitTask}>
                                    <Input
                                        type="string"
                                        placeholder="e.g. Workout, Study, Do a work task"
                                        required
                                        autoFocus
                                        minLength={2}
                                        maxLength={25}
                                        value={taskName}
                                        onChange={(e) => setTaskName(e.target.value)}
                                    />

                                    <RadioGroup defaultValue="priority" value={priority}  className="flex my-5 justify-around" onValueChange={(val) => setPriority(val as PriorityType)}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="low-priority" id="low-priority" />
                                            <Label htmlFor="low-priority">Low priority</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="medium-priority" id="medium-priority" />
                                            <Label htmlFor="medium-priority">Medium priority</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="high-priority" id="high-priority" />
                                            <Label htmlFor="high-priority">High priority</Label>
                                        </div>
                                    </RadioGroup>
                            
                                    <DatePicker dueDate={dueDate} setDueDate={setDueDate}/>
                        
                                    <Button type="submit" className="mt-5 bg-orange-300 hover:bg-orange-400">
                                        Create
                                    </Button>
                                </form>
                            
                            </DialogHeader>
                        </DialogContent>
                </Dialog>
            </div>
        </> 
     );
}
 
export default AddButton;