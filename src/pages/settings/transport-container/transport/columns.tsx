import { ColumnDef } from "@tanstack/react-table"

export const useTransportColumns = (): ColumnDef<TransportType>[] => {
    return [
        {
            header: "Nomi",
            accessorKey: "name",
            enableSorting: true,
        },
    ]
}
