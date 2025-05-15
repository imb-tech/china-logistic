import { FormCombobox } from "@/components/form/combobox"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { REGION } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePatch } from "@/hooks/usePatch"
import { usePost } from "@/hooks/usePost"
import { useStoreData } from "@/store/global-store"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const CitiesCreate = () => {
    const { closeModal } = useModal("cities-modal")
    const { storeData } = useStoreData()
    const { openModal: openModalAdd } = useModal("countries-modal")
    const form = useForm<CitiesType>({
        defaultValues: storeData ?? {},
    })
    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli qo'shildi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [REGION] })
            form.reset()
        },
    })
    const { mutate: updateMutate, isPending: isPendingUpdate } = usePatch({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yangilandi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [REGION] })
            form.reset()
        },
    })

    const onSubmit = (data: CitiesType) => {
        if (storeData?.id) {
            updateMutate(`${REGION}/${storeData?.id}`, data)
        } else {
            cretaeMutate(REGION, data)
        }
    }

 

    return (
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
    )
}

export default CitiesCreate
