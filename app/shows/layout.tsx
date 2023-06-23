export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex place-content-center">
      {children}
    </div>
  )
}
