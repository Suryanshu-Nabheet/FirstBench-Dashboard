import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CompareAccuracy() {
  return (
    <Card className="col-span-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
          </svg>
          Compare Accuracy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-4">
            <span className="px-4 py-1 bg-[#F3F4F9] rounded-full text-sm">10min</span>
            <span className="px-4 py-1 bg-[#2DD4BF] text-white rounded-full text-sm">15min</span>
            <span className="px-4 py-1 bg-[#F3F4F9] rounded-full text-sm">30min</span>
            <span className="px-4 py-1 bg-[#F3F4F9] rounded-full text-sm">45min</span>
          </div>
        </div>
        <div className="h-48 relative">
          <div className="absolute inset-0 flex items-end">
            <div className="w-1/7 h-[85%] bg-[#6366F1] mx-1 rounded-t-sm"></div>
            <div className="w-1/7 h-[45%] bg-[#6366F1] mx-1 rounded-t-sm"></div>
            <div className="w-1/7 h-[35%] bg-[#6366F1] mx-1 rounded-t-sm"></div>
            <div className="w-1/7 h-[65%] bg-[#6366F1] mx-1 rounded-t-sm"></div>
            <div className="w-1/7 h-[55%] bg-[#6366F1] mx-1 rounded-t-sm"></div>
            <div className="w-1/7 h-[45%] bg-[#6366F1] mx-1 rounded-t-sm"></div>
            <div className="w-1/7 h-[75%] bg-[#6366F1] mx-1 rounded-t-sm"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
          </div>
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
            <span>25%</span>
            <span>0%</span>
          </div>
        </div>
        <div className="text-xs text-gray-500 text-center mt-2">Slots</div>
      </CardContent>
    </Card>
  )
}

