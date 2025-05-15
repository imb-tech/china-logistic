import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { COUNTRY } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePatch } from "@/hooks/usePatch"
import { usePost } from "@/hooks/usePost"
import { useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const CountriesCreate = () => {
    const { closeModal } = useModal("countries-modal")
    const form = useForm<CountriesType>()

    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli qo'shildi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [COUNTRY] })
        },
    })
    const { mutate: updateMutate, isPending: isPendingUpdate } = usePatch({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yangilandi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [COUNTRY] })
        },
    })

    const onSubmit = (data: CountriesType) => {
        cretaeMutate(COUNTRY, data)
    }

    return (
        <Modal title="Davlat qo'shish" modalKey="countries-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormInput
                    required
                    methods={form}
                    name="name"
                    label="Davlat nomi"
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

export default CountriesCreate
