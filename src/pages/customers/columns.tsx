import { ColumnDef } from "@tanstack/react-table"

export const useCustomersColumns = (): ColumnDef<CustomersType>[] => {
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
            cell: ({row}) => {
                return <span>{row.original.phone_code} {row.original.phone_number}</span>
            },
        },
        {
            header: "Manzili",
            accessorKey: "address",
        },
    ]
}
