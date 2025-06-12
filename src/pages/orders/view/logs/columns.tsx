import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { statusColor, statusText } from "../.."
import { cn } from "@/lib/utils"

export const useLogsColumns = (): ColumnDef<Logs>[] => {
    return [
        {
            header: "Yuklash statusi",
            accessorKey: "status",
            cell: ({ row }) => (
                <span
                    className={cn(
                        "whitespace-nowrap",
                        statusColor[row.original.status],
                    )}
                >
                    {statusText[row.original.status] || "Agent o'zgartirildi"}
                </span>
            ),
        },
        {
            header: "Sababi",
            accessorKey: "reason",
            enableSorting: true,
            cell: ({ row }) => row.original.reason || "--",
        },
        {
            header: "O'zgarish vaqti",
            accessorKey: "changed_at",
            cell: ({ row }) =>
                format(
                    row.original.changed_at
                        ? row.original.changed_at
                        : new Date(),
                    "yyyy-MM-dd HH:mm",
                ),
        },
        {
            header: "O'zgartirilgan logist",
            accessorKey: "agent",
            cell: ({ row }) => row.original?.agent || "--",
        },
    ]
}
