import Modal from "@/components/custom/modal"
import { FormCombobox } from "@/components/form/combobox"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { REGION } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePatch } from "@/hooks/usePatch"
import { usePost } from "@/hooks/usePost"
import { useStoreData } from "@/store/global-store"
import { useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const CitiesCreate = () => {
    const { closeModal } = useModal("cities-modal")
    const { storeData } = useStoreData()
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
        if (storeData?.id) {
            updateMutate(`${REGION}/${storeData?.id}`, data)
        } else {
            cretaeMutate(REGION, data)
        }
    }

    useEffect(() => {
        if (storeData?.id) {
            form.reset(storeData)
        }
    }, [storeData, form])

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
