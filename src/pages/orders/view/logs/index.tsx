import { Card, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/datatable"
import { useLogsColumns } from "./columns"
import { useParams, useSearch } from "@tanstack/react-router"
import { ORDERS_LOGS } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"

export const LogsPages = () => {
    const id = useParams({ from: "/_main/_orders/order/$id" })
    const search: SearchParams = useSearch({ from: "/_main/_orders/order/$id" })
    const { status, type, ...pages } = search
    const { data, isLoading } = useGet<{ results: Logs[]; pages: number }>(
        `${ORDERS_LOGS}`,
        {
            params: { ...pages, id: id?.id },
            options: { enabled: !!id.id },
        },
    )

    const columns = useLogsColumns()
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <h1 className="text-xl mb-4">O'zgarishlar tarixi</h1>
                    <DataTable
                        columns={columns}
                        data={data?.results}
                        loading={isLoading}
                        paginationProps={{ totalPages: data?.pages }}
                        numeration
                    />
                </CardContent>
            </Card>
        </div>
    )
}
