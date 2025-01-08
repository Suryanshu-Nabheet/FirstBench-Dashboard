import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TimeTaken() {
  return (
    <Card className="col-span-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
          </svg>
          Time Taken
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="relative pt-4">
            <div className="absolute top-0 left-0 right-0 flex justify-between text-xs text-gray-500">
              <span>10sec</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
              <span>50</span>
              <span>60</span>
              <span>70</span>
              <span>80</span>
              <span>90</span>
            </div>
            <div className="h-2 bg-[#F3F4F9] rounded-full mt-6">
              <div className="h-full w-[60%] bg-[#FF5630] rounded-full"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </p>
          <div className="relative pt-4">
            <div className="absolute top-0 left-0 right-0 flex justify-between text-xs text-gray-500">
              <span>4sec</span>
              <span>3</span>
              <span>2</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
            <div className="h-2 bg-[#F3F4F9] rounded-full mt-6">
              <div className="h-full w-[40%] bg-[#2DD4BF] rounded-full"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

