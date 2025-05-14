import { ColumnDef } from "@tanstack/react-table"

export const useLogisticsColumns = (): ColumnDef<LogisticsType>[] => {
    return [
        {
            header: "№",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "Ismi",
            accessorKey: "full_name",
        },
        {
            header: "Login",
            accessorKey: "username",
        },
        {
            header: "Telefon raqami",
            accessorKey: "phone_number",
            cell: ({ row }) => {
                return (
                    <span>
                        {row.original.phone_code} {row.original.phone_number}
                    </span>
                )
            },
        },
        {
            header: "Tugatgan yuklari",
            accessorKey: "completed_orders",
            cell: ({ row }) => {
                return (
                    <span
                        className={
                            row.original.completed_orders === 0
                                ? "text-destructive"
                                : ""
                        }
                    >
                        {row.original.completed_orders}
                    </span>
                )
            },
        },
        {
            header: "Tugatmagan yuklari",
            accessorKey: "in_completed_orders",
            cell: ({ row }) => {
                return (
                    <span
                        className={
                            row.original.in_completed_orders === 0
                                ? "text-destructive"
                                : ""
                        }
                    >
                        {row.original.in_completed_orders}
                    </span>
                )
            },
        },
    ]
}
