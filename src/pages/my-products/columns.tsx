import { formatMoney } from "@/lib/format-money"
import { ColumnDef } from "@tanstack/react-table"
import { fileColors } from "../products"

export const useSellerProductsColumns = (): ColumnDef<AdminType>[] => {
    return [
        {
            header: "№",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "Nomi",
            accessorKey: "name",
            cell: ({ row }) => (
                <span className="font-medium">{row.original.name}</span>
            ),
        },
        {
            header: "Kategoriya",
            accessorKey: "category_name",
        },
        {
            header: "Narxi",
            accessorKey: "price",
            cell: (info) => formatMoney(`${info.getValue()}`),
        },
        {
            header: "Ko'rishlar soni",
            accessorKey: "view_count",
            enableSorting:false
        },
        {
            header: "Sahifalar soni",
            accessorKey: "pages",
            cell:({row})=>(
                <span>{row.original.size} MB</span>
            ),

        },
        {
            header: "Turi",
            accessorKey: "ext",
            cell: ({ row }) => (
                <span
                    className={`font-normal ${
                        fileColors[row.original.ext]
                    } text-white px-4 py-1  rounded-2xl`}
                >
                    {row.original.ext}
                </span>
            ),
        },
    ]
}
