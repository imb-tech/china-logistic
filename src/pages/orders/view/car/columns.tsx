import { ColumnDef } from "@tanstack/react-table"
import { formatMoney } from "@/lib/format-money"

export const useCarColumns = (): ColumnDef<CarType>[] => {
    return [
        {
            header: "Mashina raqami ",
            accessorKey: "car_number",
            enableSorting: true,
        },
        {
            header: "Mashinadagi yuk soni",
            accessorKey: "total_quantity",
            enableSorting: true,
            cell: ({ row }) => formatMoney(row.original.total_quantity),
        },
        {
            header: "Mashinadagi yuk og'irligi",
            accessorKey: "total_weight",
            enableSorting: true,
            cell: ({ row }) => formatMoney(row.original.total_weight),
        },
    ]
}
