import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const difficulties = [
  { range: "0-1:12", level: "Easy", color: "text-[#2DD4BF]" },
  { range: "0:12-3:32", level: "Medium", color: "text-[#FFB547]" },
  { range: "0:32-40", level: "Hard", color: "text-[#FF5630]" },
]

export function Suggestions() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
          </svg>
          Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          {difficulties.map((diff) => (
            <div key={diff.range} className="text-center flex-1">
              <div className="text-xs mb-1">{diff.range}</div>
              <div className={`text-sm font-medium ${diff.color}`}>
                {diff.level}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

