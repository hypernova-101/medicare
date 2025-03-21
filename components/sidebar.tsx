"use client"

import Link from "next/link"
import { Home, Users, Menu, X, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { UserButton } from "@clerk/nextjs"

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  currentPath: string
}

export function Sidebar({ isOpen, setIsOpen, currentPath }: SidebarProps) {
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    {
      name: "Home",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Contact a Doctor",
      href: "/dashboard/contact-doctor",
      icon: Users,
    },
    {
      name: "Appointments",
      href: "/dashboard/appointments",
      icon: Users,
    },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed border-r-2 inset-y-0 left-0 z-50 w-64 bg-card shadow-lg transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex h-16 items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">MediSmart</span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
              <X className="h-5 w-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          </div>

          {/* Sidebar content */}
          <nav className="flex-1 overflow-auto p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = currentPath === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="flex w-full px-10 items-center justify-end h-20 md:h-24">
            <UserButton/>
          </div>
        </div>
      </div>

      {/* Toggle button for mobile */}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleSidebar}
        className={cn("fixed left-4 top-4 z-50 md:hidden", isOpen && "hidden")}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open sidebar</span>
      </Button>
    </>
  )
}

