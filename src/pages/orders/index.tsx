import { useOrderColumns } from "./columns"
import { DataTable } from "@/components/ui/datatable"
import ParamTabs from "@/components/as-params/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import DeleteModal from "@/components/custom/delete-modal"
import { useModal } from "@/hooks/useModal"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { useGet } from "@/hooks/useGet"
import { CONTAINERS } from "@/constants/api-endpoints"

export const statusColor:{[key:string]:string} ={
    "10":"text-primary",
    "20":"text-lime-500",
    "30":"text-amber-500",
    "35":"text-purple-500",
    "40":"text-red-500",
    "50":"text-green-500",
}

export const statusText:{[key:string]:string} ={
    "10":"Yaratildi",
    "20":"Logist topildi",
    "30":"Jarayonda",
    "35":"Yuk omborda",
    "40":"Favqulotda",
    "50":"Yakunlandi",
}

const tab = [
    {
        value: "",
        label: "Barchasi",
    },
    {
        value: "10",
        label: "Yaratildi",
    },
    {
        value: "20",
        label: "Logist topildi",
    },
    {
        value: "30",
        label: "Jarayonda",
    },
    {
        value: "35",
        label: "Yuk omborda",
    },
    {
        value: "40",
        label: "Favqulotda",
    },
    {
        value: "50",
        label: "Yakunlandi",
    },
]

export const OrdersPages = () => {
    const navigate = useNavigate()
    const { openModal } = useModal("delete-order")
    const search = useSearch({ from: "/_main/" })
    const { data, isLoading } = useGet<OrdersTypeResults>(CONTAINERS, {
        params: { ...search, role: 2 },
    })

    const columns = useOrderColumns()
    return (
        <div className="w-full ">
            <div className="mb-5 flex justify-between items-center gap-4">
                <ParamTabs options={tab} paramName="status" />
                <Button
                    onClick={() => navigate({ to: "/order-create" })}
                    icon={<Plus size={18} />}
                >
                    Buyurtma qo'shish
                </Button>
            </div>
            <DataTable
                columns={columns}
                data={data?.results}
                loading={isLoading}
                onDelete={() => openModal()}
            />
            <DeleteModal modalKey="delete-order" id={1} path="order" />
        </div>
    )
}
