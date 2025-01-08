import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResponseTime() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
          Response Time
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <div className="text-4xl font-bold text-[#2DD4BF]">60<span className="text-lg">%</span></div>
          <div className="flex items-center text-[#FF5630]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14l5-5 5 5H7z"/>
            </svg>
            <span>2min</span>
          </div>
        </div>
        <div className="text-sm">
          You are <span className="text-[#FF5630]">slow</span>!
        </div>
      </CardContent>
    </Card>
  )
}

