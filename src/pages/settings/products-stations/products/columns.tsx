import { ColumnDef } from "@tanstack/react-table"

export const useProductsColumns = (): ColumnDef<ProductsType>[] => {
    return [
        {
            header: "Nomi",
            accessorKey: "name",
            enableSorting: true,
        },
        {
            header: "Kodi",
            accessorKey: "code",
            enableSorting: true,
        },
    ]
}
