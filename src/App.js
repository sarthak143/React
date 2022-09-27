import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage/Homepage'
import Footer from './components/shared/Footer'
import PageNotFound from './components/shared/PageNotFound'
import LeftMenu from './components/shared/LeftMenu'
import Zomato from './components/zomato/Zomato'
import Navbar from './components/shared/Navbar'
import Settings from './components/shared/Settings'
import KanbanHome from './components/Kanban/KanbanHome'
// import Search from './components/search/Search'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid">
        <div className="wrapper menuitem-active">
          <LeftMenu />
          <div className="content-page">

            <Routes>

              <Route
                path='/'
                element={
                  <Homepage />}></Route>
              <Route
                path='/zomato'
                element={
                  <Zomato />}></Route>
              <Route
                path="/Kanban"
                element={<KanbanHome />}
              />
              {/* <Route
              path="/search"
              element={<Search />}
            /> */}

              <Route
                path="*"
                element={<PageNotFound />}
              />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
      <Settings />
    </BrowserRouter>
  )
}

export default App
