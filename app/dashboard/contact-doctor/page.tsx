import { DoctorCard } from "@/components/doctor-card"
import a from "@/public/docs/a.png"
import b from "@/public/docs/b.jpg"
import c from "@/public/docs/c.jpg"
import d from "@/public/docs/d.webp"
import e from "@/public/docs/e.jpg"
import f from "@/public/docs/f.jpg"
import i from "@/public/docs/i.jpg"
import j from "@/public/docs/j.jpg"

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "General Practitioner",
    image: a,
    availability: "Available Today",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Cardiologist",
    image: b,
    availability: "Next Available: Tomorrow",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: c,
    availability: "Available Today",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Neurologist",
    image: d,
    availability: "Next Available: Friday",
  },
  {
    id: 5,
    name: "Dr.Ishan Patel",
    specialty: "Dermatologist",
    image: e,
    availability: "Available Today",
  },
  {
    id: 6,
    name: "Dr.Rohi Kumari",
    specialty: "Psychiatrist",
    image: f,
    availability: "Next Available: Monday",
  },
  {
    id: 7,
    name: "Dr. Lisa Thompson",
    specialty: "Gynecologist",
    image: i,
    availability: "Available Today",
  },
  {
    id: 8,
    name: "Dr. David Martinez",
    specialty: "Orthopedic Surgeon",
    image: j,
    availability: "Next Available: Wednesday",
  },
]

export default function ContactDoctor() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Contact a Doctor</h1>
        <p className="text-muted-foreground">
          Schedule a virtual consultation with one of our verified healthcare professionals
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}

