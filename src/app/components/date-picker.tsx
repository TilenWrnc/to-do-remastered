import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  dueDate: Date | undefined;
  setDueDate: (date: Date | undefined) => void;
}

export function DatePicker({ dueDate, setDueDate }: DatePickerProps) {
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
        <Calendar mode="single" selected={dueDate} onSelect={setDueDate} />
      </PopoverContent>
    </Popover>
  )
}