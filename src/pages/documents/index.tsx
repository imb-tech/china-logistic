import { useCategoriesColumns } from "./columns"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DataTable } from "@/components/ui/datatable"

const data: DocumentsType[] = [
    { id: 1, title: "Diplom ishi", icon: "🎓", top: true },
    { id: 2, title: "Referat", icon: "📄" },
    { id: 3, title: "Kurs ishi", icon: "📚" },
    { id: 4, title: "Moliya hujjati", icon: "💵", top: true },
    { id: 5, title: "Biznes reja", icon: "📊" },
    { id: 6, title: "Marketing tahlil", icon: "📈" },
    { id: 7, title: "Tadqiqot maqolasi", icon: "🧠", top: true },
    { id: 8, title: "Yuridik hujjat", icon: "⚖️" },
    { id: 9, title: "Texnik pasport", icon: "🔧" },
    { id: 10, title: "Prezentatsiya", icon: "📽️", top: true },
    { id: 11, title: "Statistika hisobot", icon: "📊" },
    { id: 12, title: "Dastur kodi", icon: "💻", top: true },
    { id: 13, title: "Tibbiy hujjat", icon: "🩺" },
    { id: 14, title: "Tilshunoslik ishi", icon: "📝", top: true },
    { id: 15, title: "Tarixiy hujjat", icon: "🏺" },
]

export const DocumentsPages = () => {
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-md border">
                <CardContent className="flex justify-between items-start">
                    <div className="flex flex-col gap-3 w-1/2">
                        <h1 className="text-2xl font-bold">Hujjatlar</h1>
                        <Input
                            fullWidth
                            placeholder="Qidiruv..."
                            className=""
                        />
                    </div>
                    <Button>
                        <Plus className="h-4 w-4" />
                        Yangi kategoriya
                    </Button>
                </CardContent>
            </Card>
            <DataTable
                columns={useCategoriesColumns({
                    onDelete: () => {},
                    onEdit: () => {},
                })}
                data={data}
                paginationProps={{ totalPages: 1 }}
                // loading={isLoading}
            />
        </div>
    )
}
