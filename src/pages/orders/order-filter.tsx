import { ParamCombobox } from "@/components/as-params/combobox"
import ParamDatePicker from "@/components/as-params/date-picker"
import { USERS } from "@/constants/api-endpoints"
import { useGet } from "@/hooks/useGet"
import { useState } from "react"

function OrderFilter() {
    const [search, setSearch] = useState<{ customer: string; agent: string }>({
        customer: "",
        agent: "",
    })
    const { data: dataUsers } = useGet<CustomersTypeResults>(USERS, {
        params: { page_size: 50, role: 3, search: search.customer },
    })
    const { data: dataLogist } = useGet<CustomersTypeResults>(USERS, {
        params: { page_size: 50, role: 2, search: search.agent },
    })

    return (
        <div className="flex items-center gap-3">
            <ParamCombobox
                options={dataUsers?.results || []}
                valueKey="id"
                labelKey="full_name"
                label="Mijoz ismi"
                paramName="customer"
                className="w-[200px]"
                onSearchChange={(val) =>
                    setSearch((prev) => ({ ...prev, customer: val }))
                }
            />
            <ParamCombobox
                options={dataLogist?.results || []}
                valueKey="id"
                labelKey="full_name"
                label="Logist ismi"
                paramName="agent"
                className="w-[200px]"
                onSearchChange={(val) =>
                    setSearch((prev) => ({ ...prev, agent: val }))
                }
            />
            <ParamDatePicker
                className="w-[200px]"
                placeholder="Yuklash sanasi"
            />
        </div>
    )
}

export default OrderFilter
