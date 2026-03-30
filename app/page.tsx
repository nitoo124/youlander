import ChooseUs from '@/components/ChooseUs'
import Contact from '@/components/Contact'
import FeaturesMarquee from '@/components/FeaturesMarquee'
import Hero from '@/components/Hero'
import Services from '@/components/OfferCard'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'

function page() {
  return (
    <div className='max-w-[90%] mx-auto'>
      <Hero/>
      <FeaturesMarquee/>
      <Services/>
      <ChooseUs/>
      <Contact/>
      <Portfolio/>
      <Testimonials/>
    </div>
  )
}

export default page