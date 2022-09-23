import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContentPage from './components/ContentPage'
import Footer from './components/shared/Footer'
import PageNotFound from './components/shared/PageNotFound'
import LeftMenu from './components/shared/LeftMenu'
import RightContent from './components/shared/RightContent'
import Zomato from './components/zomato/Zomato'
import Navbar from './components/shared/Navbar'
import Settings from './components/shared/Settings'
import KanbanHome from './components/Kanban/KanbanHome'
import Search from './components/search/Search'

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <LeftMenu />
        <RightContent>
          <Navbar />
          <Routes>

            <Route
              path='/'
              element={
                <ContentPage />}></Route>
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
        </RightContent>

      </div>
      <Settings />
    </BrowserRouter>
  )
}

export default App
