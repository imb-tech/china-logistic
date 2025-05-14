import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useSellerColumns } from "./columns"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"

const sellers: SellerType[] = [
    {
        id: "1",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        full_name: "Azizbek Karimov",
        email_or_phone: "azizbek@gmail.com",
        total_product: 12,
        referral_count: 3,
        created_at: "2023-10-12",
        wallet: 125000,
        auth_status: "tasdiqlangan",
    },
    {
        id: "2",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        full_name: "Dilnoza Yusupova",
        email_or_phone: "+998901234567",
        total_product: 20,
        referral_count: 5,
        created_at: "2023-11-01",
        wallet: 198000,
        auth_status: "tasdiqlangan",
    },
    {
        id: "3",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        full_name: "Javlonbek Ergashev",
        email_or_phone: "javlon@market.uz",
        total_product: 7,
        referral_count: 1,
        created_at: "2024-01-05",
        wallet: 52000,
        auth_status: "kutilmoqda",
    },
    {
        id: "4",
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
        full_name: "Zarnigor Mamatova",
        email_or_phone: "zarnigor@gmail.com",
        total_product: 18,
        referral_count: 4,
        created_at: "2023-12-20",
        wallet: 144500,
        auth_status: "tasdiqlangan",
    },
    {
        id: "5",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        full_name: "Oybek Rakhimov",
        email_or_phone: "+998935555555",
        total_product: 4,
        referral_count: 0,
        created_at: "2024-02-14",
        wallet: 25000,
        auth_status: "rad etilgan",
    },
    {
        id: "6",
        photo: "https://randomuser.me/api/portraits/women/6.jpg",
        full_name: "Gulnoza Tursunova",
        email_or_phone: "gulnoza.t@gmail.com",
        total_product: 30,
        referral_count: 10,
        created_at: "2023-09-30",
        wallet: 305000,
        auth_status: "tasdiqlangan",
    },
    {
        id: "7",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
        full_name: "Bekzod Abdullayev",
        email_or_phone: "+998908889900",
        total_product: 9,
        referral_count: 2,
        created_at: "2024-03-01",
        wallet: 77000,
        auth_status: "kutilmoqda",
    },
    {
        id: "8",
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
        full_name: "Nigora Qodirova",
        email_or_phone: "nigora_q@yahoo.com",
        total_product: 15,
        referral_count: 6,
        created_at: "2023-08-17",
        wallet: 122000,
        auth_status: "tasdiqlangan",
    },
    {
        id: "9",
        photo: "https://randomuser.me/api/portraits/men/9.jpg",
        full_name: "Shahzodbek Rizoqulov",
        email_or_phone: "shahzod@gmail.com",
        total_product: 5,
        referral_count: 1,
        created_at: "2024-01-28",
        wallet: 43000,
        auth_status: "rad etilgan",
    },
    {
        id: "10",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
        full_name: "Mukhabbat Xasanova",
        email_or_phone: "mukhabbat@gmail.com",
        total_product: 22,
        referral_count: 7,
        created_at: "2024-04-10",
        wallet: 165000,
        auth_status: "tasdiqlangan",
    },
]

export const SellersPages = () => {
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-md border">
                <CardContent className="flex justify-between items-start">
                    <div className="flex flex-col gap-3 w-1/2">
                        <h1 className="text-2xl font-bold">Sotuvchilar</h1>
                        <Input
                            fullWidth
                            placeholder="Qidiruv..."
                            className=""
                        />
                    </div>
                    <Button>
                        <Plus className="h-4 w-4" />
                        Yangi Sotuvchi
                    </Button>
                </CardContent>
            </Card>
            <DataTable
                columns={useSellerColumns({
                    onDelete: () => {},
                    onEdit: () => {},
                })}
                data={sellers}
                paginationProps={{ totalPages: 1 }}
                // loading={isLoading}
            />
        </div>
    )
}
