import Header from "@/components/header"
import { ReactNode } from "@tanstack/react-router"

type Props = {
    children: ReactNode
    title?: string
    rigthChildren?: ReactNode
    leftChildren?: ReactNode
}

const PageLayout = ({
    title,
    children,
    leftChildren,
    rigthChildren,
}: Props) => {
    return (
        <div className="w-full">
            <div className="sticky top-0 right-0 w-full z-50 ">
                <Header
                    title={title}
                    leftChildren={leftChildren}
                    rigthChildren={rigthChildren}
                />
            </div>
            <main className="flex xl:gap-2 px-4 md:px-6 pt-4  relative ">
                {children}
            </main>
        </div>
    )
}

export default PageLayout
