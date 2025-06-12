import { formatMoney } from "@/lib/format-money"
import { ColumnDef } from "@tanstack/react-table"

export const useWarehouseCreateColumns = (): ColumnDef<WarehouseType>[] => {
    return [
        {
            header: "Mahsulot nomi",
            accessorKey: "id",
            cell: ({ row }) => row.original.product,
        },
        {
            header: "Umumiy miqdori",
            accessorKey: "id",
            cell: ({ row }) =>
                formatMoney(row.original.volume) || "--",
        },
        {
            header: "Umumiy og'irligi",
            accessorKey: "id",
            cell: ({ row }) =>
                formatMoney(row.original.weight) || "--",
        },
    ]
}
