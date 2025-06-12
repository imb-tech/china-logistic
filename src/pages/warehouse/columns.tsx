import { formatMoney } from "@/lib/format-money"
import { ColumnDef } from "@tanstack/react-table"
 
export const useWarehouseColumns = (): ColumnDef<WarehouseType>[] => {
    return [
        {
            header: "Mahsulot nomi",
            accessorKey: "id",
            enableSorting: true,
            cell: ({ row }) => row.original.product,
        },
        {
            header: "Umumiy miqdori",
            accessorKey: "id",
            enableSorting: true,
            cell: ({ row }) =>
                formatMoney(row.original.volume) || "--",
        },
        {
            header: "Umumiy og'irligi",
            accessorKey: "id",
            enableSorting: true,
            cell: ({ row }) =>
                formatMoney(row.original.weight) || "--",
        },
        {
            header: "Mijoz ismi",
            accessorKey: "id",
            enableSorting: true,
            cell: ({ row }) => row.original.customer || "--",
        },
    ]
}
