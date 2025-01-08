import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ResultsCard() {
  return (
    <Card className="w-full bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="flex justify-center mb-4">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Results illustration"
            width={200}
            height={200}
            className="w-48 h-48"
          />
        </div>
        <h2 className="text-[#6366F1] text-2xl font-semibold text-center mb-2">Your Result!</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          All your insights & details in one place
        </p>

        <div className="bg-[#F3F4F9] p-4 rounded-lg mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge className="bg-[#6366F1] text-white text-xs font-medium">
                YOU'VE PASSED!
              </Badge>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">136</span>
                <span className="text-gray-500 text-sm">/240</span>
              </div>
            </div>
            <Badge className="bg-[#2DD4BF] text-white">
              76% ACCURACY
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-4 pb-6 border-b">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Parth Akotkar" />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm text-gray-500">Top Score</p>
            <div className="flex items-baseline">
              <span className="text-xl font-bold">230</span>
              <span className="text-gray-500 text-sm">/240</span>
            </div>
            <p className="text-sm text-gray-500">By Parth Akotkar</p>
          </div>
          <Badge className="bg-[#2DD4BF] text-white">
            92% ACCURACY
          </Badge>
        </div>

        <div className="pt-6">
          <h3 className="font-semibold mb-1">Improve your Marks</h3>
          <p className="text-sm text-gray-500 mb-4">
            Improve your score by practicing more.
          </p>
          <Button className="w-full bg-[#6366F1] hover:bg-[#5558E3] text-white">
            Practice more
          </Button>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-4">Revisit Paper</h3>
          <p className="text-sm text-gray-500 mb-4">
            Challenge your friends by simply sharing a link to this test
          </p>
          <Button variant="outline" className="w-full flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
            Visit
          </Button>
          <p className="text-xs text-gray-400 mt-4">
            Instructions for how to upload your handwritten material is given
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

