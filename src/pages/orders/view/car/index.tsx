import { Card, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/datatable"
import { useCarColumns } from "./columns"
import { useParams } from "@tanstack/react-router"
import { INVENTORY_CAR } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"

export const CarsPages = () => {
    const id = useParams({ from: "/_main/_orders/order/$id" })
    const { data, isLoading } = useGet<CarType[]>(
        `${INVENTORY_CAR}/${id?.id}`,
        {
            options: { enabled: !!id.id },
        },
    )

    const columns = useCarColumns()
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <h1 className="text-xl mb-4">O'zgarishlar tarixi</h1>
                    <DataTable
                        columns={columns}
                        data={data}
                        loading={isLoading}
                        numeration
                    />
                </CardContent>
            </Card>
        </div>
    )
}
