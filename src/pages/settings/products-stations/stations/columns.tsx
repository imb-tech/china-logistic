import { ColumnDef } from "@tanstack/react-table"

export const useStationsColumns = (): ColumnDef<StationsType>[] => {
    return [
        {
            header: "Nomi",
            accessorKey: "name",
            enableSorting: true,
        },
    ]
}
