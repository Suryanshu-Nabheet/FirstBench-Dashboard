import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const approaches = [
  { name: "Based on Facts", percentage: "25%" },
  { name: "Based on Analysis", percentage: "32%" },
  { name: "Based on Elimination", percentage: "19%" },
  { name: "Based on Guess", percentage: "24%" },
]

export function ApproachData() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L11 13.17l5.59-5.58L18 9l-6 8z"/>
          </svg>
          Approach Data
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {approaches.map((approach) => (
            <div key={approach.name} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{approach.name}</span>
              <Badge variant="secondary" className="bg-[#F3F4F9]">
                {approach.percentage}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

