import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { INVENTORY, INVENTORY_CREATE } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePost } from "@/hooks/usePost"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { DataTable } from "@/components/ui/datatable"
import { useWarehouseCreateColumns } from "./columns-create"
import { useTypedStoreData } from "@/hooks/useStoreData"

const WareHouseCreate = () => {
    const { closeModal } = useModal("warehouse-modal")
    const { storeData } = useTypedStoreData<WarehouseType[]>()

    const form = useForm<{ transit_number: string }>()

    const queryClient = useQueryClient()
    const { mutate: createMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli qo'shildi")
            queryClient.invalidateQueries({ queryKey: [INVENTORY] })
            form.reset()
            closeModal()
        },
    })

    const onSubmit = (data: { transit_number: string }) => {
        if (!storeData) return toast.info("Ma'lumot topilmadi")

        createMutate(INVENTORY_CREATE, {
            transit_number: data.transit_number,
            loads: storeData.map((item) => item.id),
        })
    }

    const columns = useWarehouseCreateColumns()

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormInput
                required
                methods={form}
                name="transit_number"
                label="Mashina raqami"
            />
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="!border-none">
                    <AccordionTrigger className="!bg-transparent p-0 py-2  hover:no-underline !text-normal text-sm ">
                        Tanlangan yuklar: {storeData?.length}
                    </AccordionTrigger>
                    <AccordionContent>
                        <DataTable
                            columns={columns}
                            data={storeData || []}
                            viewAll={true}
                            numeration
                            className="min-w-[500px]"
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="flex justify-end ">
                <Button
                    disabled={isPendingCreate}
                    loading={isPendingCreate}
                    type="submit"
                >
                    Tasdiqlash
                </Button>
            </div>
        </form>
    )
}

export default WareHouseCreate
