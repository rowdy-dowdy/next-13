export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='table w-full min-h-screen h-0'>
      <div className="table-cell w-full h-full">
        {children}
      </div>
    </div>
  )
}
