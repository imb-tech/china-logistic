import { useOrderColumns } from "./columns"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import ParamDateRange from "@/components/as-params/date-picker-range"
import { DataTable } from "@/components/ui/datatable"

export const orderData: OrderType[] = [
    {
        id: "1",
        customer_info: {
            name: "Sardor Karimov",
            email_or_phone: "sardor.k@gmail.com",
        },
        seller_info: {
            id: "s1",
            name: "Azizbek Rahimov",
            email_or_phone: "azizbek.r@gmail.com",
        },
        document: {
            slug: "ilmiy-ish-1",
            title: "Ilmiy ish: Sun’iy intellekt va ta’lim",
        },
        price: 150000,
        provider: "click",
        created_at: "2024-09-25T14:30:00Z",
    },
    {
        id: "2",
        customer_info: {
            name: "Dilshod Qodirov",
            email_or_phone: "+998901112233",
        },
        seller_info: {
            id: "s2",
            name: "Murodillo Tursunov",
            email_or_phone: "murod.t@gmail.com",
        },
        document: {
            slug: "diplom-ish-2024",
            title: "Diplom ishi: Kriptografiya asoslari",
        },
        price: 200000,
        provider: "payme",
        created_at: "2024-09-27T09:15:00Z",
    },
    {
        id: "3",
        customer_info: {
            name: "Zarnigor Xasanova",
            email_or_phone: "zarnigor.x@example.com",
        },
        seller_info: {
            id: "s3",
            name: "Olimbek Rasulov",
            email_or_phone: "+998907654321",
        },
        document: {
            slug: "python-dasturlash",
            title: "Python dasturlash asoslari",
        },
        price: 180000,
        provider: "card_data",
        created_at: "2024-09-20T16:50:00Z",
    },
    {
        id: "4",
        customer_info: {
            name: "Shahzoda Abdullayeva",
            email_or_phone: "shahzoda@mail.uz",
        },
        seller_info: {
            id: "s4",
            name: "Bekzod Karimov",
            email_or_phone: "bekzod.karimov@mail.uz",
        },
        document: {
            slug: "mobil-ilova-loyihasi",
            title: "Mobil ilova loyihalash tamoyillari",
        },
        price: 225000,
        provider: "click",
        created_at: "2024-09-10T10:00:00Z",
    },
    {
        id: "5",
        customer_info: {
            name: "Jasur Yuldashev",
            email_or_phone: "+998935551234",
        },
        seller_info: {
            id: "s5",
            name: "Gulnoza Tadjibaeva",
            email_or_phone: "gulnoza@gmail.com",
        },
        document: {
            slug: "web-frontend-dasturlash",
            title: "Frontend dasturlash: React va Next.js",
        },
        price: 175000,
        provider: "payme",
        created_at: "2024-09-15T18:45:00Z",
    },
]

export const OrdersPages = () => {
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-md border">
                <CardContent className="flex justify-between items-start">
                    <div className="flex flex-col gap-3 w-1/2">
                        <h1 className="text-2xl font-bold">Buyurtmalar</h1>
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
                columns={useOrderColumns()}
                data={orderData}
                paginationProps={{ totalPages: 1 }}
                // loading={isLoading}
            />
        </div>
    )
}
