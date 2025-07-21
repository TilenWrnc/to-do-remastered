import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {Trash } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";
import { api } from "../../../convex/_generated/api";
import { useMutation } from "convex/react";

interface DeleteTaskButtonProps {
    taskId: Id<"tasks">;
}

const DeleteTaskButton = ({ taskId }: DeleteTaskButtonProps) => {

    const deleteTask = useMutation(api.tasksAndProjectsUpdateDelete.deleteTask);
    

    async function handleDeleteTask() {
    try {
      await deleteTask({ taskId });
    } catch (error) {
      console.log(error);
    }
  }

    return ( 
        <div>
            <AlertDialog>
            <AlertDialogTrigger>
                <Trash/>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteTask}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>  
        </div>
     );
}
 
export default DeleteTaskButton;

