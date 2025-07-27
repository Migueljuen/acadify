import Header from "@/components/ui/header"
export default async function pagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    )
}