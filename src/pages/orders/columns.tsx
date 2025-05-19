import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { statusColor, statusText } from "."

export const useOrderColumns = (): ColumnDef<OrderType>[] => {
    return [
        {
            header: "№",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "Mijoz",
            accessorKey: "customers",
            enableSorting: true,
            cell: ({ row }) => row.original.customers.map((item) => item),
        },
        {
            header: "Status",
            accessorKey: "status",
            enableSorting: true,
        },
        {
            header: "Logist",
            accessorKey: "agent_full_name",
            enableSorting: true,
            cell:({row})=>(
                <span className={statusColor[row.original.status]}>{statusText[row.original.status]}</span>
            )
        },
        {
            header: "Yaratilgan sana",
            accessorKey: "created_at",
            cell: ({ row }) =>
                format(row.original.created_at, "yyyy-MM-dd HH:mm"),
        },
        {
            header: "Yetkazish sanasi",
            accessorKey: "deliver_at",
            cell: ({ row }) => format(row.original.load_date, "yyyy-MM-dd"),
        },
    ]
}
