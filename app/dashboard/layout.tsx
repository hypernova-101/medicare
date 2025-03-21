import { DashboardLayout } from "@/components/dashboard-layout"

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DashboardLayout children={children}/>
  )
}