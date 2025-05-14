import { useSellerProductsColumns } from "./columns"
import { data } from "../products"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import ParamDateRange from "@/components/as-params/date-picker-range"
import { DataTable } from "@/components/ui/datatable"
import DeleteModal from "@/components/custom/delete-modal"
import { useModal } from "@/hooks/useModal"

export const MyProductsPages = () => {
    const { openModal } = useModal("delete")
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-md border">
                <CardContent className="flex justify-between items-start">
                    <div className="flex flex-col gap-3 w-1/2">
                        <h1 className="text-2xl font-bold">Mahsulotlar</h1>
                        <Input
                            fullWidth
                            placeholder="Qidiruv..."
                            className=""
                        />
                    </div>
                    <ParamDateRange />
                </CardContent>
            </Card>
            <DataTable
                columns={useSellerProductsColumns()}
                data={data}
                onDelete={() => openModal}
                onEdit={() => {}}
                onView={() => {}}
                paginationProps={{ totalPages: 1 }}
                // loading={isLoading}
            />
            <DeleteModal id={"1"} path="my-products" />
        </div>
    )
}
