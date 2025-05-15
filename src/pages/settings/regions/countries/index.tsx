import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useRegionsColumns } from "./columns"
import { useModal } from "@/hooks/useModal"
import DeleteModal from "@/components/custom/delete-modal"
import { useGet } from "@/hooks/useGet"
import { useSearch } from "@tanstack/react-router"
import { COUNTRY } from "@/constants/api-endpoints"



export const CountriesPages = () => {
    const { openModal:openModalAdd } = useModal("countries-modal")
    const { openModal:openModalDelete } = useModal("countries-delete")
    const columns = useRegionsColumns()

     const search = useSearch({ from: "/_main/settings" })
        const { data, isLoading } = useGet<CountriesResults>(COUNTRY, {
            params: search,
        })

    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <h1 className="text-xl">Davlatlar</h1>
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
            <DeleteModal modalKey="countries-delete" id={1} path={COUNTRY} />
        </div>
    )
}
