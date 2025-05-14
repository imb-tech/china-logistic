import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Edit, Trash } from "lucide-react"

export const useCategoriesColumns = ({
    onDelete,
    onEdit,
}: {
    onDelete: (val: string | number) => void
    onEdit: (val: CategoriesType) => void
}): ColumnDef<CategoriesType>[] => {
    return [
        {
            header: "№",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "Icon",
            accessorKey: "icon",
            cell: ({ row }) => (
                <span className="text-2xl">{row.original.icon}</span>
            ),
        },
        {
            header: "Nomi",
            accessorKey: "title",
        },
        {
            header: "Top",
            accessorKey: "top",
            cell: ({ row }) =>
                row.original.top ? (
                    <span className="text-primary">Top</span>
                ) : (
                    <span className="text-destructive">Top Emas</span>
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
