import NavBar from "./NavBar";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className='mt-15 bg-transparent text-foreground'>
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}
