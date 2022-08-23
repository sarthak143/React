import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContentPage from './components/ContentPage'
import Footer from './components/shared/Footer'
import PageNotFound from './components/shared/PageNotFound'
import LeftMenu from './components/shared/LeftMenu'
import RightContent from './components/shared/RightContent'
import Zomato from './components/zomato/Zomato'
import Navbar from './components/shared/Navbar'
import Todo from './components/todo/Todo'


function App() {
  return (
    <Router>
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
              path="/todo"
              element={<Todo />}
            />

            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Routes>
          <Footer />
        </RightContent>

      </div>
    </Router>
  )
}

export default App
