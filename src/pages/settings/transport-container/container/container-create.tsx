import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { CONTAINERS } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePatch } from "@/hooks/usePatch"
import { usePost } from "@/hooks/usePost"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const ContainerCreate = () => {
    const { closeModal } = useModal("container-modal")
    const form = useForm<ContainerType>()
    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli qo'shildi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [CONTAINERS] })
        },
    })
    const { mutate: updateMutate, isPending: isPendingUpdate } = usePatch({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yangilandi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [CONTAINERS] })
        },
    })

    const onSubmit = (data: ContainerType) => {
        cretaeMutate(CONTAINERS, data)
    }

    return (
        <Modal title="Konteyner turini qo'shish" modalKey="container-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormInput
                    required
                    methods={form}
                    name="name"
                    label="Konteyner nomi"
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

export default ContainerCreate
