import FormTextarea from "@/components/form/textarea"
import { Button } from "@/components/ui/button"
import {
    CARGO_LIST,
    CONTAINERS,
    ORDERS_STATUS_CHANGE,
} from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePost } from "@/hooks/usePost"
import { useTypedStoreData } from "@/hooks/useStoreData"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const OrderStatusChange = () => {
    const { closeModal } = useModal("order-status-modal")
    const { storeData } = useTypedStoreData<OrderType>()
    const form = useForm<{ reason: string }>()

    const queryClient = useQueryClient()
    const { mutate: updateMutate, isPending: isPendingUpdate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yangilandi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [CARGO_LIST] })
            form.reset()
        },
    })

    const onSubmit = (data: { reason: string }) => {
        updateMutate(`${ORDERS_STATUS_CHANGE}`, {
            ...data,
            status: storeData?.status,
            order: storeData?.id,
        })
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormTextarea
                required
                methods={form}
                name="reason"
                label="Buyurtmani statusini o'zgartirish sababini kiriting!!!"
            />
            <div className="flex justify-end ">
                <Button
                    disabled={isPendingUpdate}
                    loading={isPendingUpdate}
                    type="submit"
                >
                    Tasdiqlash
                </Button>
            </div>
        </form>
    )
}

export default OrderStatusChange
