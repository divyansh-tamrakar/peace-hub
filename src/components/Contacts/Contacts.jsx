import React from 'react'
import '../Contacts/Contacts.css'
import TeamMembers from "../Data/TeamMember"
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const Contacts = () => {
  return (
    <div className='contact' id='contactId'>
      <div className='card'>
        {
          TeamMembers.map((members) => {
            return (
              <div className='card-items' key={members.id}>
                <div className="img-area">
                  <div className="inner-area">
                    <img src={members.img} alt="#" />
                  </div>
                </div>
                <h4>{members.name}</h4>
                <p>{members.about}</p>
                <ButtonGroup variant="text" aria-label="text button group" color='secondary'>
                  <Button  sx={{color
                :'#EBC7E8'}}><TwitterIcon /></Button>
                  <Button sx={{color
                :'#EBC7E8'}}><LinkedInIcon /></Button>
                  <Button sx={{color
                :'#EBC7E8'}}><EmailIcon /></Button>
                </ButtonGroup>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Contacts