import React from 'react'
import Layout from './Layout'

export default function Buttons_component() {

    const code=
` <div className='display-flex gap-1'>
                <button className='bg-primary border-none p-1 text-base rounded-sm hover:cursor-pointer'>Primary</button>
                <button className='bg-secondary border-none p-1 text-base rounded-sm hover:cursor-pointer'>Secondary</button>
                <button className='bg-info border-none p-1 text-base rounded-sm hover:cursor-pointer'>Info</button>
                <button className='bg-success border-none p-1 text-base rounded-sm hover:cursor-pointer'>Success</button>
                <button className='bg-warning border-none p-1 text-base rounded-sm hover:cursor-pointer'>Warning</button>
                <button className='bg-danger border-none p-1 text-base rounded-sm hover:cursor-pointer'>Danger</button>
                <button className='bg-sissa border-none p-1 text-base rounded-sm hover:cursor-pointer'>Sissa</button>
                <button className='bg-maria border-none p-1 text-base rounded-sm hover:cursor-pointer'>Maria</button>
                <button className='bg-akram border-none p-1 text-base rounded-sm hover:cursor-pointer'>Akram</button>
</div>
`

    const Ui = ()=>{
        return (
            <div className='display-flex gap-1'>
                <button className='bg-primary border-none p-1 text-base rounded-sm hover:cursor-pointer'>Primary</button>
                <button className='bg-secondary border-none p-1 text-base rounded-sm hover:cursor-pointer'>Secondary</button>
                <button className='bg-info border-none p-1 text-base rounded-sm hover:cursor-pointer'>Info</button>
                <button className='bg-success border-none p-1 text-base rounded-sm hover:cursor-pointer'>Success</button>
                <button className='bg-warning border-none p-1 text-base rounded-sm hover:cursor-pointer'>Warning</button>
                <button className='bg-danger border-none p-1 text-base rounded-sm hover:cursor-pointer'>Danger</button>
                <button className='bg-sissa border-none p-1 text-base rounded-sm hover:cursor-pointer'>Sissa</button>
                <button className='bg-maria border-none p-1 text-base rounded-sm hover:cursor-pointer'>Maria</button>
                <button className='bg-akram border-none p-1 text-base rounded-sm hover:cursor-pointer'>Akram</button>
            </div>
    )
    }

    return (
        <Layout code={code} Ui = {Ui} title='Normal Buttons'/>
    )
}
