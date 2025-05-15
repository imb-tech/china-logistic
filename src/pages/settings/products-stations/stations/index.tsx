import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useStationsColumns } from "./columns"
import { useModal } from "@/hooks/useModal"
import DeleteModal from "@/components/custom/delete-modal"
import { useSearch } from "@tanstack/react-router"
import { STATION } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"

export const StationsPages = () => {
    const { openModal: openModalAdd } = useModal("stations-modal")
    const { openModal: openModalDelete } = useModal("stations-delete")
    const search = useSearch({ from: "/_main/settings" })
    const { data, isLoading } = useGet<StationsResults>(STATION, {
        params: search,
    })

    const columns = useStationsColumns()
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <h1 className="text-xl">Stansiya</h1>
                        <div className="flex items-center gap-3">
                            <ParamInput
                                fullWidth
                                placeholder="Qidirish"
                                className=""
                            />
                            <Button onClick={openModalAdd}>
                                <Plus className="h-4 w-4" />
                                Qo'shish
                            </Button>
                        </div>
                    </div>
                    <DataTable
                        columns={columns}
                        data={data?.results}
                        onDelete={() => openModalDelete()}
                        onEdit={() => {}}
                        loading={isLoading}
                    />
                </CardContent>
            </Card>
            <DeleteModal modalKey="stations-delete" id={1} path={STATION} />
        </div>
    )
}
