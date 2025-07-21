import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Pen } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";
import { useState } from "react";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";


interface EditTaskProps {
    taskId: Id<"tasks">,
    oldName: string,
    oldPriority: "low-priority" | "medium-priority" | "high-priority" | "";
}

const EditTask = ({ taskId, oldName, oldPriority }: EditTaskProps) => {
    type PriorityType = "low-priority" | "medium-priority" | "high-priority" | "";

    const [newTaskName, setNewTaskName] = useState(oldName);
    const [newPriority, setNewPriority] = useState<PriorityType>("");

    const updateTask = useMutation(api.tasksAndProjectsUpdateDelete.updateTask);
    

    async function handleUpdateTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await updateTask({
                taskId, 
                name: newTaskName,
                priority: newPriority 
            });
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div>
             <Dialog
                onOpenChange={(open) => {
                if (open) {
                setNewTaskName(oldName);
                setNewPriority(oldPriority); 
                }
            }}
             >
                <DialogTrigger asChild>
                    <Pen/>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className="flex justify-center gap-y-7">
                        <DialogTitle className="text-orange-400">Edit tasks</DialogTitle>
                        <form className="flex gap-x-2 flex-col" onSubmit={handleUpdateTask}>
                            <Input
                                type="string"
                                placeholder="e.g. Workout, Study, Do a work task"
                                autoFocus
                                minLength={2}
                                maxLength={25}
                                value={newTaskName}
                                onChange={(e) => setNewTaskName(e.target.value)}
                            />

                            <RadioGroup defaultValue="priority" className="flex my-5 justify-around" value={newPriority} onValueChange={(val) => setNewPriority(val as PriorityType)}>
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
                    
                
                            <Button type="submit" className="mt-5 bg-orange-300 hover:bg-orange-400">
                                Edit
                            </Button>
                        </form>
                    
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
     );
}
 
export default EditTask;