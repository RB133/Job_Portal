import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
      <img width={160} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>© 2025 Rishit Bansal. All rights reserved.</p>
      <div className='flex gap-2.5'>
        <a href="https://github.com/RB133"><img width={38} src={assets.github_logo} alt="" /></a>
      </div>
    </div>
  )
}

export default Footer