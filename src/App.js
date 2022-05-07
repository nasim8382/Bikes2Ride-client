import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound'; 
import Services from './Pages/Services/Services';
import Team from './Pages/Team/Team';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import SignUp from './Pages/Login/SignUp/SignUp';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AllProducts from './Pages/AllProducts/AllProducts';
import UpdateStock from './Pages/UpdateStock/UpdateStock';
import { useEffect, useState } from 'react';
import spinner from '../src/images/spinner1.gif';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true);
    setTimeout( () => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <div className='main-body'>
      {
        loading ? 
        <div className='container home-loader'>
          <img src={spinner} alt="" />
        </div>
        : <>
        <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <UpdateStock></UpdateStock>
          </RequireAuth>
        }></Route>
        <Route path="/manageitems" element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path="/additems" element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
        </>
      }
    </div>
  );
}

export default App;
