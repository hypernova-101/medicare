'use client';

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar as DatePicker } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog"

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "./ui/input";
import { toast } from "sonner";

interface Doctor {
  id: number
  name: string
  specialty: string
  image: any
  availability: string
}

interface DoctorCardProps {
  doctor: Doctor
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const [date, setDate] = useState<Date>()
  const [phone, setPhone] = useState<string>("")

  const schedule = async () => {
    localStorage.setItem(date!.toString(), JSON.stringify(doctor))
    toast(`${doctor.name} has recieved your request`)
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{doctor.name}</h3>
        <p className="text-muted-foreground">{doctor.specialty}</p>
        <div className="mt-2 text-xs text-primary font-medium">{doctor.availability}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Dialog>
          <DialogTrigger asChild>
              <Button className="w-full">
              <CalendarIcon className="mr-2 h-4 w-4" />
              Schedule Call
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>
              Contact {doctor.name}
            </DialogTitle>
            <h1>Pick a Date</h1>
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <DatePicker
          mode="single"
          selected={date}
          onSelect={(date) => setDate(date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    <h1>Enter your phone number</h1>
    <Input onChange={(e) => setPhone(e.target.value)} value={phone}/>
          <Button onClick={schedule}>
            Schedule
          </Button>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

