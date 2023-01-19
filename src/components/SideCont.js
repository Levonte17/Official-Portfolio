import React from 'react'
import { RiContactsBook2Fill } from "react-icons/ri";
import{Link} from 'react-router-dom';

function SideCont(props) {
  return (
    <div className='sidecontact'>
      <Link to="/contact-us">
                <div className='side'>
                    <RiContactsBook2Fill />
                </div>
            </Link>
    </div>
  )
}

export default SideCont;
