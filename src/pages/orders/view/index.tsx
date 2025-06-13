import ParamTabs from "@/components/as-params/tabs"
import BulkCargo from "../create/bulk-cargo"
import { OffersPages } from "./offers"
import { LogsPages } from "./logs"
import WholeLoad from "../create/whole-load"
import { useSearch } from "@tanstack/react-router"
import { CarsPages } from "./car"
import { ToatalCostPages } from "./total-cost"
import { DocumentPages } from "./document"

export const OrdersDetailsPages = () => {
    const serach: { type: number; status: string } = useSearch({
        from: "/_main/_orders/order/$id",
    })

    const statusOptions = [
        {
            value: "1",
            label: "Yuk ma'lumotlari",
            content: serach?.type === 1 ? <BulkCargo /> : <WholeLoad />,
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
            content: <CarsPages />,
        },
        {
            value: "5",
            label: "Hujjatlar",
            content: <DocumentPages />,
        },
    ]

    return (
        <div className="w-full ">
            <div className="mb-5 flex justify-between items-center gap-4">
                <ParamTabs options={statusOptions} paramName="status" />
            </div>
            {serach?.status === "1" && <ToatalCostPages />}
        </div>
    )
}
