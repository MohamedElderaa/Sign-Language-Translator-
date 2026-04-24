import Hero from '../components/ourapp/Hero';
import Features from '../components/ourapp/Features';
import AppPreview from '../components/ourapp/AppPreview';
import CTA from '../components/ourapp/CTA';
import { AuthProvider } from '../Context.jsx';

export default function AppPage() {
  return (
    <div className="pt-16">

   

      <Hero />
      <Features />
      <AppPreview />
      <CTA />
    </div>
  );
}