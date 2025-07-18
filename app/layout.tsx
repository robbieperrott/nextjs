import Header from "./components/header/header"
import Navigation from "./components/navigation/navigation"
import "./globals.css"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <main>
          <Navigation/>
          <Header/>
          <div className="max-w-m pt-0 pb-20 pl-20 pr-20 flex justify-center">{children}</div>
        </main>
      </body>
    </html>
  )
}