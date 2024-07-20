import React from 'react'
import Layout from './Layout'

export default function Card_component() {

    const code=
        `
<div className='display-flex alignI-center justifyC-center  w-100-100'>
                <div className='w-14 rounded-lg shadow-md-sissa gradient-to-right from-secondary to-akram display-flex flex-column alignI-center'>
                    <img className='w-50-100 shadow-md-sissa rounded-circle my-1' src='https://avatars.githubusercontent.com/u/35781319?s=400&u=56cdff3525d176607dea2d0782381d48833a23b7&v=4' alt='logo'/>
                    <h3 className='my-0'>Nouh Saiche</h3>
                    <p className='text-overline font-semibold text-sissa'>FullStack senior developer</p>
                </div>
</div>

`

    const Ui = ()=>{
        return (
            <div className='display-flex alignI-center justifyC-center  w-100-100'>
                <div className='w-14 rounded-lg shadow-md-sissa gradient-to-right from-secondary to-akram display-flex flex-column alignI-center'>
                    <img className='w-50-100 shadow-md-sissa rounded-circle my-1' src='https://avatars.githubusercontent.com/u/35781319?s=400&u=56cdff3525d176607dea2d0782381d48833a23b7&v=4' alt='logo'/>
                    <h3 className='my-0'>Nouh Saiche</h3>
                    <p className='text-overline font-semibold text-sissa'>FullStack senior developer</p>

                </div>
            </div>
    )
    }

    return (
        <Layout code={code} Ui = {Ui} title='Card Component'/>
    )
}
