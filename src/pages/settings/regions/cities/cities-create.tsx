import Modal from "@/components/custom/modal"
import { FormCombobox } from "@/components/form/combobox"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { REGION } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePatch } from "@/hooks/usePatch"
import { usePost } from "@/hooks/usePost"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const CitiesCreate = () => {
    const { closeModal } = useModal("cities-modal")
    const { openModal: openModalAdd } = useModal("countries-modal")
    const form = useForm<CitiesType>()
    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli qo'shildi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [REGION] })
        },
    })
    const { mutate: updateMutate, isPending: isPendingUpdate } = usePatch({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yangilandi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [REGION] })
        },
    })

    const onSubmit = (data: CitiesType) => {
        cretaeMutate(REGION, data)
    }

    return (
        <Modal title="Shahar qo'shish" modalKey="cities-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormCombobox
                    options={[]}
                    control={form.control}
                    name="region"
                    label="Davlat"
                    required
                    onAdd={openModalAdd}
                />
                <FormInput
                    required
                    methods={form}
                    name="name"
                    label="Shahar yoki Viloyat nomi"
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

export default CitiesCreate
