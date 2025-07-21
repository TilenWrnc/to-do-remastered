import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

interface DatePickerChangeProps {
  dueDate: Date | undefined;
  taskId: Id<"tasks">,
}

export function DatePickerChange({ dueDate, taskId }: DatePickerChangeProps) {
    const [newDate, setNewDate] = useState(dueDate);

    const updateTaskDate = useMutation(api.tasksAndProjectsUpdateDelete.updateTaskDate);

    const handleChangeDate = async (date: Date | undefined) => {
        setNewDate(date);
        if (!date) return;

        try {
            await updateTaskDate({
                taskId,
                dueDate: date.getTime(), 
            });
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!dueDate}
          className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal"
        >
          <CalendarIcon />
          {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={newDate} onSelect={handleChangeDate} />
      </PopoverContent>
    </Popover>
  )
}