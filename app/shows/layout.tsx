export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex place-content-center m-8">
      {children}
    </div>
  )
}
