import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/ui/datatable"
import { useOffersColumns } from "./columns"
import { useParams } from "@tanstack/react-router"
import { OFFERS, OFFERS_SEND, USERS } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"
import { MultiCombobox } from "@/components/ui/multi-combobox"
import { useState } from "react"
import Modal from "@/components/custom/modal"
import OfferCreate from "./create"
import { useModal } from "@/hooks/useModal"
import { useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { usePost } from "@/hooks/usePost"

export const OffersPages = () => {
    const queryClient = useQueryClient()
    const [search, setSearch] = useState("")
    const [values, setValues] = useState([])
    const [current, setCurrent] = useState<Offers>()
    const { openModal } = useModal("offers-modal")
    const id = useParams({ from: "/_main/_orders/order/$id" })
    const { data: dataLogist, isLoading: isLoadingLogist } =
        useGet<CustomersTypeResults>(USERS, {
            params: { page_size: 50, role: 2, search },
        })
    const { data, isLoading } = useGet<OffersTypeResults>(
        `${OFFERS}/${id?.id}`,
        {
            options: { enabled: !!id.id },
        },
    )
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost({
        onSuccess: () => {
            toast.success("Muvaffaqiyatli taklif yuborildi")
            queryClient.invalidateQueries({ queryKey: [`${OFFERS}/${id?.id}`] })
            setValues([])
        },
    })

    const onSubmit = () => {
        cretaeMutate(OFFERS_SEND, {
            container: id.id,
            agents: values,
        })
    }

    const onOffer = (val: Offers) => {
        openModal()
        setCurrent(val)
        console.log(val)
    }

    const columns = useOffersColumns({ onOffer })

    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <h1 className="text-xl">Takliflar ro'yxati</h1>
                        <div className="flex items-center gap-3">
                            <MultiCombobox
                                isLoading={isLoadingLogist}
                                setValues={setValues}
                                values={values}
                                options={dataLogist?.results}
                                valueKey="id"
                                labelKey="full_name"
                                label="Logistni tanlang"
                                className={"min-w-[250px]"}
                                onSearchChange={(val) => setSearch(val)}
                            />
                            <Button
                                onClick={onSubmit}
                                type="button"
                                disabled={!values?.length || isPendingCreate}
                                loading={isPendingCreate}
                                className="whitespace-nowrap"
                            >
                                <Plus className="h-4 w-4" />
                                Qayta taklif yuborish
                            </Button>
                        </div>
                    </div>
                    <DataTable
                        columns={columns}
                        data={data?.results}
                        loading={isLoading}
                        numeration
                    />
                </CardContent>
            </Card>
            <Modal
                size="max-w-2xl"
                title={`${current?.agent.full_name} uchun taklifni to'ldiring`}
                modalKey="offers-modal"
            >
                {current?.id && <OfferCreate current={current} />}
            </Modal>
        </div>
    )
}
