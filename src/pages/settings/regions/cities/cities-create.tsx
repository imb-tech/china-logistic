import Modal from "@/components/custom/modal"
import { FormCombobox } from "@/components/form/combobox"
import FormInput from "@/components/form/input"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/useModal"
import { useForm } from "react-hook-form"

const CitiesCreate = () => {
    const { closeModal } = useModal("cities-modal")
    const { openModal: openModalAdd } = useModal("countries-modal")
    const form = useForm<CountriesType>()

    const onSubmit = (data: CountriesType) => {
        console.log(data)
    }

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
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Modal>
    )
}

export default CitiesCreate
