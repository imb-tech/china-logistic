import { Card, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/datatable"
import { useTotalCostColumns } from "./columns"
import { useParams, useSearch } from "@tanstack/react-router"
import { ORDER_EXPENSE } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"
import { Button } from "@/components/ui/button"
import Modal from "@/components/custom/modal"
import { useState } from "react"
import { useModal } from "@/hooks/useModal"
import ToatalCostCreate from "./create-price"
import DeleteModal from "@/components/custom/delete-modal"

export const ToatalCostPages = () => {
    const id = useParams({ from: "/_main/_orders/order/$id" })
    const [current, setCurrent] = useState<Expanse | undefined>()
    const { openModal: openModalCreate } = useModal("total-cost-modal")
    const { openModal: openModalDelete } = useModal("total-cost-delete-modal")
    const search: SearchParams = useSearch({ from: "/_main/_orders/order/$id" })
    const { status, type, ...pages } = search
    const { data, isLoading } = useGet<{ results: Expanse[]; pages: number }>(
        `${ORDER_EXPENSE}`,
        {
            params: { ...pages, order: id?.id },
            options: { enabled: !!id.id },
        },
    )

    const handleEditItem = (item: Expanse) => {
        openModalCreate()
        setCurrent(item)
    }

    const handleAddItem = () => {
        openModalCreate()
        setCurrent(undefined)
    }
    const handleDeleteItem = (item: Expanse) => {
        openModalDelete()
        setCurrent(item)
    }

    const columns = useTotalCostColumns()

    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="w-full flex justify-between gap-3 items-center mb-3">
                        <h1 className="text-xl mb-4">Umumiy xarajatlar</h1>
                        <Button onClick={handleAddItem} variant={"secondary"}>
                            Xarajat qo'shish
                        </Button>
                    </div>
                    <DataTable
                        columns={columns}
                        data={data?.results}
                        loading={isLoading}
                        onDelete={(row) => handleDeleteItem(row.original)}
                        onEdit={(row) => handleEditItem(row.original)}
                        paginationProps={{ totalPages: data?.pages }}
                        numeration
                        skeletonRowCount={5}
                        height="h-[30vh]"
                    />
                </CardContent>
            </Card>
            <Modal
                size="max-w-2xl"
                title={`Narx qo'shish`}
                modalKey="total-cost-modal"
            >
                <ToatalCostCreate current={current} />
            </Modal>
            <DeleteModal
                modalKey="total-cost-delete-modal"
                id={current?.id}
                path={ORDER_EXPENSE}
            />
        </div>
    )
}
