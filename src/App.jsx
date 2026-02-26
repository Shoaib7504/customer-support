import { Suspense } from 'react'
import './App.css'
import CustomerTicket from './components/CustomerTicket'
import Footer from './components/footer'
import Navbar from './components/navbar'

const fetchData = async () => {
  const res = await fetch('/Data.json');
  return res.json()
}

function App() {
  const fetchPromise = fetchData()

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Suspense fallback="loading...">
          <CustomerTicket fetchPromise={fetchPromise}></CustomerTicket>
        </Suspense>

        <Footer></Footer>

      </div>
    </>
  )
}

export default App
