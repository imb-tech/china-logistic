import { ColumnDef } from "@tanstack/react-table"

export const useCustomersColumns = (): ColumnDef<CustomersType>[] => {
    return [
        {
            header: "№",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "Ism",
            accessorKey: "full_name",
        },
        {
            header: "Email  yoki Telefon",
            accessorKey: "email_or_phone",
        },
        {
            header: "Sotib olgan mahsulotlar soni",
            accessorKey: "purchased_count",
        },
        {
            header: "Ro'yxatdan o'tgan sanasi",
            accessorKey: "full_name",
            cell: ({ row }) => <span>{row.original.created_at}</span>,
        },
        {
            header: "Holati",
            accessorKey: "auth_status",
        },
    ]
}
