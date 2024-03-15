import React from 'react'
import './index.css'
const Industries = () => {
  return (
    <div className='industries-bg-container'>
      <h1 className='industries-heading'>Industries We are in</h1>
      <div className='industries-uls-container'>
        <ul className='industries'>
            <li className='indstries-list-element'>Academic And Scientific</li>
            <li className='indstries-list-element'>Media and Entertainment</li>
            <li className='indstries-list-element'>Electronics and Engineering</li>
            <li className='indstries-list-element'>Telecommunication</li>
            <li className='indstries-list-element'>Life sciences,Healthcare and pharma</li>
        </ul>
        <ul className='industries'>
            <li className='indstries-list-element'>Consulting</li>
            <li className='indstries-list-element'>Retail and trading</li>
            <li className='indstries-list-element'>Information technology and software</li>
            <li className='indstries-list-element'>Automotive</li>
            <li className='indstries-list-element'>Manufacturing and production</li>
        </ul>
        <ul className='industries'>
            <li className='indstries-list-element'>Financial services and insurence</li>
            <li className='indstries-list-element'>Aerospace and defence</li>
            <li className='indstries-list-element'>Medical Devices</li>
            <li className='indstries-list-element'>Energey utilites and Materials process</li>
            <li className='indstries-list-element'>Travel transportaion and logistics</li>
        </ul>
      </div>
    </div>
  )
}

export default Industries
