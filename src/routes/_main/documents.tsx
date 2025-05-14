import PageLayout from "@/layouts/page-layout"
import { DocumentsPages } from "@/pages/documents"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main/documents")({
    component: () => (
        <PageLayout title="Hujjatlar">
            <DocumentsPages />
        </PageLayout>
    ),
})
