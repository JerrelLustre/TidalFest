import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AppLayout({ children }) {
  return (
    <>
      <Header />
      <main className="h-screen">
        {children}
      </main>
      <Footer />
    </>

  )
}
