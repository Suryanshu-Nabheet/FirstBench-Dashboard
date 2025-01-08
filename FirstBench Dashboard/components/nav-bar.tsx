import Link from "next/link"
import { Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="bg-[#2A2F3C] text-white py-3 px-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#2DD4BF">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-xl font-semibold">Firstbench</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link href="/dashboard" className="flex items-center space-x-2 text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
              <span>Dashboard</span>
            </Link>
            <Link href="/firstguru" className="flex items-center space-x-2 text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              <span>FirstGuru</span>
            </Link>
            <Link href="/townhall" className="flex items-center space-x-2 text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              <span>TownHall</span>
            </Link>
            <Link href="/ai-evaluation" className="flex items-center space-x-2 text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H6v-2h6v2zm4-4H6v-2h10v2zm0-4H6V7h10v2z"/>
              </svg>
              <span>AI Evaluation</span>
            </Link>
            <Link href="/performance" className="flex items-center space-x-2 text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
              </svg>
              <span>Performance</span>
            </Link>
            <Link href="/mock-test" className="flex items-center space-x-2 text-[#2DD4BF] text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
              </svg>
              <span>Mock Test</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8 bg-[#FF9F43] text-white">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}

