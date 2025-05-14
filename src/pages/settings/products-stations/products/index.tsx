import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useProductsColumns } from "./columns"
import { useModal } from "@/hooks/useModal"

const data: ProductsType[] = [
    { id: 1, name: "Product Alpha", code: "PR-100" },
    { id: 2, name: "Product Beta", code: "PR-101" },
    { id: 3, name: "Product Gamma", code: "PR-102" },
    { id: 4, name: "Product Delta", code: "PR-103" },
    { id: 5, name: "Product Epsilon", code: "PR-104" },
    { id: 6, name: "Product Zeta", code: "PR-105" },
    { id: 7, name: "Product Eta", code: "PR-106" },
    { id: 8, name: "Product Theta", code: "PR-107" },
    { id: 9, name: "Product Iota", code: "PR-108" },
    { id: 10, name: "Product Kappa", code: "PR-109" },
    { id: 11, name: "Product Lambda", code: "PR-110" },
    { id: 12, name: "Product Mu", code: "PR-111" },
]

export const ProductsPages = () => {
    const { openModal } = useModal("product-modal")

    const columns = useProductsColumns()
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <h1 className="text-xl">Mahsulotlar</h1>
                        <div className="flex items-center gap-3">
                            <ParamInput
                                fullWidth
                                placeholder="Qidirish"
                                className=""
                            />
                            <Button onClick={openModal}>
                                <Plus className="h-4 w-4" />
                                Qo'shish
                            </Button>
                        </div>
                    </div>
                    <DataTable
                        columns={columns}
                        data={data}
                        paginationProps={{ totalPages: 1 }}
                        onDelete={() => {}}
                        onEdit={() => {}}
                        // loading={isLoading}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
