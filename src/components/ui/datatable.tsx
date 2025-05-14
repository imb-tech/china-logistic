import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    type Row,
} from "@tanstack/react-table"
import * as React from "react"

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DEFAULT_PAGE_SIZE, PAGE_KEY, PAGE_SIZE_KEY } from "@/constants/default"
import { cn } from "@/lib/utils"
import { useSearch } from "@tanstack/react-router"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"
import CursorPagination from "../as-params/cursor-pagination"
import LimitOffsetPagination from "../as-params/limit-offset-pagination"
import ParamPagination from "../as-params/pagination"
import EmptyBox from "../custom/empty-box"
import TableActions from "../custom/table-actions"
import Spinner from "./spinner"

interface DataTableProps<TData> {
    data: TData[] | undefined
    columns: ColumnDef<TData>[]
    loading?: boolean
    className?: string
    deleteSelecteds?: (val: number[]) => void
    rowSelection?: any
    setRowSelection?: (val: any) => void
    onRightClick?: (val: TData) => void
    selecteds_count?: boolean
    onRowClick?: (data: TData) => void
    disabled?: boolean
    rowColor?: (data: TData) => string
    paginationProps?: PaginationProps
    cursorPagination?: {
        next: string | null | undefined
        previous: string | null | undefined
        disabed?: boolean
        changePageSize?: boolean
        pageSizeParamName?: string
        paramName?: string
    }
    limitOffsetPagination?: {
        next: string | null | undefined
        previous: string | null | undefined
        disabed?: boolean
        changePageSize?: boolean
        pageSizeParamName?: string
        paramName?: string
    }
    viewAll?: boolean
    head?: React.ReactNode
    viewCount?: number | boolean | undefined
    sortable?: boolean
    numeration?: boolean
    wrapperClassName?: string
    actionMenuMode?: boolean
    onEdit?: (data: Row<TData>) => void
    onDelete?: (data: Row<TData>) => void
    onUndo?: (data: Row<TData>) => void
    onView?: (data: Row<TData>) => void
    tableWrapperClassName?: string
}

export function DataTable<TData>({
    data,
    columns,
    loading,
    className,
    deleteSelecteds,
    rowSelection,
    setRowSelection,
    onRightClick,
    selecteds_count,
    onRowClick,
    disabled,
    rowColor,
    paginationProps,
    cursorPagination,
    limitOffsetPagination,
    viewAll,
    head,
    viewCount,
    numeration = false,
    wrapperClassName,
    actionMenuMode,
    onEdit,
    onDelete,
    onUndo,
    onView,
    tableWrapperClassName,
}: DataTableProps<TData>) {
    const {
        paramName = PAGE_KEY,
        pageSizeParamName = PAGE_SIZE_KEY,
        totalPages,
    } = paginationProps || {}
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [selecteds, setSelecteds] = React.useState<any>([])
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const search: any = useSearch({ from: "/_main" })

    const orderedColumns = React.useMemo(() => {
        if (onDelete || onEdit || onUndo || onView) {
            return [
                ...columns,
                {
                    header: " ",
                    accessorKey: "action",
                    enableSorting: true,
                    cell: ({ row }) => (
                        <TableActions
                            menuMode={actionMenuMode}
                            onDelete={
                                onDelete ? () => onDelete?.(row) : undefined
                            }
                            onEdit={onEdit ? () => onEdit?.(row) : undefined}
                            onUndo={onUndo ? () => onUndo?.(row) : undefined}
                            onView={onView ? () => onView?.(row) : undefined}
                        />
                    ),
                },
            ]
        } else return columns
    }, [actionMenuMode, columns, onDelete, onEdit, onUndo, onView])

    const table = useReactTable({
        data: data || [],
        columns: orderedColumns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel({
            initialSync: true,
        }),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection ?? setSelecteds,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection: rowSelection ?? selecteds,
            pagination: {
                pageIndex: search[paramName] ? +search[paramName] - 1 : 0,
                pageSize: search[pageSizeParamName]
                    ? +search[pageSizeParamName]
                    : 25,
            },
        },
        manualPagination:
            !!totalPages ||
            !!cursorPagination ||
            viewAll ||
            !!limitOffsetPagination,
    })

    return (
        <main
            className={cn("w-full bg-card  rounded-md pb-4", wrapperClassName)}
        >
            {!!head && <div>{head}</div>}
            {selecteds_count && (
                <div className="flex flex-col gap-2 sm:flex-row items-end sm:items-center sm:justify-between pb-2">
                    <p
                        className={cn(
                            "flex-1 text-sm text-muted-foreground",
                            !deleteSelecteds && "text-end",
                        )}
                    >
                        {table.getFilteredRowModel().rows?.length} dan{" "}
                        {table.getFilteredSelectedRowModel().rows?.length} ta
                        qator tanlandi.
                    </p>
                    <div></div>
                </div>
            )}

            <div
                className={cn(
                    "rounded-md border relative overflow-x-auto overflow-y-auto",
                    tableWrapperClassName,
                )}
            >
                {loading && (
                    <div className="absolute top-0 w-full h-full grid place-items-center bg-black/80 z-20">
                        <Spinner size="responsive" color="secondary" />
                    </div>
                )}
                {data?.length ? (
                    <Table className={`${className} select-text bg-card`}>
                        <TableHeader>
                            {table
                                .getHeaderGroups()
                                .map((headerGroup, index) => (
                                    <TableRow key={index} className="border">
                                        {numeration && (
                                            <TableHead
                                                key={index}
                                                className={cn(
                                                    "border border-b-2 px-2 cursor-pointer",
                                                    rowSelection &&
                                                        index === 0 &&
                                                        "w-8",
                                                )}
                                            >
                                                №
                                            </TableHead>
                                        )}

                                        {headerGroup.headers.map(
                                            (header, index) => {
                                                return (
                                                    <TableHead
                                                        key={index}
                                                        className={cn(
                                                            "border border-b-2 px-2 cursor-pointer",
                                                            rowSelection &&
                                                                index === 0 &&
                                                                "w-8",
                                                        )}
                                                        onClick={header.column.getToggleSortingHandler()}
                                                    >
                                                        <div className="cursor-pointer flex items-center gap-1 select-none w-max">
                                                            {flexRender(
                                                                header.column
                                                                    .columnDef
                                                                    .header,
                                                                header.getContext(),
                                                            )}

                                                            {!header.column
                                                                .columnDef
                                                                .enableSorting
                                                                ? {
                                                                      asc: (
                                                                          <ArrowUp
                                                                              width={
                                                                                  18
                                                                              }
                                                                          />
                                                                      ),
                                                                      desc: (
                                                                          <ArrowDown
                                                                              width={
                                                                                  18
                                                                              }
                                                                          />
                                                                      ),
                                                                  }[
                                                                      header.column.getIsSorted() as string
                                                                  ] ?? (
                                                                      <ArrowUpDown
                                                                          width={
                                                                              16
                                                                          }
                                                                      />
                                                                  )
                                                                : null}
                                                        </div>
                                                    </TableHead>
                                                )
                                            },
                                        )}
                                    </TableRow>
                                ))}
                        </TableHeader>

                        <TableBody>
                            {table.getRowModel().rows?.length > 0 ? (
                                table.getRowModel().rows?.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        data-state={
                                            row.getIsSelected() && "selected"
                                        }
                                        onContextMenu={(e) => {
                                            e.preventDefault()
                                            onRightClick?.(row.original)
                                        }}
                                        className={cn(
                                            "hover:bg-border/50",
                                            rowColor?.(row.original),
                                        )}
                                    >
                                        {numeration && (
                                            <TableCell className="w-8">
                                                {((search[paramName] || 1) -
                                                    1) *
                                                    (search[
                                                        pageSizeParamName
                                                    ] || DEFAULT_PAGE_SIZE) +
                                                    index +
                                                    1}
                                            </TableCell>
                                        )}

                                        {row
                                            .getVisibleCells()
                                            .map((cell, index) => (
                                                <TableCell
                                                    key={index}
                                                    onClick={() =>
                                                        !notClick(
                                                            cell.column.id,
                                                        ) &&
                                                        onRowClick?.(
                                                            cell.row.original,
                                                        )
                                                    }
                                                    className={`cursor-pointer border ${
                                                        notClick(
                                                            cell.column.id,
                                                        ) && "cursor-default"
                                                    }`}
                                                >
                                                    {flexRender(
                                                        cell.column.columnDef
                                                            .cell,
                                                        cell.getContext(),
                                                    )}
                                                </TableCell>
                                            ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns?.length}
                                        className="h-24 text-center"
                                    >
                                        Mavjud emas
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter></TableFooter>
                    </Table>
                ) : (
                    <EmptyBox />
                )}
            </div>
            {!viewAll && data?.length ? (
                <div className="pt-4 mx-auto w-full relative flex justify-center">
                    {!!viewCount && !!table.getRowModel().rows?.length && (
                        <p className="absolute top-6 left-2">
                            Soni:{" "}
                            {typeof viewCount === "number"
                                ? viewCount
                                : table.getRowModel().rows?.length}{" "}
                            ta
                        </p>
                    )}
                    {totalPages ? (
                        <ParamPagination
                            disabled={disabled || loading}
                            {...paginationProps}
                        />
                    ) : cursorPagination ? (
                        <CursorPagination
                            {...cursorPagination}
                            disabled={disabled || loading}
                        />
                    ) : limitOffsetPagination ? (
                        <LimitOffsetPagination
                            {...limitOffsetPagination}
                            disabled={disabled || loading}
                        />
                    ) : (
                        <ParamPagination
                            disabled={disabled || loading}
                            {...paginationProps}
                            totalPages={table.getPageCount() || 1}
                            PageSize={table.getState().pagination.pageSize}
                        />
                    )}
                </div>
            ) : (
                ""
            )}
        </main>
    )
}

function notClick(id: string) {
    return [
        "code",
        "phone_number",
        "phone",
        "Amallar",
        "Boshqarish",
        " ",
        "Telefon",
    ].includes(id)
}
