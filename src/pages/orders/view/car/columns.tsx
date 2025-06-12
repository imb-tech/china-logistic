import { ColumnDef } from "@tanstack/react-table"
import { formatMoney } from "@/lib/format-money"

export const useCarColumns = (): ColumnDef<CarType>[] => {
    return [
        {
            header: "Mashina raqami ",
            accessorKey: "transit_number",
            enableSorting: true,
        },
        {
            header: "Mashinadagi yuk soni",
            accessorKey: "product_count",
            enableSorting: true,
            cell: ({ row }) => formatMoney(row.original.product_count),
        },
        {
            header: "Mashinadagi yuk og'irligi",
            accessorKey: "total_weight",
            enableSorting: true,
            cell: ({ row }) => formatMoney(row.original.total_weight),
        },
    ]
}
