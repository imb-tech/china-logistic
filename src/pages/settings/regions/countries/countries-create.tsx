import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/useModal"
import { useForm } from "react-hook-form"

const CountriesCreate = () => {
    const { closeModal } = useModal("countries-modal")
    const form = useForm<CountriesType>()

    const onSubmit = (data: CountriesType) => {
        console.log(data)
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
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Modal>
    )
}

export default CountriesCreate
