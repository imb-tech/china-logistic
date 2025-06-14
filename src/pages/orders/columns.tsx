import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import OrderStatus from "./order-status"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export const useOrderColumns = (): ColumnDef<OrderType>[] => {
    return [
        {
            header: "Mijoz",
            accessorKey: "customers",
            enableSorting: true,
            cell: ({ row }) =>
                row.original.customers?.length > 1 ? (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={
                                    row.original.customers?.length > 1
                                        ? "secondary"
                                        : "ghost"
                                }
                                onClick={(e) => {
                                    e.stopPropagation()
                                }}
                            >
                                {`Tanlangan mijozlar (${row.original.customers?.length})`}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64">
                            <div className="flex flex-col gap-2 text-sm ">
                                {row.original?.customers?.map((item, index) => (
                                    <span>
                                        {index + 1}. {item}
                                    </span>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                ) : (
                    row.original.customers?.[0]
                ),
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: ({ row }) => <OrderStatus row={row.original} />,
        },
        {
            header: "Logist",
            accessorKey: "agent",
            enableSorting: true,
            cell: ({ row }) => row.original.agent || "-",
        },
        {
            header: "Yaratilgan sana",
            accessorKey: "created_at",
            cell: ({ row }) => format(row.original.created_at, "yyyy-MM-dd"),
        },
        {
            header: "Yetkazish sanasi",
            accessorKey: "load_date",
            cell: ({ row }) => format(row.original.load_date, "yyyy-MM-dd"),
        },
    ]
}
