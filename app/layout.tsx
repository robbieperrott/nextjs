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
      <body>
        <main>
          <Navigation/>
            <Header/>
            <div className="content">{children}</div>
        </main>
      </body>
    </html>
  )
}