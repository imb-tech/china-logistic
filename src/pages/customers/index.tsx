import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"
import { useCustomersColumns } from "./columns"
import { DataTable } from "@/components/ui/datatable"

const customers: CustomersType[] = [
    {
        id: "1",
        full_name: "Azizbek Karimov",
        email_or_phone: "azizbek@gmail.com",
        purchased_count: 12,
        created_at: "2023-10-12",
        auth_status: "tasdiqlangan",
    },
    {
        id: "2",
        full_name: "Dilnoza Yusupova",
        email_or_phone: "+998901234567",
        purchased_count: 20,
        created_at: "2023-11-01",
        auth_status: "tasdiqlangan",
    },
    {
        id: "3",
        full_name: "Javlonbek Ergashev",
        email_or_phone: "javlon@market.uz",
        purchased_count: 7,
        created_at: "2024-01-05",
        auth_status: "kutilmoqda",
    },
    {
        id: "4",
        full_name: "Zarnigor Mamatova",
        email_or_phone: "zarnigor@gmail.com",
        purchased_count: 18,
        created_at: "2023-12-20",
        auth_status: "tasdiqlangan",
    },
    {
        id: "5",
        full_name: "Oybek Rakhimov",
        email_or_phone: "+998935555555",
        purchased_count: 4,
        created_at: "2024-02-14",
        auth_status: "rad etilgan",
    },
    {
        id: "6",
        full_name: "Gulnoza Tursunova",
        email_or_phone: "gulnoza.t@gmail.com",
        purchased_count: 30,
        created_at: "2023-09-30",
        auth_status: "tasdiqlangan",
    },
    {
        id: "7",
        full_name: "Bekzod Abdullayev",
        email_or_phone: "+998908889900",
        purchased_count: 9,
        created_at: "2024-03-01",
        auth_status: "kutilmoqda",
    },
    {
        id: "8",
        full_name: "Nigora Qodirova",
        email_or_phone: "nigora_q@yahoo.com",
        purchased_count: 15,
        created_at: "2023-08-17",
        auth_status: "tasdiqlangan",
    },
    {
        id: "9",
        full_name: "Shahzodbek Rizoqulov",
        email_or_phone: "shahzod@gmail.com",
        purchased_count: 5,
        created_at: "2024-01-28",
        auth_status: "rad etilgan",
    },
    {
        id: "10",
        full_name: "Mukhabbat Xasanova",
        email_or_phone: "mukhabbat@gmail.com",
        purchased_count: 22,
        created_at: "2024-04-10",
        auth_status: "tasdiqlangan",
    },
]

export const CustomersPages = () => {
    return (
        <div className="w-full">
            <Card className="mb-5 rounded-md border">
                <CardContent className="flex justify-between items-start">
                    <div className="flex flex-col gap-3 w-1/2">
                        <h1 className="text-2xl font-bold">Foydalanuvchilar</h1>
                        <Input
                            fullWidth
                            placeholder="Qidiruv..."
                            className=""
                        />
                    </div>
                    <Button>
                        <Plus className= "h-4 w-4" />
                        Yangi Foydalanuvchi
                    </Button>
                </CardContent>
            </Card>
            <DataTable
                columns={useCustomersColumns()}
                data={customers}
                paginationProps={{ totalPages: 1 }}
                // loading={isLoading}
            />
        </div>
    )
}
