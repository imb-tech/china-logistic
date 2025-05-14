import { useOrderColumns } from "./columns"
import { DataTable } from "@/components/ui/datatable"
import ParamTabs from "@/components/as-params/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import DeleteModal from "@/components/custom/delete-modal"
import { useModal } from "@/hooks/useModal"

export const orderData: OrderType[] = [
    {
        id: "1",
        name: "Ozodbek Abdisamatov",
        deliver_at: "2024-09-25T14:30:00Z",
        logist: "Ahmadboy Abdurahimov",
        created_at: "2024-09-25T14:30:00Z",
        status: "Yaratildi",
    },
    {
        id: "2",
        name: "Ozodbek Abdisamatov",
        deliver_at: "2024-09-25T14:30:00Z",
        logist: "Ahmadboy Abdurahimov",
        created_at: "2024-09-25T14:30:00Z",
        status: "Yaratildi",
    },
    {
        id: "3",
        name: "Ozodbek Abdisamatov",
        deliver_at: "2024-09-25T14:30:00Z",
        logist: "Ahmadboy Abdurahimov",
        created_at: "2024-09-25T14:30:00Z",
        status: "Yaratildi",
    },
    {
        id: "4",
        name: "Ozodbek Abdisamatov",
        deliver_at: "2024-09-25T14:30:00Z",
        logist: "Ahmadboy Abdurahimov",
        created_at: "2024-09-25T14:30:00Z",
        status: "Yaratildi",
    },
    {
        id: "5",
        name: "Ozodbek Abdisamatov",
        deliver_at: "2024-09-25T14:30:00Z",
        logist: "Ahmadboy Abdurahimov",
        created_at: "2024-09-25T14:30:00Z",
        status: "Yaratildi",
    },
    {
        id: "6",
        name: "Ozodbek Abdisamatov",
        deliver_at: "2024-09-25T14:30:00Z",
        logist: "Ahmadboy Abdurahimov",
        created_at: "2024-09-25T14:30:00Z",
        status: "Yaratildi",
    },
    {
        id: "7",
        name: "Ozodbek Abdisamatov",
        deliver_at: "2024-09-25T14:30:00Z",
        logist: "Ahmadboy Abdurahimov",
        created_at: "2024-09-25T14:30:00Z",
        status: "Yaratildi",
    },
    {
        id: "8",
        name: "Ozodbek Abdisamatov",
        deliver_at: "2024-09-25T14:30:00Z",
        logist: "Ahmadboy Abdurahimov",
        created_at: "2024-09-25T14:30:00Z",
        status: "Yaratildi",
    },
]

const tab = [
    {
        value: "1",
        label: "Barchasi",
    },
    {
        value: "2",
        label: "Yaratildi",
    },
    {
        value: "3",
        label: "Logist topildi",
    },
    {
        value: "4",
        label: "Jarayonda",
    },
    {
        value: "5",
        label: "Yuk omborda",
    },
    {
        value: "6",
        label: "Favqulotda",
    },
    {
        value: "7",
        label: "Yakunlandi",
    },
]

export const OrdersPages = () => {
    const { openModal } = useModal("delete-order")
    return (
        <div className="w-full">
            <div className="mb-5 flex justify-between items-center gap-4">
                <ParamTabs options={tab} />
                <Button icon={<Plus size={18} />}>Buyurtma qo'shish</Button>
            </div>
            <DataTable
                columns={useOrderColumns()}
                data={orderData}
                paginationProps={{ totalPages: 1 }}
                // loading={isLoading}
                onDelete={() => openModal()}
                onEdit={() => {}}
                onView={() => {}}
            />
            <DeleteModal modalKey="delete-order" id={1} path="order" />
        </div>
    )
}
