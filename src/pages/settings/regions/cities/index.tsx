import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useCitiesColumns } from "./columns"
import { useModal } from "@/hooks/useModal"

const data: CitiesType[] =[
  { id: 1, name: "City Alpha" },
  { id: 2, name: "City Beta" },
  { id: 3, name: "City Gamma" },
  { id: 4, name: "City Delta" },
  { id: 5, name: "City Epsilon" },
  { id: 6, name: "City Zeta" },
  { id: 7, name: "City Eta" },
  { id: 8, name: "City Theta" },
  { id: 9, name: "City Iota" },
  { id: 10, name: "City Kappa" },
  { id: 11, name: "City Lambda" },
  { id: 12, name: "City Mu" }
]


export const CitiesPages = () => {
    const { openModal } = useModal("logis-modal")
    const columns= useCitiesColumns()
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
