export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen m-4">
      {children}
    </div >
  )
}
