import React from 'react'
import Layout from './Layout'

export default function Badge_component() {

    const code=
        `
<div className='display-flex w-100-100 justifyC-center gap-1'>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-primary position-relative'>
                    Badge
                    <div className='bg-danger w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-secondary position-relative'>
                    Badge
                    <div className='bg-warning w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-akram position-relative'>
                    Badge
                    <div className='bg-sissa w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-sissa position-relative'>
                    Badge
                    <div className='bg-info w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-info position-relative'>
                    Badge
                    <div className='bg-maria w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-success position-relative'>
                    Badge
                    <div className='bg-info w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
</div>
`

    const Ui = ()=>{
        return (
            <div className='display-flex w-100-100 justifyC-center gap-1'>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-primary position-relative'>
                    Badge
                    <div className='bg-danger w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-secondary position-relative'>
                    Badge
                    <div className='bg-warning w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-akram position-relative'>
                    Badge
                    <div className='bg-sissa w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-sissa position-relative'>
                    Badge
                    <div className='bg-info w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-info position-relative'>
                    Badge
                    <div className='bg-maria w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
                <div className='display-inline-block text-base p-0.5 rounded-xl font-normal bg-success position-relative'>
                    Badge
                    <div className='bg-info w-0.7 h-0.7 rounded-circle position-absolute top-0 right-0'></div>
                </div>
            </div>
        )
    }

    return (
        <Layout code={code} Ui = {Ui} title='Badges'/>
    )
}
