import Modal from "@/components/custom/modal"
import { FormCheckbox } from "@/components/form/checkbox"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { TRANSPORT } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePatch } from "@/hooks/usePatch"
import { usePost } from "@/hooks/usePost"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const TransportCreate = () => {
    const { closeModal } = useModal("transport-modal")
    const form = useForm<TransportType>()

    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli qo'shildi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [TRANSPORT] })
        },
    })
    const { mutate: updateMutate, isPending: isPendingUpdate } = usePatch({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yangilandi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [TRANSPORT] })
        },
    })

    const onSubmit = (data: TransportType) => {
        cretaeMutate(TRANSPORT, data)
    }

    return (
        <Modal title="Transport qo'shish" modalKey="transport-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormInput
                    required
                    methods={form}
                    name="name"
                    label="Transport nomi"
                />
                <FormCheckbox
                    required
                    control={form.control}
                    name="is_station_required"
                    label="Bu transport uchun stansiya bo'lishi majburiy"
                />
                <div className="flex justify-end ">
                    <Button
                        disabled={isPendingCreate || isPendingUpdate}
                        loading={isPendingCreate || isPendingUpdate}
                        type="submit"
                    >
                        Saqlash
                    </Button>
                </div>
            </form>
        </Modal>
    )
}

export default TransportCreate
