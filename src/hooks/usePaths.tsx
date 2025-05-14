import {
    LayoutDashboard,
    ListTodo,
    Logs,
    Package,
    ScrollText,
    Settings,
    Store,
    Users,
    UsersRound,
} from "lucide-react"
import { ReactNode } from "react"

export interface MenuItem {
    label: string
    icon?: ReactNode
    path: string
}

export const items: MenuItem[] = [
    {
        label: "Menu1",
        icon: <LayoutDashboard width={20} />,
        path: "/dashboard",
    },
    {
        label: "Menu2",
        icon: <Package width={20} />,
        path: "/products",
    },
    {
        label: "Menu3",
        icon: <Users width={20} />,
        path: "/sellers",
    },
    {
        label: "Menu4",
        icon: <UsersRound width={20} />,
        path: "/customers",
    },
    {
        label: "Menu5",
        icon: <ListTodo width={20} />,
        path: "/categories",
    },
    {
        label: "Menu6",
        icon: <Store width={20} />,
        path: "/my-products",
    },
    {
        label: "Menu7",
        icon: <Logs width={20} />,
        path: "/orders",
    },
    {
        label: "Menu8",
        icon: <ScrollText width={20} />,
        path: "/applications",
    },
    {
        label: "Menu9",
        icon: <Settings width={20} />,
        path: "/settings",
    },
]
