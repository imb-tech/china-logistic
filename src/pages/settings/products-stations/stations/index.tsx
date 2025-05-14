import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useStationsColumns } from "./columns"
import { useModal } from "@/hooks/useModal"
import DeleteModal from "@/components/custom/delete-modal"

const data: StationsType[] = [
    { id: 1, name: "Station Alpha" },
    { id: 2, name: "Station Beta" },
    { id: 3, name: "Station Gamma" },
    { id: 4, name: "Station Delta" },
    { id: 5, name: "Station Epsilon" },
    { id: 6, name: "Station Zeta" },
    { id: 7, name: "Station Eta" },
    { id: 8, name: "Station Theta" },
    { id: 9, name: "Station Iota" },
    { id: 10, name: "Station Kappa" },
    { id: 11, name: "Station Lambda" },
    { id: 12, name: "Station Mu" },
]

export const StationsPages = () => {
    const { openModal: openModalAdd } = useModal("stations-modal")
    const { openModal: openModalDelete } = useModal("stations-delete")
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
                        data={data}
                        paginationProps={{ totalPages: 1 }}
                        onDelete={() => openModalDelete()}
                        onEdit={() => {}}

                        // loading={isLoading}
                    />
                </CardContent>
            </Card>
            <DeleteModal modalKey="stations-delete" id={1} path="stations" />
        </div>
    )
}
