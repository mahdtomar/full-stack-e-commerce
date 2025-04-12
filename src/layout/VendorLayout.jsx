import React from 'react'
import { Outlet } from 'react-router-dom'
import VendorNavbar from '../vendor/components/navbar/VendorNavbar'
import Footer from '../components/misc/footer/Footer'
import './scss/customerlayout.css'
const VendorLayout = () => {
  return (
    <div className="vendor-layout">
      <VendorNavbar />
      <div className="outlet-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default VendorLayout