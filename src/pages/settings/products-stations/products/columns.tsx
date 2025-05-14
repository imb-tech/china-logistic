import { ColumnDef } from "@tanstack/react-table"

export const useProductsColumns = (): ColumnDef<ProductsType>[] => {
    return [
        {
            header: "№",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "Nomi",
            accessorKey: "name",
        },
        {
            header: "kodi",
            accessorKey: "code",
        },
    ]
}
