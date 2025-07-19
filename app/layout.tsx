import Header from "./components/header/header"
import Navigation from "./components/navigation/navigation"
import "./globals.css"
import UserToggle from "./components/userToggle/userToggle"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="py-2 px-4 border-b bg-white flex justify-between">
            <Navigation/>
            <UserToggle/>
          </div>
          <Header/>
          <div className="max-w-m pt-0 pb-20 pl-20 pr-20 flex justify-center">{children}</div>
        </main>
      </body>
    </html>
  )
}