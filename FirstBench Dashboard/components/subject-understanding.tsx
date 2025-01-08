import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const subjects = [
  { name: "Geography", color: "bg-[#2DD4BF]" },
  { name: "Politics", color: "bg-[#FFB547]" },
  { name: "Current Affairs", color: "bg-[#4C9AFF]" },
  { name: "General Studies", color: "bg-[#9BA1B3]" },
  { name: "Mathematics", color: "bg-[#2DD4BF]" },
  { name: "Social Studies", color: "bg-[#6366F1]" },
  { name: "English Literature", color: "bg-[#FF5630]" },
  { name: "Indian History", color: "bg-[#FF8F00]" },
  { name: "Economics", color: "bg-[#2DD4BF]" },
]

export function SubjectUnderstanding() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7h3V5h2v5h3l-4 4-4-4z"/>
          </svg>
          Subject Understanding
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <span
              key={subject.name}
              className={`${subject.color} text-white px-3 py-1 rounded-full text-xs font-medium`}
            >
              {subject.name}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

