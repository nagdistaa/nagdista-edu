import './App.scss'
import NavBar from './components/navbar/NavBar'
import WebsiteDesign from './websiteDesign/WebsiteDesgin'

function App() {
  return (
    <div className='container'>
   <NavBar/>
   <div className="materials">
   <WebsiteDesign/>
  </div>
    </div>
  )
}

export default App
