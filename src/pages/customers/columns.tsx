import { ColumnDef } from "@tanstack/react-table"

export const useCustomersColumns = (): ColumnDef<CustomersType>[] => {
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
            cell: ({ row }) => {
                return <span>{row.original.phone_number}</span>
            },
            enableSorting: true,
        },
        {
            header: "Manzili",
            accessorKey: "address",
            enableSorting: true,
        },
    ]
}
