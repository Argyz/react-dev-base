import { BrowserRouter, NavLink, Navigate, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <div className='main-layout'>
      <nav>
        <img src={logo} alt='React Logo' />
        <ul>
          <li>
            <NavLink to='/home' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
          </li>
          <li>
            <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        path: "/home",
        element: <h1>Home page</h1>
      },
      {
        path: "/about",
        element: <h1>about page</h1>
      },
      {
        path: "/users",
        element: <h1>Users page</h1>
      },
    ]
  },
  {
    path: "/*",
    element: <Navigate to="/home" replace={true} />
  }
])

export const RouterNavigation = () => {
  return (
    <RouterProvider router={router} />
  )
}
