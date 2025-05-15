import { FormCombobox } from "@/components/form/combobox"
import { FormDatePicker } from "@/components/form/date-picker"
import FormInput from "@/components/form/input"
import { FormSelect } from "@/components/form/select"
import FormTextarea from "@/components/form/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useModal } from "@/hooks/useModal"
import { useForm } from "react-hook-form"

type FormType = {}

function BulkCargo() {
    const { openModal: openModalProductAdd } = useModal("product-modal")
    const { openModal: openModalCitiesAdd } = useModal("cities-modal")
    const { openModal: openModalContainerAdd } = useModal("container-modal")
    const { openModal: openModalTransportAdd } = useModal("transport-modal")
    const form = useForm()

    const onSubmit = () => {}

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
        >
            <Card>
                <CardContent className="space-y-2">
                    <h1>Konteyner ma'lumotlari</h1>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 border border-input rounded-lg px-3 py-4">
                        <FormCombobox
                            options={[]}
                            control={form.control}
                            name="name"
                            label="Konteyner turi"
                            required
                            placeholder="40 HQ"
                            onAdd={openModalContainerAdd}
                        />
                        <FormSelect
                            control={form.control}
                            name="name"
                            label="Holati"
                            required
                        />
                        <FormCombobox
                            options={[]}
                            control={form.control}
                            name="name"
                            label="Transport  turi"
                            required
                            placeholder="Temir yo'l"
                            onAdd={openModalTransportAdd}
                        />
                        <FormDatePicker
                            control={form.control}
                            name="name"
                            label="Yuklash sanasi"
                            required
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-2">
                    <h1>Mijoz #1</h1>
                    <div className=" grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1  gap-4  rounded-lg p-3 bg-slate-100">
                        <div className="col-span-6">
                            <FormCombobox
                                options={[]}
                                control={form.control}
                                name="name"
                                label="Mijoz ismi"
                                required
                            />
                        </div>
                        <FormInput
                            methods={form}
                            name="name"
                            label="Yuklash manzili"
                            required
                            placeholder="Joy nomi"
                        />
                        <FormInput
                            methods={form}
                            name="name"
                            label="Yuklash manzili (URL)"
                            required
                            placeholder="Joylashuv (URL from map)"
                        />
                        <FormCombobox
                            options={[]}
                            control={form.control}
                            name="name"
                            label="Mahsulot nomi"
                            required
                            onAdd={openModalProductAdd}
                        />
                        <FormInput
                            methods={form}
                            name="name"
                            label="Mahsulot vazni"
                            required
                            placeholder="26 tonna"
                        />
                        <FormInput
                            methods={form}
                            name="name"
                            label="Mahsulot hajmi"
                            required
                            placeholder="68 Kb"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-2">
                    <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 ">
                        <FormCombobox
                            options={[]}
                            control={form.control}
                            name="name"
                            label="Yetkazib berish shahri"
                            placeholder="Shahar"
                            required
                            onAdd={openModalCitiesAdd}
                        />
                        <FormInput
                            methods={form}
                            name="name"
                            label="Yetkazib berish manzili"
                            required
                        />
                        <FormTextarea
                            methods={form}
                            name="name"
                            label="Izoh"
                            required
                            placeholder="Izoh..."
                            wrapperClassName="col-span-4"
                            rows={5}
                        />
                        <div className="col-span-4">
                            <FormCombobox
                                options={[]}
                                control={form.control}
                                name="name"
                                label="Logistni tanlang"
                                required
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Button type="submit" className="sm:w-max w-full px-12 float-end">
                Saqlash
            </Button>
        </form>
    )
}

export default BulkCargo
