import { Card, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/datatable"
import { useDocumentColumns } from "./columns"
import { useParams, useSearch } from "@tanstack/react-router"
import { ORDER_FILES } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"
import { Button } from "@/components/ui/button"
import Modal from "@/components/custom/modal"
import { useState } from "react"
import { useModal } from "@/hooks/useModal"
import ToatalCostCreate from "./create-price"
import DeleteModal from "@/components/custom/delete-modal"

export const DocumentPages = () => {
    const id = useParams({ from: "/_main/_orders/order/$id" })
    const [current, setCurrent] = useState<OrderDocument | undefined>()
    const { openModal: openModalCreate } = useModal("order-file-modal")
    const { openModal: openModalDelete } = useModal("order-file-delete-modal")
    const search: SearchParams = useSearch({ from: "/_main/_orders/order/$id" })
    const { status, type, ...pages } = search
    const { data, isLoading } = useGet<{
        results: OrderDocument[]
        pages: number
    }>(`${ORDER_FILES}`, {
        params: { ...pages, order: id?.id },
        options: { enabled: !!id.id },
    })

    const handleEditItem = (item: OrderDocument) => {
        openModalCreate()
        setCurrent(item)
    }
    const handleAdd = () => {
        openModalCreate()
        setCurrent(undefined)
    }

    const handleDeleteItem = (item: OrderDocument) => {
        openModalDelete()
        setCurrent(item)
    }

    const columns = useDocumentColumns()

    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="w-full flex justify-between gap-3 items-center mb-3">
                        <h1 className="text-xl mb-4">Hujjatlar</h1>
                        <Button onClick={handleAdd}>
                            Hujjat qo'shish
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
                    />
                </CardContent>
            </Card>
            <Modal
                size="max-w-lg"
                title={`Narx qo'shish`}
                modalKey="order-file-modal"
            >
                <ToatalCostCreate current={current} />
            </Modal>
            <DeleteModal
                modalKey="order-file-delete-modal"
                id={current?.id}
                path={ORDER_FILES}
            />
        </div>
    )
}
