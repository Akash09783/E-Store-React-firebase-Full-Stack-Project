
import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/MyContext'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'

const Home = () => {
    const context = useContext(MyContext)
    console.log(context)
  
  return (
   <Layout>
   <HeroSection/>
   <Filter/>
   <ProductCard/>
   </Layout>
  )
}

export default Home
