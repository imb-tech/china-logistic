import { ColumnDef } from "@tanstack/react-table"

export const useCitiesColumns = (): ColumnDef<CitiesType>[] => {
       return [
        {
            header: "Nomi",
            accessorKey: "name",
            enableSorting: true,
        },
    ]
}
