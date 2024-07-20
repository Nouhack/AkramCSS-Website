import React from 'react'
import Layout from './Layout'

export default function Buttons_color_transition_component() {

    const code=
        `
<div className='display-flex gap-1'>
                <button className='bg-primary border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-secondary'>Primary</button>
                <button className='bg-secondary border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-primary'>Secondary</button>
                <button className='bg-info border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-akram'>Info</button>
                <button className='bg-success border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-danger'>Success</button>
                <button className='bg-warning border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-info'>Warning</button>
                <button className='bg-danger border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-success'>Danger</button>
                <button className='bg-sissa border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-warning'>Sissa</button>
                <button className='bg-maria border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-akram'>Maria</button>
                <button className='bg-akram border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-sissa'>Akram</button>
</div>

`

    const Ui = ()=>{
        return (
            <div className='display-flex gap-1'>
                <button className='bg-primary border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-secondary'>Primary</button>
                <button className='bg-secondary border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-primary'>Secondary</button>
                <button className='bg-info border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-akram'>Info</button>
                <button className='bg-success border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-danger'>Success</button>
                <button className='bg-warning border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-info'>Warning</button>
                <button className='bg-danger border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-success'>Danger</button>
                <button className='bg-sissa border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-warning'>Sissa</button>
                <button className='bg-maria border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-akram'>Maria</button>
                <button className='bg-akram border-none p-1 text-base rounded-sm hover:cursor-pointer transition-color duration-slow hover:bg-sissa'>Akram</button>
            </div>
    )
    }

    return (
        <Layout code={code} Ui = {Ui} title='Color transition buttons'/>
    )
}
