import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

const CollegeSocial = () => {
  return (
    <div className='social'>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button href='https://www.facebook.com/pesce1962/' target='_blank'>
            <FacebookIcon />
          </Button>
          <Button href='https://www.linkedin.com/school/13419424/admin/' target='_blank'>
            <LinkedInIcon />
          </Button>
          <Button href='https://www.instagram.com/pesmandya/' target='_blank'>
            <InstagramIcon />
          </Button>
        </ButtonGroup>
    </div>
  )
}

export default CollegeSocial