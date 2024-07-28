
import Home from './pages/Home';
import Read from './pages/Read';
import About from './pages/About';
import ProductForm from './components/ProductForm';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/404';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route path='/' element={<Home />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/create' element={<ProductForm edit={false} />} />
          <Route path='/edit' element={<ProductForm edit={true} />} />
          <Route path='/datatable' element={<Dashboard />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;

/// MARK: configure MainLayout for Navbar and Footer codition
function MainLayout(){
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}