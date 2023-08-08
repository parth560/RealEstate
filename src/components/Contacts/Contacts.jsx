import React from 'react'
import './Contacts.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi'

const Contacts = () => {
  return (
    <section className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side*/}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy To Contact Us</span>
                <span className='secondaryText'>We are always ready to help and assist by providing the best service and provide a best place to live which can make your life better</span>
            
                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexColStart row">
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            {/* right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src='./contact.jpg' alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts