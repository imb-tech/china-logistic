import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/useModal"
import { useForm } from "react-hook-form"

const ContainerCreate = () => {
    const { closeModal } = useModal("container-modal")
    const form = useForm<ContainerType>()

    const onSubmit = (data: ContainerType) => {
        console.log(data)
    }

    return (
        <Modal title="Konteyner turini qo'shish" modalKey="container-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormInput required methods={form} name="name" label="Konteyner nomi" />
                <div className="flex justify-end ">
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Modal>
    )
}

export default ContainerCreate
