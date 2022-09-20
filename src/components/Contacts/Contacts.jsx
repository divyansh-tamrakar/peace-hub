import React from 'react'
import '../Contacts/Contacts.css'
import TeamMembers from "../Data/TeamMember";

const Contacts = () => {
  return (
    <div className='contact' id='contactId'>
      <div className='card'>
        {
          TeamMembers.map((members) => {
            return (
              <div className='card-items' id={members.id}>
                <div className="img-area">
                  <div className="inner-area">
                    <img src={members.img} alt="#" />
                  </div>
                </div>
                <h4>{members.name}</h4>
                <p>{members.about}</p>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Contacts