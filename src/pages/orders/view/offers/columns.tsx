import { Button } from "@/components/ui/button"
import { formatMoney } from "@/lib/format-money"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { Check, Clock4, Plus, X } from "lucide-react"

type Props = {
    onOffer: (val: Offers) => void
}

export const useOffersColumns = ({ onOffer }: Props): ColumnDef<Offers>[] => {
    return [
        {
            header: "Logist",
            accessorKey: "agent",
            enableSorting: true,
            cell: ({ row }) => <span className="whitespace-nowrap">{row.original.agent?.full_name}</span>,
        },
        {
            header: "Narx",
            accessorKey: "price",
            enableSorting: true,
            cell: ({ row }) => formatMoney(Number(row.original.price)),
        },
        {
            header: "Yuklash sanasi",
            accessorKey: "load_date",
            cell: ({ row }) =>
                format(
                    row.original.load_date
                        ? row.original.load_date
                        : new Date(),
                    "yyyy-MM-dd",
                ),
        },
        {
            header: "Yurish sanasi",
            accessorKey: "start_date",
            cell: ({ row }) =>
                format(
                    row.original.start_date
                        ? row.original.start_date
                        : new Date(),
                    "yyyy-MM-dd",
                ),
        },
        {
            header: "Stansiya",
            accessorKey: "station",
            cell: ({ row }) => row.original?.station?.name || "--",
        },
        {
            header: "Yukni yopish darajasi",
            accessorKey: "agent",
            cell: ({ row }) => row.original?.agent?.completed_orders || 0,
        },
        {
            header: " ",
            accessorKey: "action",
            cell: ({ row }) =>
                row.original.status === 1 ? (
                    <div className="flex items-center gap-2 justify-end">
                        <Button
                            type="button"
                            size={"sm"}
                            variant={"secondary"}
                            onClick={() => onOffer(row.original)}
                            icon={<Plus size={18} />}
                        />
                        <Clock4 className="text-orange-300" size={20} />
                    </div>
                ) : row.original.status === 2 ? (
                    <div className="flex justify-end">
                        <Button
                            type="button"
                            size={"sm"}
                            variant={"secondary_danger"}
                            onClick={() => onOffer(row.original)}
                            icon={
                                <Check className="text-destructive" size={18} />
                            }
                        />
                    </div>
                ) : row.original.status === 3 ? (
                    <Check className="text-primary" size={20} />
                ) : (
                    <X className="text-destructive" size={20} />
                ),
        },
    ]
}
