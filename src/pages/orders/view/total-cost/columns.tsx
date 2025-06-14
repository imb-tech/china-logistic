import { formatMoney } from "@/lib/format-money"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { currencyName } from "../offers/create"

export const useTotalCostColumns = (): ColumnDef<Expanse>[] => {
    return [
        {
            header: "Logist",
            accessorKey: "agent_name",
            enableSorting: true,
        },
        {
            header: "O'zgartirilgan narx",
            accessorKey: "amount",
            enableSorting: true,
            cell: ({ row }) => (
                <span>
                    {formatMoney(row.original.amount)}{" "}
                    {currencyName[row.original.currency]}
                </span>
            ),
        },
        {
            header: "O'zgarish vaqti",
            accessorKey: "changed_at",
            cell: ({ row }) =>
                row.original.updated_at || row.original.created_at
                    ? format(
                          row.original.updated_at
                              ? row.original.updated_at
                              : row.original.created_at,
                          "yyyy-MM-dd HH:mm",
                      )
                    : "-",
        },
        {
            header: "O'zgarish sababi",
            accessorKey: "agent",
            enableSorting: true,
            cell: ({ row }) => row.original?.reason || "--",
        },
    ]
}
