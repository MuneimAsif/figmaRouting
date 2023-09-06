import { Link } from "react-router-dom"
export default function Navbar(){
    return <>
    
    <div>
  <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" className='fs-1 text-dark text-decoration-none' href="#">Tags:</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button className='btn2 ms-3' > <Link class="nav-link" to="/">Home</Link></button>
        </li>
        <li class="nav-item">
          <button className='btn2 ms-3' > <Link class="nav-link" to="/admin">admin</Link></button>
        </li>
        <li class="nav-item">
          <button className='btn2 ms-3' > <Link class="nav-link" to="/adminDashboard">adminDashboard</Link></button>
        </li>
        <li class="nav-item">
          <button className='btn2 ms-3' > <Link class="nav-link" to="/adminPanel">adminPanel</Link></button>
        </li>
        <li class="nav-item">
          <button className='btn2 ms-3' > <Link class="nav-link" to="/dashboard">dashboard</Link></button>
        </li>
        <li class="nav-item">
          <button className='btn2 ms-3' > <Link class="nav-link" to="/dashboardUi">dashboard ui</Link></button>
        </li>
        <li class="nav-item">
          <button className='btn2 ms-3' > <Link class="nav-link" to="/foodDelivery">food delivery</Link></button>
        </li>
        <li class="nav-item">
          <button className='btn2 ms-3' > <Link class="nav-link" to="/freeDesign">free design</Link></button>
        </li>
        <li class="nav-item">
          <button className='btn2 ms-3' > <Link class="nav-link" to="freeTemplates">free templates</Link></button>
        </li>
       </ul>
    </div>
  </div>
</nav>
  </div>

    </>
}