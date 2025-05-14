import Modal from "@/components/custom/modal"
import FormInput from "@/components/form/input"
import PhoneField from "@/components/form/phone-field"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/useModal"
import { useForm } from "react-hook-form"

type Form = {
    full_name: string
    phone_number: number | string
    address: string
    region: number
    password: string | number
    username: string | number
}

const CustomerCreate = () => {
    const { closeModal } = useModal("customer-modal")
    const form = useForm<Form>()

    const onSubmit = (data: Form) => {
        console.log(data)
    }

    return (
        <Modal size="max-w-2xl"  title="Yangi mijoz qo'shish" modalKey="customer-modal">
            <form onSubmit={form.handleSubmit(onSubmit)} className="gap-3 grid md:grid-cols-2 grid-cols-1">
                <FormInput
                    required
                    methods={form}
                    name="full_name"
                    label="F.I.O"
                    wrapperClassName={"md:col-span-2"}
                />
                <PhoneField required methods={form} name="phone_number" wrapperClassName="md:col-span-2" />
                <FormInput
                    required
                    methods={form}
                    name="region"
                    label="Mintaqa/Shahar"
                />
                <FormInput
                    required
                    methods={form}
                    name="address"
                    label="Manzil"
                    placeholder="Manzil"
                />
                <FormInput
                    required
                    methods={form}
                    name="username"
                    label="Login"
                    placeholder="username11"
                />
                <FormInput
                    required
                    methods={form}
                    type="password"
                    name="password"
                    label="Parol"
                    placeholder="******"
                />
                <div className="flex justify-end md:col-span-2">
                    <Button type="submit">Saqlash</Button>
                </div>
            </form>
        </Modal>
    )
}

export default CustomerCreate
