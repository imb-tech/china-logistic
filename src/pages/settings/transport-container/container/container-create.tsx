import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { CONTAINER_TYPE } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePatch } from "@/hooks/usePatch"
import { usePost } from "@/hooks/usePost"
import { useStoreData } from "@/store/global-store"
import { useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const ContainerCreate = () => {
    const { closeModal } = useModal("container-modal")
    
    const { storeData } = useStoreData()
    const form = useForm<ContainerType>()
    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli qo'shildi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [CONTAINER_TYPE] })
            form.reset()
        },
    })
    const { mutate: updateMutate, isPending: isPendingUpdate } = usePatch({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yangilandi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [CONTAINER_TYPE] })
            form.reset()
        },
    })

    const onSubmit = (data: ContainerType) => {
        if (storeData?.id) {
            updateMutate(`${CONTAINER_TYPE}/${storeData?.id}`, data)
        } else {
            cretaeMutate(CONTAINER_TYPE, data)
        }
    }

    useEffect(() => {
        if (storeData?.id) {
            form.reset(storeData)
        }
    }, [storeData, form])

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
