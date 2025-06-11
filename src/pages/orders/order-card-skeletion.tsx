import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

function OrderCardSkeletion() {
    return (
        <Card className="px-4 pb-6 pt-2 space-y-4">
            <CardHeader className="flex flex-row p-0 pb-2 border-b border-b-muted justify-between items-center gap-3 w-full">
                <Skeleton className="w-10 h-10 mt-2" />
                <div className="flex items-center gap-2">
                    <Skeleton className="min-w-[180px] h-10" />
                    <Skeleton className="w-12 h-10" />
                </div>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Skeleton className="w-8 h-5" />
                        <Skeleton className="w-28 h-5" />
                    </div>
                    <Skeleton className="w-32 h-5" />
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Skeleton className="w-8 h-5" />
                        <Skeleton className="w-28 h-5" />
                    </div>
                    <Skeleton className="w-32 h-5" />
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Skeleton className="w-8 h-5" />
                        <Skeleton className="w-28 h-5" />
                    </div>
                    <Skeleton className="w-32 h-5" />
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Skeleton className="w-8 h-5" />
                        <Skeleton className="w-28 h-5" />
                    </div>
                    <Skeleton className="w-32 h-5" />
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Skeleton className="w-8 h-5" />
                        <Skeleton className="w-28 h-5" />
                    </div>
                    <Skeleton className="w-32 h-5" />
                </div>
            </CardContent>
        </Card>
    )
}

export default OrderCardSkeletion
