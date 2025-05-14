import Header from "@/components/header"
import {
    createFileRoute,
    Outlet,
    useLocation,
    useNavigate,
} from "@tanstack/react-router"
import { useEffect } from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"

export const Route = createFileRoute("/_main")({
    component: MainLayout,
})

function MainLayout() {
    const pathname = useLocation().pathname
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate({ to: "/auth" })
        }
    }, [pathname])

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                    <Outlet />
            </SidebarInset>
        </SidebarProvider>
    )
}

export default MainLayout
