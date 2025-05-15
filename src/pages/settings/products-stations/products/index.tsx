import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useProductsColumns } from "./columns"
import { useModal } from "@/hooks/useModal"
import DeleteModal from "@/components/custom/delete-modal"
import { useGet } from "@/hooks/useGet"
import { PRODUCT } from "@/constants/api-endpoints"
import { useSearch } from "@tanstack/react-router"
import { useStoreData } from "@/store/global-store"

export const ProductsPages = () => {
    const { openModal: openModalAdd } = useModal("product-modal")
    const { openModal: openModalDelete } = useModal("product-delete")
   const { storeData, setStoreData } = useStoreData()
    const search = useSearch({ from: "/_main/settings" })
    const { data, isLoading } = useGet<ProductResults>(PRODUCT, {
        params: search,
    })

    const handleDelete = (item: ProductsType) => {
        openModalDelete()
        setStoreData(item)
    }

    const handleUpdate = (item: ProductsType) => {
        setStoreData(item)
        openModalAdd()
    }

       const handleAdd = () => {
        openModalAdd()
    }


    const columns = useProductsColumns()
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <h1 className="text-xl">Mahsulotlar</h1>
                        <div className="flex items-center gap-3">
                            <ParamInput
                                fullWidth
                                placeholder="Qidirish"
                                className=""
                            />
                            <Button onClick={handleAdd}>
                                <Plus className="h-4 w-4" />
                                Qo'shish
                            </Button>
                        </div>
                    </div>
                    <DataTable
                        columns={columns}
                        data={data?.results}
                         onDelete={(item) => handleDelete(item.original)}
                        onEdit={(item) => handleUpdate(item.original)}
                        loading={isLoading}
                    />
                </CardContent>
            </Card>
            <DeleteModal
                modalKey="product-delete"
                id={storeData?.id}
                path={PRODUCT}
            />
        </div>
    )
}
