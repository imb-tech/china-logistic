import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

export const useDocumentColumns = (): ColumnDef<OrderDocument>[] => {
    return [
        {
            header: "Hujjat",
            accessorKey: "file",
        },
        {
            header: "O'zgartirilgan narx",
            accessorKey: "amount",
            enableSorting: true,
            cell: ({ row }) => (
                <span>{format(row.original.created_at, "yyyy-MM-dd")}</span>
            ),
        },
        {
            header: "O'zgarish sababi",
            accessorKey: "agent",
            cell: ({ row }) => row.original?.description || "--",
        },
    ]
}
