import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Flag, Info, Package, Trash, Truck, User } from "lucide-react"
import OrderStatus from "./order-status"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

type Props = {
    item: OrderType
    onDelete: (item: OrderType) => void
    onView: (item: OrderType) => void
}

function OrderCard({ item, onDelete, onView }: Props) {
    return (
        <Card
            onClick={() => onView(item)}
            className="px-4 pb-6 pt-2 space-y-4 cursor-pointer hover:shadow-md hover:scale-[102%] transition-all"
        >
            <CardHeader className="flex flex-row p-0 pb-2 border-b border-b-muted justify-between items-center gap-3 w-full">
                <span>#{item.id}</span>
                <div className="flex items-center gap-2">
                    <div className="min-w-[180px]">
                        <OrderStatus row={item} />
                    </div>
                    <Button
                        onClick={() => onDelete(item)}
                        variant={"secondary_danger"}
                        icon={<Trash size={16} />}
                    />
                </div>
            </CardHeader>
            <CardContent className="p-0 space-y-2">
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <User size={16} className="text-primary" />
                        <span>Mijoz:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.customers?.[0]}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Truck size={16} className="text-primary" />
                        <span>Logist:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.agent || "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Package size={16} className="text-primary" />
                        <span>Yaratilgan sana:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.created_at
                            ? format(item.created_at, "yyyy-MM-dd")
                            : "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Flag size={16} className="text-primary" />
                        <span>Yuklash sanasi:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.load_date
                            ? format(item.load_date, "yyyy-MM-dd ")
                            : "-"}
                    </span>
                </div>
                <div className="flex justify-between items-center gap-3 text-sm ">
                    <div className="flex items-center gap-2 whitespace-nowrap text-gray-600">
                        <Truck size={16} className="text-primary" />
                        <span>Yuklash manzili:</span>
                    </div>
                    <span className="line-clamp-1 break-all">
                        {item.address_text || "-"}
                    </span>
                </div>
                {item.is_late && (
                    <div className="text-sm ">
                        <div className="flex items-center gap-2 whitespace-nowrap text-destructive">
                            <Info size={16} />
                            <span>Kechikayotgan yuk</span>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export default OrderCard
