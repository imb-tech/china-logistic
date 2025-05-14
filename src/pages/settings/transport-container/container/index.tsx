import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useContainerColumns } from "./columns"
import { useModal } from "@/hooks/useModal"

const data: ContainerType[] = [
  { id: 1, name: "Container Alpha" },
  { id: 2, name: "Container Beta" },
  { id: 3, name: "Container Gamma" },
  { id: 4, name: "Container Delta" },
  { id: 5, name: "Container Epsilon" },
  { id: 6, name: "Container Zeta" },
  { id: 7, name: "Container Eta" },
  { id: 8, name: "Container Theta" },
  { id: 9, name: "Container Iota" },
  { id: 10, name: "Container Kappa" },
  { id: 11, name: "Container Lambda" },
  { id: 12, name: "Container Mu" }
]


export const ContainerPages = () => {
    const { openModal } = useModal("logis-modal")
    const columns = useContainerColumns()
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <h1 className="text-xl">Konteyner turlari</h1>
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
