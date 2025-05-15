import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { PRODUCT } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePatch } from "@/hooks/usePatch"
import { usePost } from "@/hooks/usePost"
import { useStoreData } from "@/store/global-store"
import { useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const ProductsCreate = () => {
    const { closeModal } = useModal("product-modal")
    const { storeData } = useStoreData()
    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli qo'shildi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [PRODUCT] })
            form.reset()
        },
    })
    const { mutate: updateMutate, isPending: isPendingUpdate } = usePatch({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yangilandi")
            closeModal()
            queryClient.invalidateQueries({ queryKey: [PRODUCT] })
            form.reset()
        },
    })
    const form = useForm<ProductsType>()

    const onSubmit = (data: ProductsType) => {
        if (storeData?.id) {
            updateMutate(`${PRODUCT}/${storeData?.id}`, data)
        } else {
            cretaeMutate(PRODUCT, data)
        }
    }

    useEffect(() => {
        if (storeData?.id) {
            form.reset(storeData)
        }
    }, [storeData, form])

    return (
        <Modal title="Mahsulot qo'shish" modalKey="product-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormInput required methods={form} name="name" label="Nomi" />
                <FormInput required methods={form} name="code" label="Kodi" />

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

export default ProductsCreate
