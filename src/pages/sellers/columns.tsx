import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Edit, Trash } from "lucide-react"

export const useSellerColumns = ({
    onDelete,
    onEdit,
}: {
    onDelete: (val: string | number) => void
    onEdit: (val: SellerType) => void
}): ColumnDef<SellerType>[] => {
    return [
        {
            header: "№",
            cell: ({ row }) => row.index + 1,
        },
        {
            header: "Rasm",
            accessorKey: "icon",
            cell: ({ row }) => (
                <img
                    src={row.original.photo}
                    alt={row.original.full_name}
                    className="w-12 h-12 rounded-md"
                />
            ),
        },
        {
            header: "Nomi",
            accessorKey: "full_name",
        },
        {
            header: "Email  yoki Telefon",
            accessorKey: "email_or_phone",
        },
        {
            header: "Hamyon",
            accessorKey: "wallet",
        },
        {
            header: "Mahsulotlari soni",
            accessorKey: "total_product",
        },
        {
            header: "Taklif qilgan",
            accessorKey: "referral_count",
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
