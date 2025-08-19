import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ProductsSection from './components/Products/ProductsSection'
import StoresSection from './components/Stores/StoresSection'
import ContactSection from './components/Contact/ContactSection'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="main">
        {/* Hero Section */}
        <Hero />
        
        {/* Products Section */}
        <ProductsSection />
        
        {/* Stores Section */}
        <StoresSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}