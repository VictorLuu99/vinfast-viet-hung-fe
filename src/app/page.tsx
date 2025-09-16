import { Header } from './components/Header/Header';
import { EventBannerCarousel } from './components/EventBanner/EventBannerCarousel';
import { Hero } from './components/Hero/Hero';
import { ProductsSection } from './components/Products/ProductsSection';
import { StoresSection } from './components/Stores/StoresSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <EventBannerCarousel />
      <Hero />
      <ProductsSection />
      <StoresSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
