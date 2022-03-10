import { Link, Outlet } from 'react-router-dom'

/**
 * Outlet
 * render component dari child Route
**/

export default function About() {
  return (
    <>
      <h1>Route: Halaman About</h1>
      <Link to="/about/team">About Team Kami</Link>
      <Outlet />
    </>
  )
}