import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import OrderStatus from "./order-status"
 
export const useOrderColumns = (): ColumnDef<OrderType>[] => {
    return [
        {
            header: "Mijoz",
            accessorKey: "customers",
            enableSorting: true,
            cell: ({ row }) => row.original.customers[0] || "-",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: ({ row }) => <OrderStatus row={row.original} />,
        },
        {
            header: "Logist",
            accessorKey: "agent",
            enableSorting: true,
             cell: ({ row }) => row.original.agent || "-",
        },
        {
            header: "Yaratilgan sana",
            accessorKey: "created_at",
            cell: ({ row }) =>
                format(row.original.created_at, "yyyy-MM-dd"),
        },
        {
            header: "Yetkazish sanasi",
            accessorKey: "load_date",
            cell: ({ row }) => format(row.original.load_date, "yyyy-MM-dd"),
        },
    ]
}
