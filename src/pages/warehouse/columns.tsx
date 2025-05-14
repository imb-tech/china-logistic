import { Button } from "@/components/ui/button"
import { formatMoney } from "@/lib/format-money"
import { ColumnDef } from "@tanstack/react-table"
import { Edit, Trash } from "lucide-react"
import { fileColors } from "."

export const useAdminProductsColumns = ({
    onDelete,
    onEdit,
}: {
    onDelete: (val: string) => void
    onEdit: (val: AdminType) => void
}): ColumnDef<AdminType>[] => {
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
        },
        {
            header: "Sahifalar soni",
            accessorKey: "pages",
            cell: ({ row }) => <span>{row.original.size} MB</span>,
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
        {
            header: "Amallar",
            cell: ({ row }) => (
                <div className="flex gap-1">
                    <Button
                        icon={<Edit width={18} />}
                        size="sm"
                        variant="ghost"
                        className="!text-primary"
                        onClick={() => onEdit(row.original)}
                    />
                    <Button
                        icon={<Trash width={18} />}
                        size="sm"
                        variant="ghost"
                        className="!text-destructive"
                        onClick={() => onDelete(row.original.id)}
                    />
                </div>
            ),
        },
    ]
}
