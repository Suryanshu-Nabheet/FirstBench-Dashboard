import { NavBar } from "@/components/nav-bar"
import { ResultsCard } from "@/components/results-card"
import { SubjectUnderstanding } from "@/components/subject-understanding"
import { ResponseTime } from "@/components/response-time"
import { ApproachData } from "@/components/approach-data"
import { Suggestions } from "@/components/suggestions"
import { CompareAccuracy } from "@/components/compare-accuracy"
import { TimeTaken } from "@/components/time-taken"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <div className="max-w-[1400px] mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <ResultsCard />
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Compare Accuracy</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Compare Accuracy</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">Compare Accuracy</CardTitle>
                </CardHeader>
              </Card>
              <SubjectUnderstanding />
              <ResponseTime />
              <ApproachData />
              <Suggestions />
              <CompareAccuracy />
              <TimeTaken />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

