import { Button } from "@/components/ui/button"
import { ORDER_FILES } from "@/constants/api-endpoints"
import { useModal } from "@/hooks/useModal"
import { usePost } from "@/hooks/usePost"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import FormTextarea from "@/components/form/textarea"
import { usePatch } from "@/hooks/usePatch"
import FileUpload from "@/components/form/file-upload"

const DocumentCreate = ({
    current,
}: {
    current: OrderDocument | undefined
}) => {
    const id = useParams({ from: "/_main/_orders/order/$id" })
    const { closeModal, isOpen } = useModal("order-file-modal")
    const form = useForm<OrderDocument>()
    const queryClient = useQueryClient()
    const { mutate: cretaeMutate, isPending: isPendingCreate } = usePost(
        {
            onSuccess: () => {
                toast.success("Muvaffaqiyatli yaratildi")
                queryClient.invalidateQueries({
                    queryKey: [ORDER_FILES],
                })
                closeModal()
                form.reset()
            },
        },
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        },
    )

    const { mutate: updateMutate, isPending: isPendingUpdate } = usePatch(
        {
            onSuccess: () => {
                toast.success("Muvaffaqiyatli yangilandi")
                queryClient.invalidateQueries({
                    queryKey: [ORDER_FILES],
                })
                closeModal()
                form.reset()
            },
        },
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        },
    )

    const onSubmit = (data: OrderDocument) => {
        const formData = new FormData()
        formData.append("file", data.file)
        formData.append("order", id?.id)
        formData.append("description", data.description)
        if (current?.id) {
            updateMutate(`${ORDER_FILES}/${current?.id}`, formData)
        } else {
            cretaeMutate(ORDER_FILES, formData)
        }
    }
    useEffect(() => {
        if (current?.id) {
            form.reset({
                file: current?.file,
                description: current?.description,
            })
        }
    }, [current, isOpen, form])

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="w-full">
                <FileUpload
                required
                    control={form.control}
                    name="file"
                    label="Hujjat tanlang"
                    isPaste={false}
                />
            </div>
            <FormTextarea
                methods={form}
                name="description"
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

export default DocumentCreate
