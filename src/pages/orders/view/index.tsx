import ParamTabs from "@/components/as-params/tabs"
import BulkCargo from "../create/bulk-cargo"
import { OffersPages } from "./offers"
import { LogsPages } from "./logs"

export const statusOptions = [
    {
        value: "1",
        label: "Yuk ma'lumotlari",
        content: <BulkCargo />,
    },
    {
        value: "2",
        label: "Takliflar",
        content: <OffersPages />,
    },
    {
        value: "3",
        label: "O'zgarishlar tarixi",
        content: <LogsPages />,
    },
    {
        value: "4",
        label: "Chegaradagi mashinalar",
        content: <BulkCargo />,
    },
    {
        value: "5",
        label: "Hujjatlar",
        content: <BulkCargo />,
    },
]

export const OrdersDetailsPages = () => {
    return (
        <div className="w-full ">
            <div className="mb-5 flex justify-between items-center gap-4">
                <ParamTabs options={statusOptions} paramName="status" />
            </div>
        </div>
    )
}
