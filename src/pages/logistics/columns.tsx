import { ColumnDef } from "@tanstack/react-table"

export const useLogisticsColumns = (): ColumnDef<LogisticsType>[] => {
    return [
        {
            header: "Ismi",
            accessorKey: "full_name",
            enableSorting: true,
        },
        {
            header: "Login",
            accessorKey: "username",
            enableSorting: true,
        },
        {
            header: "Telefon raqami",
            accessorKey: "phone_number",
            enableSorting: true,
            cell: ({ row }) => {
                return <span>{row.original.phone_number}</span>
            },
        },
        {
            header: "Tugatgan yuklari",
            accessorKey: "completed_orders",
            cell: ({ row }) => {
                return (
                    <span
                        className={
                            row.original.completed_orders == 0
                                ? "text-destructive"
                                : ""
                        }
                    >
                        {row.original.completed_orders}
                    </span>
                )
            },
            enableSorting: true,
        },
        {
            header: "Tugatmagan yuklari",
            accessorKey: "not_completed_orders",
            cell: ({ row }) => {
                return (
                    <span
                        className={
                            row.original.not_completed_orders == 0
                                ? "text-destructive"
                                : ""
                        }
                    >
                        {row.original.not_completed_orders}
                    </span>
                )
            },
            enableSorting: true,
        },
    ]
}
