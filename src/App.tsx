import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Posts from './pages/posts';
import Users from './pages/users'
import Post from './pages/post'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {
  const isAuth = false
  return <>{isAuth ? <Outlet /> : <Navigate to='/dashboard' />}</>
}

const RestrictedRoutes = () => {
  const isAuth = false
  return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard' />}</>
}

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Users />} />
      <Route element={<PrivateRoutes />} >
        <Route path='/dashboard' element={<Posts />} />
      </Route>
      <Route element={<RestrictedRoutes />} >
        <Route path='/login' element={<Post />} />
      </Route>
    </Routes>
  )
}

export default App
