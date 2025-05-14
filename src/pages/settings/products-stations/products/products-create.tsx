import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/useModal"
import { useForm } from "react-hook-form"

const ProductsCreate = () => {
    const { closeModal } = useModal("product-modal")
    const form = useForm<ProductsType>()

    const onSubmit = (data: ProductsType) => {
        console.log(data)
    }

    return (
        <Modal title="Mahsulot qo'shish" modalKey="product-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormInput required methods={form} name="name" label="Nomi" />
                <FormInput required methods={form} name="code" label="Kodi" />

                <div className="flex justify-end ">
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Modal>
    )
}

export default ProductsCreate
