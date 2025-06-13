import { FormNumberInput } from "@/components/form/number-input"
import { FormSelect } from "@/components/form/select"
import { Button } from "@/components/ui/button"
import { ORDER_EXPENSE, USERS } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"
import { useModal } from "@/hooks/useModal"
import { usePost } from "@/hooks/usePost"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { FormCombobox } from "@/components/form/combobox"
import FormTextarea from "@/components/form/textarea"
import { currencyData } from "../offers/create"
import { usePatch } from "@/hooks/usePatch"

const ToatalCostCreate = ({ current }: { current: Expanse | undefined }) => {
    const id = useParams({ from: "/_main/_orders/order/$id" })
    const [search, setSearch] = useState("")
    const { closeModal } = useModal("total-cost-modal")
    const form = useForm<Expanse>()
    const { data, isLoading } = useGet<CustomersTypeResults>(USERS, {
        params: { page_size: 50, role: 2, search: search },
    })

    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yaratildi")
            queryClient.invalidateQueries({
                queryKey: [ORDER_EXPENSE],
            })
            closeModal()
            form.reset()
        },
    })

    const { mutate: updateMutate, isPending: isPendingUpdate } = usePatch({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli yangilandi")
            queryClient.invalidateQueries({
                queryKey: [ORDER_EXPENSE],
            })
            closeModal()
            form.reset()
        },
    })

    const onSubmit = (data: Expanse) => {
        if (current?.id) {
            updateMutate(`${ORDER_EXPENSE}/${current?.id}`, {
                ...data,
                order: id?.id,
            })
        } else {
            cretaeMutate(ORDER_EXPENSE, {
                ...data,
                order: id?.id,
            })
        }
    }
    useEffect(() => {
        form.reset({
            agent: current?.agent,
            amount: current?.amount,
            currency: current?.currency,
            reason: current?.reason,
        })
    }, [current, id, form])

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-3"
        >
            <FormNumberInput
                control={form.control}
                name="amount"
                label="Narx"
                wrapperClassName="md:col-span-2"
            />
            <FormCombobox
                isLoading={isLoading}
                options={data?.results}
                valueKey="id"
                labelKey="full_name"
                control={form.control}
                name={`agent`}
                label="Logist"
                onSearchChange={(val) => setSearch(val)}
            />
            <FormSelect
                control={form.control}
                label="Valyuta"
                name="currency"
                options={currencyData}
            />
            <FormTextarea
                methods={form}
                name="reason"
                label="Izoh"
                wrapperClassName="md:col-span-2"
            />

            <div className="flex justify-end col-span-full ">
                <Button
                    disabled={isPendingCreate || isPendingUpdate}
                    loading={isPendingCreate || isPendingUpdate}
                    type="submit"
                    className="px-12"
                >
                    {current?.id ? "Saqlash" : "Qo'shish"}
                </Button>
            </div>
        </form>
    )
}

export default ToatalCostCreate
