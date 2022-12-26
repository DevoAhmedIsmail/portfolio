import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-6 fixed top-0 left-10 right-10 z-50'>
      <h3 className='text-2xl '>Ahmed Ismail</h3>
        {/* <div className='links hidden md:flex  justify-between gap-36'>
            <a href='#about' className=' transition duration-200 text-lg text-slate-400 hover:text-slate-200'>About</a>
            <a href='#portfolio' className=' transition duration-200 text-lg text-slate-400 hover:text-slate-200'>Portfolio</a>
            <a href='#contact' className=' transition duration-200 text-lg text-slate-400 hover:text-slate-200'>Contact</a>
        </div>
        <div className='block md:hidden'><i className="fa-solid fa-bars-staggered text-2xl cursor-pointer"></i></div> */}
    </nav>
  )
}

export default Navbar
