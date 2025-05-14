import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/useModal"
import { useForm } from "react-hook-form"

const StationsCreate = () => {
    const { closeModal } = useModal("stations-modal")
    const form = useForm<StationsType>()

    const onSubmit = (data: StationsType) => {
        console.log(data)
    }

    return (
        <Modal title="Stansiya qo'shish" modalKey="stations-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormInput required methods={form} name="name" label="Stansiya nomi" />
                <div className="flex justify-end ">
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Modal>
    )
}

export default StationsCreate
