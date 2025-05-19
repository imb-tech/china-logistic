import Select from "@/components/ui/select"
import { statusColor, statusOptions, statusText } from "."
import { useState } from "react"
import { useModal } from "@/hooks/useModal"
import { useTypedStoreData } from "@/hooks/useStoreData"

type Props = {
    row: OrderType
}

function OrderStatus({ row }: Props) {
    const { setStoreData } = useTypedStoreData<{status:string,id:number}>()
    const [status, setStatus] = useState(row.status)
    const { openModal } = useModal("order-status-modal")

    const handleClick = (val: string) => {
        setStatus(val)
        if (val) {
            setStoreData({ status: val, id: row.id })
            openModal()
        }
    }

    return (
        <div>
            <Select
                className={statusColor[status]}
                options={statusOptions.filter((option) => option.value !== "")}
                label={statusText[status] || "Tanlang"}
                value={status}
                setValue={(val) => handleClick(val.toString())}
            />
        </div>
    )
}

export default OrderStatus
