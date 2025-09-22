import { values } from '@/constants'
import React from 'react'

const ContactCard = () => {
  return (
    <div className='text-foreground drop-shadow-xl shadow-2xl p-6 w-[85%] max-w-96 pb-10 pt-10 bg-background mb-10 mt-10'>
        <h2 className='h2 text-foreground mb-5'>lets discuss your Project</h2>
        <p className='text-sm font-light text-secondary mb-6'>Ready to grow your online precence?  let's create a strategy that attracts and converts the right audience</p>
        <div>

            <div className='flex gap-2 flex-col justify-center items-center mb-5'>
                <div className='flex-none bg-secondary h-13 w-13 rounded-2xl'>{"icon"}</div>
                <div>
                    <p className=' text-secondary'>My Email:</p>
                    <a href={values.Contact.Email.link} className='hover:text-primary text font-semibold'>{values.Contact.Email.email}</a>
                </div>
            </div>
            <div className='flex gap-2 flex-col justify-center items-center'>
                <div className='flex-none bg-secondary h-13 w-13 rounded-2xl'>{"icon"}</div>
                <div>
                    <p className=' text-secondary'>Whatsapp Call:</p>
                    <a href={values.Contact.Whatsapp.link} className='hover:text-primary font-semibold'>{values.Contact.Whatsapp.phone}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCard