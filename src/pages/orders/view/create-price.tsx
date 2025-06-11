import { FormCombobox } from "@/components/form/combobox"
import { FormDatePicker } from "@/components/form/date-picker"
import { FormNumberInput } from "@/components/form/number-input"
import { FormSelect } from "@/components/form/select"
import { Button } from "@/components/ui/button"
import { OFFERS, OFFERS_FILL, STATION } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"
import { useModal } from "@/hooks/useModal"
import { usePost } from "@/hooks/usePost"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const currencyData = [
    {
        value: 1,
        label: "USD",
    },
    {
        value: 3,
        label: "UZS",
    },
    {
        value: 2,
        label: "YUAN",
    },
    {
        value: 4,
        label: "EURO",
    },
    {
        value: 5,
        label: "RUB",
    },
]

const OfferCreate = ({ current }: { current: Offers }) => {
    const id = useParams({ from: "/_main/_orders/order/$id" })
    const [search, setSearch] = useState("")
    const { closeModal } = useModal("offers-modal")
    const form = useForm<OffersCreate>()
    const { data, isLoading } = useGet<StationsResults>(STATION, {
        params: { search, page_size: 50, page: 1 },
    })

    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yuborildi")
            queryClient.invalidateQueries({ queryKey: [`${OFFERS}/${id?.id}`] })
            closeModal()
            form.reset()
        },
    })

    const onSubmit = (data: OffersCreate) => {
        cretaeMutate(`${OFFERS_FILL}/${current?.id}`, {
            ...data,
            agent_id: current.agent.id,
        })
    }

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-3"
        >
            <FormNumberInput
                control={form.control}
                name="price"
                label="Narxi"
            />
            <FormSelect
                control={form.control}
                label="Valyuta"
                name="currency"
                options={currencyData}
            />
            {!current?.station?.id && (
                <div className="sm:col-span-2">
                    <FormCombobox
                        isLoading={isLoading}
                        name="station"
                        control={form.control}
                        options={data?.results}
                        label="Stansiya"
                        labelKey="name"
                        valueKey="id"
                        onSearchChange={(val) => setSearch(val)}
                    />
                </div>
            )}
            <FormDatePicker
                control={form.control}
                name="start_date"
                label="Boshlanish sanasi"
                required
            />
            <FormDatePicker
                control={form.control}
                name="load_date"
                label="Yuklash sanasi"
                required
            />

            <div className="flex justify-end col-span-full ">
                <Button
                    disabled={isPendingCreate}
                    loading={isPendingCreate}
                    type="submit"
                    className="px-12"
                >
                    Tasdiqlash
                </Button>
            </div>
        </form>
    )
}

export default OfferCreate
