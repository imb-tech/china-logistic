import { ColumnDef } from "@tanstack/react-table"

export const useRegionsColumns = (): ColumnDef<CountriesType>[] => {
     return [
        {
            header: "Nomi",
            accessorKey: "name",
            enableSorting: true,
        },
    ]
}
