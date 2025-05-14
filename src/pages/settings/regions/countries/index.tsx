import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useRegionsColumns } from "./columns"
import { useModal } from "@/hooks/useModal"

const data: CountriesType[] = [
    { id: 1, name: "Country Alpha" },
    { id: 2, name: "Country Beta" },
    { id: 3, name: "Country Gamma" },
    { id: 4, name: "Country Delta" },
    { id: 5, name: "Country Epsilon" },
    { id: 6, name: "Country Zeta" },
    { id: 7, name: "Country Eta" },
    { id: 8, name: "Country Theta" },
    { id: 9, name: "Country Iota" },
    { id: 10, name: "Country Kappa" },
    { id: 11, name: "Country Lambda" },
    { id: 12, name: "Country Mu" },
]

export const CountriesPages = () => {
    const { openModal } = useModal("logis-modal")
    const columns = useRegionsColumns()
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
                            <Button onClick={openModal}>
                                <Plus className="h-4 w-4" />
                                Qo'shish
                            </Button>
                        </div>
                    </div>
                    <DataTable
                        columns={columns}
                        data={data}
                        paginationProps={{ totalPages: 1 }}
                        onDelete={() => {}}
                        onEdit={() => {}}
                        onView={() => {}}
                        // loading={isLoading}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
