import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const subjects = [
  { name: "Geography", color: "bg-teal-400" },
  { name: "Politics", color: "bg-yellow-400" },
  { name: "Current Affairs", color: "bg-blue-400" },
  { name: "General Studies", color: "bg-gray-400" },
  { name: "Mathematics", color: "bg-green-400" },
  { name: "Social Studies", color: "bg-purple-400" },
  { name: "English Literature", color: "bg-red-400" },
  { name: "Indian History", color: "bg-orange-400" },
  { name: "Economics", color: "bg-pink-400" },
]

export function AnalyticsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Subject Understanding</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <Badge
                key={subject.name}
                variant="outline"
                className={`${subject.color} text-white`}
              >
                {subject.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Response Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-teal-400">60%</span>
              <span className="text-red-500 flex items-center">
                ↑ 2min
              </span>
            </div>
            <p className="text-sm text-gray-500">You are <span className="text-red-500">slow</span>!</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Approach Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Based on Facts</span>
              <Badge variant="secondary">25%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Based on Analysis</span>
              <Badge variant="secondary">32%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Based on Elimination</span>
              <Badge variant="secondary">19%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Based on Guess</span>
              <Badge variant="secondary">24%</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

