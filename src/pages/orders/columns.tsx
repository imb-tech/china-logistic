import { formatMoney } from "@/lib/format-money"
import { ColumnDef } from "@tanstack/react-table"

export const useOrderColumns = (): ColumnDef<OrderType>[] => {
    return [
        {
            header: "№",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "Mijoz",
            accessorKey: "id",
            cell: ({ row }) => (
                <div className="flex flex-col gap-2">
                    <span>{row.original.customer_info.name}</span>
                    <span>{row.original.customer_info.email_or_phone}</span>
                </div>
            ),
        },
        {
            header: "Sotuvchi",
            accessorKey: "id",
            cell: ({ row }) => (
                <div className="flex flex-col gap-2">
                    <span>{row.original.seller_info?.name}</span>
                    <span>{row.original.seller_info?.email_or_phone}</span>
                </div>
            ),
        },
        {
            header: "Hujjat nomi",
            accessorKey: "id",
            cell: ({ row }) => (
                <span className="font-medium">
                    {row.original.document.title}
                </span>
            ),
        },
        {
            header: "To'lov turi",
            accessorKey: "provider",
            cell: ({ row }) => (
                <span className="capitalize">
                    {row.original.provider === "card_data"
                        ? "Karta"
                        : row.original.provider}
                </span>
            ),
        },
        {
            header: "Narxi",
            accessorKey: "price",
            cell: (info) => formatMoney(`${info.getValue()}`),
        },
        {
            header: "Sana",
            accessorKey: "created_at",
            cell: ({ row }) =>
                new Date(row.original.created_at).toLocaleString("uz-UZ", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                }),
        },
    ]
}
