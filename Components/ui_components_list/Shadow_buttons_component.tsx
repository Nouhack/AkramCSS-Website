import React from 'react'
import Layout from './Layout'

export default function Shadow_buttons_component() {

    const code=

        `
<div className='display-flex gap-1'>
                <button className='bg-primary border-none p-1 text-base rounded-sm shadow-sm-primary hover:cursor-pointer'>Primary</button>
                <button className='bg-secondary border-none p-1 text-base rounded-sm shadow-sm-secondary hover:cursor-pointer'>Secondary</button>
                <button className='bg-info border-none p-1 text-base rounded-sm shadow-sm-info hover:cursor-pointer'>Info</button>
                <button className='bg-success border-none p-1 text-base rounded-sm shadow-sm-success hover:cursor-pointer'>Success</button>
                <button className='bg-warning border-none p-1 text-base rounded-sm shadow-sm-warning hover:cursor-pointer'>Warning</button>
                <button className='bg-danger border-none p-1 text-base rounded-sm shadow-sm-danger hover:cursor-pointer'>Danger</button>
                <button className='bg-sissa border-none p-1 text-base rounded-sm shadow-sm-sissa hover:cursor-pointer'>Sissa</button>
                <button className='bg-maria border-none p-1 text-base rounded-sm shadow-sm-maria hover:cursor-pointer'>Maria</button>
                <button className='bg-akram border-none p-1 text-base rounded-sm shadow-sm-akram hover:cursor-pointer'>Akram</button>
</div>

`

    const Ui = ()=>{
        return (
            <div className='display-flex gap-1'>
                <button className='bg-primary border-none p-1 text-base rounded-sm shadow-sm-primary hover:cursor-pointer'>Primary</button>
                <button className='bg-secondary border-none p-1 text-base rounded-sm shadow-sm-secondary hover:cursor-pointer'>Secondary</button>
                <button className='bg-info border-none p-1 text-base rounded-sm shadow-sm-info hover:cursor-pointer'>Info</button>
                <button className='bg-success border-none p-1 text-base rounded-sm shadow-sm-success hover:cursor-pointer'>Success</button>
                <button className='bg-warning border-none p-1 text-base rounded-sm shadow-sm-warning hover:cursor-pointer'>Warning</button>
                <button className='bg-danger border-none p-1 text-base rounded-sm shadow-sm-danger hover:cursor-pointer'>Danger</button>
                <button className='bg-sissa border-none p-1 text-base rounded-sm shadow-sm-sissa hover:cursor-pointer'>Sissa</button>
                <button className='bg-maria border-none p-1 text-base rounded-sm shadow-sm-maria hover:cursor-pointer'>Maria</button>
                <button className='bg-akram border-none p-1 text-base rounded-sm shadow-sm-akram hover:cursor-pointer'>Akram</button>
            </div>
    )
    }

    return (
        <Layout code={code} Ui = {Ui} title='Shadow Buttons'/>
    )
}
