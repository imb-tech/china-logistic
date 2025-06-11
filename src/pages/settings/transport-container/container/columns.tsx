import { ColumnDef } from "@tanstack/react-table"

export const useContainerColumns = (): ColumnDef<ContainerType>[] => {
    return [
        {
            header: "Nomi",
            accessorKey: "name",
            enableSorting: true,
        },
    ]
}
