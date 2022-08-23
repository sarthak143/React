import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContentPage from './components/ContentPage'
import Footer from './components/shared/Footer'
import LeftMenu from './components/shared/LeftMenu'
import RightContent from './components/shared/RightContent'
import Zomato from './components/zomato/Zomato'


function App() {
  return (
    <Router>
      <div className="wrapper">
        <LeftMenu />
        <RightContent>
          <Routes>

            <Route
              path='/'
              element={
                <ContentPage />}></Route>
            <Route
              path='/zomato'
              element={
                <Zomato />}></Route>
          </Routes>

          <Footer />
        </RightContent>

      </div>
    </Router>
  )
}

export default App
