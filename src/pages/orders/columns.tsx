import { ColumnDef } from "@tanstack/react-table"

export const useOrderColumns = (): ColumnDef<OrderType>[] => {
    return [
        {
            header: "№",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "Mijoz",
            accessorKey: "name",
            enableSorting: true,
        },
        {
            header: "Status",
            accessorKey: "status",
            enableSorting: true,
        },
        {
            header: "Logist",
            accessorKey: "logist",
            enableSorting: true,
        },
        {
            header: "Yaratilgan sana",
            accessorKey: "created_at",
            cell: ({ row }) =>
                new Date(row.original.created_at).toLocaleString("uz-UZ", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                }),
        },
        {
            header: "Yetkazish sanasi",
            accessorKey: "deliver_at",
            cell: ({ row }) =>
                new Date(row.original.created_at).toLocaleString("uz-UZ", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                }),
        },
    ]
}
