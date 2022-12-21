import Navigationbar from './components/Navigationbar'
import Homepage from './pages/Homepage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import InterestCalculator from './pages/InterestCalculator'
import SwitchOffers from './pages/SwitchOffers'
import Contact from './pages/Contact'




function App() {


  return (

    <div>
      <BrowserRouter>
        <Navigationbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/interestcalculator' element={<InterestCalculator/>}/>
          <Route path='/switchoffers' element={<SwitchOffers/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
