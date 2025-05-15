import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useCustomersColumns } from "./columns"
import { DataTable } from "@/components/ui/datatable"
import ParamInput from "@/components/as-params/input"
import { useModal } from "@/hooks/useModal"
import DeleteModal from "@/components/custom/delete-modal"
import { useStoreData } from "@/store/global-store"

const customers: CustomersType[] = [
    {
        id: "1",
        role: 1,
        full_name: "Ali Valiyev",
        username: "ali_valiyev",
        phone_code: "+998",
        phone_number: "901234567",
        address: "Toshkent, Chilonzor",
        completed_orders: 4,
        in_completed_orders: 1,
    },
    {
        id: "2",
        role: 2,
        full_name: "Dilnoza Karimova",
        username: "dilnoza_k",
        phone_code: "+998",
        phone_number: "911234567",
        address: "Samarqand, Urgut",
        completed_orders: 2,
        in_completed_orders: 0,
    },
    {
        id: "3",
        role: 1,
        full_name: "Rustam Sobirov",
        username: "rustam_sobir",
        phone_code: "+998",
        phone_number: "931234567",
        address: "Andijon, Asaka",
        completed_orders: 5,
        in_completed_orders: 2,
    },
    {
        id: "4",
        role: 2,
        full_name: "Ziyoda Qodirova",
        username: "ziyoda_q",
        phone_code: "+998",
        phone_number: "941234567",
        address: "Namangan, Chortoq",
        completed_orders: 3,
        in_completed_orders: 0,
    },
    {
        id: "5",
        role: 1,
        full_name: "Bekzod Rasulov",
        username: "bek_rasul",
        phone_code: "+998",
        phone_number: "971234567",
        address: "Farg'ona, Qo'qon",
        completed_orders: 6,
        in_completed_orders: 2,
    },
    {
        id: "6",
        role: 3,
        full_name: "Shahnoza Alimova",
        username: "shahnoza_ali",
        phone_code: "+998",
        phone_number: "901112233",
        address: "Xorazm, Urganch",
        completed_orders: 1,
        in_completed_orders: 0,
    },
    {
        id: "7",
        role: 2,
        full_name: "Javlonbek Yo‘ldoshev",
        username: "javlon_y",
        phone_code: "+998",
        phone_number: "911998877",
        address: "Buxoro, G‘ijduvon",
        completed_orders: 3,
        in_completed_orders: 1,
    },
    {
        id: "8",
        role: 1,
        full_name: "Mohira Zokirova",
        username: "mohira_z",
        phone_code: "+998",
        phone_number: "931122334",
        address: "Qashqadaryo, Qarshi",
        in_completed_orders: 0,
    },
    {
        id: "9",
        role: 2,
        full_name: "Baxtiyor To‘xtayev",
        username: "baxtiyor_t",
        phone_code: "+998",
        phone_number: "901223344",
        address: "Navoiy, Karmana",
        completed_orders: 6,
        in_completed_orders: 0,
    },
    {
        id: "10",
        role: 1,
        full_name: "Feruza Mahmudova",
        username: "feruza_m",
        phone_code: "+998",
        phone_number: "991122334",
        address: "Jizzax, Zomin",
        completed_orders: 4,
        in_completed_orders: 1,
    },
    {
        id: "11",
        role: 3,
        full_name: "Sardor Oripov",
        username: "sardor_o",
        phone_code: "+998",
        phone_number: "951234567",
        address: "Surxondaryo, Termiz",
        completed_orders: 1,
        in_completed_orders: 1,
    },
    {
        id: "12",
        role: 2,
        full_name: "Aziza Qahhorova",
        username: "aziza_q",
        phone_code: "+998",
        phone_number: "961112233",
        address: "Sirdaryo, Guliston",
        completed_orders: 2,
        in_completed_orders: 1,
    },
]

export const CustomersPages = () => {
    const { openModal: openCustomerAdd } = useModal("customer-modal")
    const { openModal: openModalDelete } = useModal("customer-delete")
    const { storeData, setStoreData } = useStoreData()

    const handleDelete = (item: CustomersType) => {
        openModalDelete()
        setStoreData(item)
    }

    const handleUpdate = (item: CustomersType) => {
        setStoreData(item)
        openCustomerAdd()
    }

    const handleAdd = () => {
        openCustomerAdd()
    }

    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <h1 className="text-xl">Mijozlar ro'yxati</h1>
                        <div className="flex items-center gap-3">
                            <ParamInput
                                fullWidth
                                placeholder="Mijozlarni qidirish"
                                className=""
                            />
                            <Button onClick={handleAdd}>
                                <Plus className="h-4 w-4" />
                                Qo'shish
                            </Button>
                        </div>
                    </div>
                    <DataTable
                        columns={useCustomersColumns()}
                        data={customers}
                        onDelete={(item) => handleDelete(item.original)}
                        onEdit={(item) => handleUpdate(item.original)}
                        onView={() => {}}
                        // loading={isLoading}
                    />
                </CardContent>
            </Card>
            <DeleteModal
                modalKey="customer-delete"
                id={storeData?.id}
                path="customer"
            />
        </div>
    )
}
