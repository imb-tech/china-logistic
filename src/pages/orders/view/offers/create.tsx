import { FormCombobox } from "@/components/form/combobox"
import { FormDatePicker } from "@/components/form/date-picker"
import { FormNumberInput } from "@/components/form/number-input"
import { FormSelect } from "@/components/form/select"
import { Button } from "@/components/ui/button"
import { OFFERS, STATION } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"
import { useModal } from "@/hooks/useModal"
import { usePatch } from "@/hooks/usePatch"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export const currencyData = [
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
export const currencyName:{[key:number]:string} = {
    1: "USD",
    3: "UZS",
    2: "YUAN",
    4: "EURO",
    5: "RUB",
}

const OfferCreate = ({ current }: { current: Offers }) => {
    const [search, setSearch] = useState("")
    const { closeModal } = useModal("offers-modal")
    const form = useForm<OffersCreate>()
    const { data, isLoading } = useGet<StationsResults>(STATION, {
        params: { search, page_size: 50, page: 1 },
    })

    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePatch({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yuborildi")
            queryClient.refetchQueries({ queryKey: [OFFERS] })
            closeModal()
            form.reset()
        },
    })

    const onSubmit = (data: OffersCreate) => {
        cretaeMutate(`${OFFERS}/${current?.id}`, {
            ...data,
            status: 2,
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
            {!current?.station_name && (
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
