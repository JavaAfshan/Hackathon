import BestSelling from '@/components/bestSelling'
import Categories from '@/components/categories'
import FeaturedProducts from '@/components/featuredProducts'
import Hero from '@/components/hero'
import Promotion from '@/components/promotion'
import Services from '@/components/services'


export default function Home() {
  return (
    <div className=' mb-20'>
      <Hero/>
      <FeaturedProducts/>
      <Services/>
      <Promotion/>
      <Categories/>
      <BestSelling/>
    </div>
  )
}