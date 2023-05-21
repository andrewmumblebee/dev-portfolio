export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="h-screen bg-white grid place-items-center">{children}</div>
  )
}
