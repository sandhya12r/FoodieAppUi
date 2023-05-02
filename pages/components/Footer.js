import React from 'react'

function Footer() {
  return (
    <div className='flex-col gap-2 footer justify-content-center align-items-center'>
        <div className='w-100 flex-row justify-content-around align-items-start '>
            <div className='flex-col align-items-start justify-content-center gap-1'>
                <p className="level-2 strong">About</p>
                <p className="level-5 font-light">Contact Us</p>
                <p className="level-5 font-light">About Us</p>
                <p className="level-5 font-light">Careers</p>
                <p className="level-5 font-light">Pirvacy Policy</p>
            </div>
            <div className='flex-col align-items-start justify-content-center gap-1'>
                <p className="level-2 strong">Consumer Policy</p>
                <p className="level-5 font-light">Terms of Use</p>
                <p className="level-5 font-light">Security</p>
                <p className="level-5 font-light">Privacy</p>
            </div>
            <div className='flex-col align-items-start justify-content-center gap-1'>
                <p className="level-2 strong">Help</p>
                <p className="level-5 font-light">Payments</p>
                <p className="level-5 font-light">Delivery</p>
                <p className="level-5 font-light">FAQ</p>
            </div>
            <div className='flex-col align-items-start justify-content-center gap-1'>
                <p className="level-2 strong">Social</p>
                <p className="level-5 font-light">Instagram</p>
                <p className="level-5 font-light">Facebook</p>
                <p className="level-5 font-light">Reddit</p>
                <p className="level-5 font-light">Twitter</p>
            </div>
        </div>
        <p>Created By <span className='font-accent'>Sandhya Rani </span>| All Rights Reserved</p>
    </div>
  )
}

export default Footer
