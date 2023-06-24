export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="m-2 md:m-4">
      {children}
    </div>
  )
}
