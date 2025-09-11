import './App.css'
import Header from './components/header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <div>    
      <Header/>


    <section className='grid grid-cols-4 px-30 py-20 gap-5 '>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>

      <Footer/>
    </div>
     
  )
}

export default App
