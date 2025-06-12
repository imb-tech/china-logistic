import { useOrderColumns } from "./columns"
import { DataTable } from "@/components/ui/datatable"
import ParamTabs from "@/components/as-params/tabs"
import { Button } from "@/components/ui/button"
import { LayoutList, Plus, Table } from "lucide-react"
import DeleteModal from "@/components/custom/delete-modal"
import { useModal } from "@/hooks/useModal"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { useGet } from "@/hooks/useGet"
import { CARGO_DELETE, CARGO_LIST } from "@/constants/api-endpoints"
import Modal from "@/components/custom/modal"
import OrderStatusChange from "./order-change-status"
import { useTypedStoreData } from "@/hooks/useStoreData"
import OrderCard from "./order-card"
import EmptyBox from "@/components/custom/empty-box"
import OrderCardSkeletion from "./order-card-skeletion"
import ParamPagination from "@/components/as-params/pagination"

export const statusColor: { [key: string]: string } = {
    "10": "text-primary",
    "20": "text-lime-500",
    "30": "text-amber-500",
    "35": "text-purple-500",
    "40": "text-red-500",
    "50": "text-green-500",
}

export const statusText: { [key: string]: string } = {
    "10": "Yaratildi",
    "20": "Logist topildi",
    "30": "Jarayonda",
    "35": "Yuk omborda",
    "40": "Favqulotda",
    "50": "Yakunlandi",
}

export const statusOptions = [
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

const tabs = [
    {
        label: <Table size={20} />,
        value: "table",
    },
    {
        label: <LayoutList size={20} />,
        value: "card",
    },
]

export const OrdersPages = () => {
    const navigate = useNavigate()
    const { openModal: openModalDelete } = useModal("delete-order")
    const { storeData, setStoreData, clearUserData } =
        useTypedStoreData<OrderType>()
    const search: SearchParams = useSearch({ from: "/_main/" })
    const { page_tabs, ...params } = search
    const { data, isLoading } = useGet<OrdersTypeResults>(CARGO_LIST, {
        params,
    })

    const handleDelete = (item: OrderType) => {
        clearUserData()
        openModalDelete()
        setStoreData(item)
    }
    const handleNavigate = (item: OrderType) => {
        navigate({
            to: "/order/$id",
            params: { id: item.id.toString() },
            search: { type: item.type },
        })
    }

    const columns = useOrderColumns()
    return (
        <div className="w-full ">
            <div className="mb-5 flex justify-between items-center gap-4">
                <ParamTabs options={statusOptions} paramName="status" />
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => navigate({ to: "/order-create" })}
                        icon={<Plus size={18} />}
                    >
                        Buyurtma qo'shish
                    </Button>
                    <ParamTabs options={tabs} />
                </div>
            </div>

            {search.page_tabs === "card" ? (
                <div>
                    <div className="grid grid-cols-4 gap-4">
                        {isLoading
                            ? Array.from({ length: 20 }).map((_, index) => (
                                  <OrderCardSkeletion key={index} />
                              ))
                            : !!data?.results?.length &&
                              data?.results?.map((item) => (
                                  <OrderCard
                                      key={item.id}
                                      item={item}
                                      onDelete={(item) => handleDelete(item)}
                                      onView={(item) => handleNavigate(item)}
                                  />
                              ))}
                    </div>
                    {!!data?.results?.length && (
                        <div className="my-4 flex justify-center">
                            <ParamPagination
                                disabled={isLoading}
                                totalPages={data.pages}
                            />
                        </div>
                    )}
                    {!data?.results?.length && <EmptyBox />}
                </div>
            ) : (
                <DataTable
                    columns={columns}
                    data={data?.results}
                    loading={isLoading}
                    onDelete={(row) => handleDelete(row.original)}
                    onRowClick={(item) => handleNavigate(item)}
                    paginationProps={{ totalPages: data?.pages }}
                    numeration
                />
            )}
            <DeleteModal
                modalKey="delete-order"
                id={storeData?.id}
                path={CARGO_DELETE}
                refetchKeys={[CARGO_LIST]}
            />
            <Modal
                size="max-w-xl"
                title={`Buyurtmani ${
                    statusText[String(storeData?.status)]
                } qilishni xohlaysizmi?`}
                modalKey="order-status-modal"
            >
                <OrderStatusChange />
            </Modal>
        </div>
    )
}
