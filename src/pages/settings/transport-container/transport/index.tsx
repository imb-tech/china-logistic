import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useTransportColumns } from "./columns"
import { useModal } from "@/hooks/useModal"

const data: TransportType[] = [
  { id: 1, name: "Transport Alpha", is_station_required: false },
  { id: 2, name: "Transport Beta", is_station_required: true },
  { id: 3, name: "Transport Gamma", is_station_required: false },
  { id: 4, name: "Transport Delta", is_station_required: true },
  { id: 5, name: "Transport Epsilon", is_station_required: false },
  { id: 6, name: "Transport Zeta", is_station_required: true },
  { id: 7, name: "Transport Eta", is_station_required: false },
  { id: 8, name: "Transport Theta", is_station_required: true },
  { id: 9, name: "Transport Iota", is_station_required: false },
  { id: 10, name: "Transport Kappa", is_station_required: true },
  { id: 11, name: "Transport Lambda", is_station_required: false },
  { id: 12, name: "Transport Mu", is_station_required: true }
]

export const TransportPages = () => {
    const { openModal } = useModal("transport-modal")
    const columns = useTransportColumns()
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <h1 className="text-xl">Transport</h1>
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
                        // loading={isLoading}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
