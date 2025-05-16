import { FormCombobox } from "@/components/form/combobox"
import { FormDatePicker } from "@/components/form/date-picker"
import FormInput from "@/components/form/input"
import { FormSelect } from "@/components/form/select"
import FormTextarea from "@/components/form/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    CONTAINER_TYPE,
    PRODUCT,
    REGION,
    TRANSPORT,
    USERS,
} from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"
import { useModal } from "@/hooks/useModal"
import { Copy } from "lucide-react"
import { useForm } from "react-hook-form"

type FormType = {}

function WholeLoad() {
    const form = useForm()
    const { openModal: openModalProductAdd } = useModal("product-modal")
    const { openModal: openModalCitiesAdd } = useModal("cities-modal")
    const { openModal: openModalCustomerAdd } = useModal("customer-modal")
    const { openModal: openModalContainerAdd } = useModal("container-modal")
    const { openModal: openModalTransportAdd } = useModal("transport-modal")

    const { data: dataContainer, isLoading: isLoadingContainer } =
        useGet<ContainerResults>(CONTAINER_TYPE, {
            params: { page_size: 50 },
        })
    const { data: dataTransport, isLoading: isLoadingTransport } =
        useGet<TransportResults>(TRANSPORT, {
            params: { page_size: 50 },
        })
    const { data: dataUsers, isLoading: isLoadinaUsers } =
        useGet<CustomersTypeResults>(USERS, {
            params: { page_size: 50 },
        })
    const { data: dataCities, isLoading: isLoadingCities } =
        useGet<CitiesResults>(REGION, {
            params: { page_size: 50 },
        })
    const { data: dataProducts, isLoading: isLoadingProducts } =
        useGet<ProductResults>(PRODUCT, {
            params: { page_size: 50 },
        })

    const onSubmit = () => {}

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
        >
            <Card>
                <CardContent className="space-y-2">
                    <h1>Mijoz ma'lumotlari</h1>
                    <div className="w-full border border-input rounded-lg p-3">
                        <FormCombobox
                            options={dataUsers?.results}
                            valueKey="id"
                            labelKey="full_name"
                            control={form.control}
                            name="name"
                            label="Mijozni ismi"
                            required
                            placeholder="Mijozni tanlang"
                            onAdd={openModalCustomerAdd}
                            isLoading={isLoadinaUsers}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-2">
                    <h1>Konteyner #1</h1>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 rounded-lg p-3 dark:bg-card dark:border bg-slate-100">
                        <FormCombobox
                            options={dataContainer?.results}
                            valueKey="id"
                            labelKey="name"
                            control={form.control}
                            name="name"
                            label="Konteyner turi"
                            required
                            placeholder="40 HQ"
                            onAdd={openModalContainerAdd}
                            isLoading={isLoadingContainer}
                        />
                        <FormSelect
                            control={form.control}
                            name="name"
                            label="Holati"
                            required
                        />
                        <FormCombobox
                            options={dataTransport?.results}
                            isLoading={isLoadingTransport}
                            valueKey="id"
                            labelKey="name"
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

                        <div className="space-y-2 col-span-4">
                            <h1>Mahsulot #1</h1>
                            <div className=" grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1  gap-4  rounded-lg p-3 dark:bg-card dark:border bg-slate-200">
                                <FormInput
                                    methods={form}
                                    name="name"
                                    label="Yuklash manzili"
                                    required
                                    placeholder="Joy nomi"
                                />
                                <FormInput
                                    methods={form}
                                    type="url"
                                    name="name"
                                    label="Yuklash manzili (URL)"
                                    required
                                    placeholder="Joylashuv (URL from map)"
                                />
                                <FormCombobox
                                    options={dataProducts?.results}
                                    valueKey="id"
                                    labelKey="name"
                                    control={form.control}
                                    name="name"
                                    label="Mahsulot nomi"
                                    required
                                    onAdd={openModalProductAdd}
                                    isLoading={isLoadingProducts}
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
                        </div>

                        <FormCombobox
                            control={form.control}
                            name="name"
                            label="Yetkazib berish shahri"
                            placeholder="Shahar"
                            required
                            onAdd={openModalCitiesAdd}
                            options={dataCities?.results}
                            isLoading={isLoadingCities}
                            valueKey="id"
                            labelKey="name"
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
                            rows={4}
                        />
                        <div className="col-span-4 flex justify-end">
                            <Button
                                className="px-14"
                                icon={<Copy className="mr-1" size={18} />}
                            >
                                Nusxalash
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="space-y-2">
                    <h1>Logist ma'lumotlari</h1>
                    <div className="border border-input p-3 rounded-lg">
                        <FormCombobox
                            control={form.control}
                            name="name"
                            label="Logistni tanlang"
                            isLoading={isLoadinaUsers}
                            required
                            options={dataUsers?.results}
                            valueKey="id"
                            labelKey="full_name"
                        />
                    </div>
                </CardContent>
            </Card>

            <Button type="submit" className="sm:w-max w-full px-20 float-end">
                Saqlash
            </Button>
        </form>
    )
}

export default WholeLoad
