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
                <div className="sticky top-0  bg-background right-0 w-full z-50 ">
                    <Header />
                </div>
                <main className="flex xl:gap-2 px-4 md:px-6 pt-4   relative ">
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default MainLayout
