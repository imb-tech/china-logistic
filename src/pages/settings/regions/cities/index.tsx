import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useCitiesColumns } from "./columns"
import { useModal } from "@/hooks/useModal"
import DeleteModal from "@/components/custom/delete-modal"
import { useSearch } from "@tanstack/react-router"
import { useGet } from "@/hooks/useGet"
import { REGION } from "@/constants/api-endpoints"
import { useStoreData } from "@/store/global-store"

export const CitiesPages = () => {
    const { openModal: openModalAdd } = useModal("cities-modal")
    const { openModal: openModalDelete } = useModal("cities-delete")
    const { storeData, setStoreData } = useStoreData()

    const search = useSearch({ from: "/_main/settings" })
    const { data, isLoading } = useGet<CitiesResults>(REGION, {
        params: search,
    })

    const handleDelete = (item: CitiesType) => {
        openModalDelete()
        setStoreData(item)
    }

    const handleUpdate = (item: CitiesType) => {
        setStoreData(item)
        openModalAdd()
    }

    const handleAdd = () => {
        openModalAdd()
    }

    const columns = useCitiesColumns()

    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <h1 className="text-xl">Shaharlar</h1>
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
                modalKey="cities-delete"
                id={storeData?.id}
                path={REGION}
            />
        </div>
    )
}
