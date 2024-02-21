
import { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/MyContext'

const Home = () => {
    const context = useContext(MyContext)
    console.log(context)
  
  return (
   <Layout>
   <h1>Home</h1>
   </Layout>
  )
}

export default Home
