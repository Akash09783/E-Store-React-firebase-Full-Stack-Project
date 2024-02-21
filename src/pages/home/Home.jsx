
import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/MyContext'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonials/Testimonial'
import {useDispatch,useSelector} from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
const Home = () => {
const dispatch = useDispatch()
const cartItem = useSelector((state)=> state.cart)
    console.log(cartItem)
const addCart = ()=>{
  dispatch(addToCart("shirt"))
}
const deleteCart =()=>{
  dispatch(deleteFromCart("shirt"))
}
  
  return (
   <Layout>
   <div className='flex gap-5 justify-center p-5'>
    <button className='bg-gray-300' onClick={()=>addCart()}></button>
    <button className='bg-gray-300' onClick={()=>deleteCart()}></button>
   </div>
   <HeroSection/>
   <Filter/>
   <ProductCard/>
<Track/>
<Testimonial/>
   </Layout>
  )
}

export default Home
