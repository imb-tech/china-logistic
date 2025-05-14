import Modal from "@/components/custom/modal"
import { FormCheckbox } from "@/components/form/checkbox"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/useModal"
import { useForm } from "react-hook-form"

const TransportCreate = () => {
    const { closeModal } = useModal("transport-modal")
    const form = useForm<TransportType>()

    const onSubmit = (data: TransportType) => {
        console.log(data)
    }

    return (
        <Modal title="Transport qo'shish" modalKey="transport-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormInput
                    required
                    methods={form}
                    name="name"
                    label="Transport nomi"
                />
                <FormCheckbox
                    required
                    control={form.control}
                    name="is_station_required"
                    label="Bu transport uchun stansiya bo'lishi majburiy"
                />
                <div className="flex justify-end ">
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Modal>
    )
}

export default TransportCreate
