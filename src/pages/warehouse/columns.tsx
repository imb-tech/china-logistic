import { formatMoney } from "@/lib/format-money"
import { ColumnDef } from "@tanstack/react-table"
 
export const useWarehouseColumns = (): ColumnDef<WarehouseType>[] => {
    return [
        {
            header: "Mahsulot nomi",
            accessorKey: "product",
            enableSorting: true,
            cell: ({ row }) => row.original.product,
        },
        {
            header: "Umumiy miqdori",
            accessorKey: "volume",
            enableSorting: true,
            cell: ({ row }) =>
                formatMoney(row.original.volume) || "--",
        },
        {
            header: "Umumiy og'irligi",
            accessorKey: "weight",
            enableSorting: true,
            cell: ({ row }) =>
                formatMoney(row.original.weight) || "--",
        },
        {
            header: "Mijoz ismi",
            accessorKey: "customer",
            enableSorting: true,
            cell: ({ row }) => row.original.customer || "--",
        },
    ]
}
