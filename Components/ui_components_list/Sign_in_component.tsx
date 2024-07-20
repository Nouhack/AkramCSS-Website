import React from 'react'
import Layout from './Layout'

export default function Alert_component() {

    const code=
        `
<div className='display-flex justifyC-center gap-1 flex-colunm  w-100-100'>
        <form className='display-flex flex-column w-50-100'>
                    <img src='./logo.svg' className='w-40-100 alignS-center' alt="logo"/>
                    <h5 class='my-0.5'>Email</h5>
                    <input className='rounded-md border-info border-1 border-solid text-lg p-0.5 my-0'/>

                    <h5 class='my-0.5'>Password</h5>
                    <input  className='rounded-md border-info border-1 border-solid text-lg p-0.5 '/>

                    <button className='bg-info border-none p-0.5 rounded-md my-1 text-base hover:bg-akram cursor-pointer  duration-slow'>Sign In</button>
        </form>
</div>
`

    const Ui = ()=>{
        return (
            <div className='display-flex justifyC-center gap-1 flex-colunm  w-100-100'>
                <form className='display-flex flex-column w-50-100' action="">
                    <img src='./logo.svg' className='w-40-100 alignS-center' alt="logo"/>
                    <h5 className='my-0.5'>Email</h5>
                    <input className='rounded-md border-info border-1 border-solid text-lg p-0.5 my-0'/>

                    <h5 className='my-0.5'>Password</h5>
                    <input  className='rounded-md border-info border-1 border-solid text-lg p-0.5 '/>


                    <button className='bg-info border-none p-0.5 rounded-md my-1 text-base hover:bg-akram cursor-pointer  duration-slow'>Sign In</button>
                </form>
            </div>
    )
    }

    return (
        <Layout code={code} Ui = {Ui} title='Sign in form'/>
    )
}
