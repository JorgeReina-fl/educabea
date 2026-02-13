export default function StudioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body style={{ margin: 0, padding: 0 }}>
                {children}
            </body>
        </html>
    )
}
