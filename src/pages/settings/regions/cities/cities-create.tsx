import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/useModal"
import { useForm } from "react-hook-form"

const CitiesCreate = () => {
    const { closeModal } = useModal("cities-modal")
    const form = useForm<CountriesType>()

    const onSubmit = (data: CountriesType) => {
        console.log(data)
    }

    return (
        <Modal title="Shahar qo'shish" modalKey="cities-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

                <FormInput
                    required
                    methods={form}
                    name="name"
                    label="Shahar yoki Viloyat nomi"
                />
                <div className="flex justify-end ">
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Modal>
    )
}

export default CitiesCreate
