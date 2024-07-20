import React from 'react'
import Layout from './Layout'

export default function Stacked_list_component() {

    const code=
        `
            <div className='display-flex flex-column gap-1  w-100-100'>
                <div className='display-flex flex-row justifyC-between'>
                    <div className='display-flex  gap-1'>
                        <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                            className='w-4 h-4 rounded-circle alignS-center' alt="logo"/>
                        <div className='display-flex flex-column justifyC-around'>
                            <h5 className='my-0'>Leslie Alexander</h5>
                            <h6 className='text-sissa my-0'>leslie.alexander@example.com</h6>
                        </div>
                    </div>
                        <div className='display-flex flex-column justifyC-around'>
                            <p className='my-0'>Co-Founder / CEO</p>
                            <h6 className='text-maria my-0'>Last seen 3h ago</h6>
                        </div>

                </div>
                <div className='w-100-100 h-0.1 bg-sissa opacity-30'></div>
                <div className='display-flex flex-row justifyC-between'>
                    <div className='display-flex  gap-1'>
                        <img src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                            className='w-4 h-4 rounded-circle alignS-center' alt="logo"/>
                        <div className='display-flex flex-column justifyC-around'>
                            <h5 className='my-0'>Michael Foster</h5>
                            <h6 className='text-sissa my-0'>michael.foster@example.com</h6>
                        </div>
                    </div>
                        <div className='display-flex flex-column justifyC-around'>
                            <p className='my-0'>Co-Founder / CEO</p>
                            <h6 className='text-maria my-0'>Last seen 3h ago</h6>
                        </div>

                </div>
                <div className='w-100-100 h-0.1 bg-sissa opacity-30'></div>
                <div className='display-flex flex-row justifyC-between'>
                    <div className='display-flex  gap-1'>
                        <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                            className='w-4 h-4 rounded-circle alignS-center' alt="logo"/>
                        <div className='display-flex flex-column justifyC-around'>
                            <h5 className='my-0'>Tom Cook</h5>
                            <h6 className='text-sissa my-0'>tom.cook@example.com</h6>
                        </div>
                    </div>
                        <div className='display-flex flex-column justifyC-around'>
                            <p className='my-0'>Director of Product</p>
                            <h6 className='text-maria my-0'>Last seen 1h ago</h6>
                        </div>

                </div>
            </div>

`

    const Ui = ()=>{
        return (
            <div className='display-flex flex-column gap-1  w-100-100'>
                <div className='display-flex flex-row justifyC-between'>
                    <div className='display-flex  gap-1'>
                        <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                            className='w-4 h-4 rounded-circle alignS-center' alt="logo"/>
                        <div className='display-flex flex-column justifyC-around'>
                            <h5 className='my-0'>Leslie Alexander</h5>
                            <h6 className='text-sissa my-0'>leslie.alexander@example.com</h6>
                        </div>
                    </div>
                        <div className='display-flex flex-column justifyC-around'>
                            <p className='my-0'>Co-Founder / CEO</p>
                            <h6 className='text-maria my-0'>Last seen 3h ago</h6>
                        </div>

                </div>
                <div className='w-100-100 h-0.1 bg-sissa opacity-30'></div>
                <div className='display-flex flex-row justifyC-between'>
                    <div className='display-flex  gap-1'>
                        <img src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                            className='w-4 h-4 rounded-circle alignS-center' alt="logo"/>
                        <div className='display-flex flex-column justifyC-around'>
                            <h5 className='my-0'>Michael Foster</h5>
                            <h6 className='text-sissa my-0'>michael.foster@example.com</h6>
                        </div>
                    </div>
                        <div className='display-flex flex-column justifyC-around'>
                            <p className='my-0'>Co-Founder / CEO</p>
                            <h6 className='text-maria my-0'>Last seen 3h ago</h6>
                        </div>

                </div>
                <div className='w-100-100 h-0.1 bg-sissa opacity-30'></div>
                <div className='display-flex flex-row justifyC-between'>
                    <div className='display-flex  gap-1'>
                        <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' 
                            className='w-4 h-4 rounded-circle alignS-center' alt="logo"/>
                        <div className='display-flex flex-column justifyC-around'>
                            <h5 className='my-0'>Tom Cook</h5>
                            <h6 className='text-sissa my-0'>tom.cook@example.com</h6>
                        </div>
                    </div>
                        <div className='display-flex flex-column justifyC-around'>
                            <p className='my-0'>Director of Product</p>
                            <h6 className='text-maria my-0'>Last seen 1h ago</h6>
                        </div>

                </div>
            </div>
    )
    }

    return (
        <Layout code={code} Ui = {Ui} title='Stacked list'/>
    )
}
