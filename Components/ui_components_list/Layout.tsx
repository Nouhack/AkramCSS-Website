import React from 'react'
import {
  CodeBlock,
  CopyBlock,
  solarizedDark,
  monokai,
    dracula,
  shadesOfPurple,
    github,
    rainbow,
    nord,
    sunburst,
tomorrow,
    arta,
    monokaiSublime,
    codepen,
    ocean,
    far,
    googlecode,
    vs2015,
    paraisoLight,
    a11yLight
} from "react-code-blocks";

export default function Layout({code,Ui,title}: { code: string; Ui: any; title: string }) {
    const [show_code, setShow_code] = React.useState(false)
  return (

        <div className='w-100-100 m-1 overflowY-auto'>
        
            <div>
                <p className='font-bold'>{title}</p>
                <button className='bg-secondary font-semibold p-1 border-none rounded-sm' onClick={() => setShow_code(false)}>Component</button>
                <button className='bg-info mx-0 font-semibold p-1 border-none rounded-sm' onClick={() => setShow_code(true)}>Code</button>
            </div>
                        <div className='h-90-100'>

            {
                show_code ? 

                            <CopyBlock
                                style={{

                                }}
                                text={code}
                                language={"jsx"}
                                theme={nord}
                                showLineNumbers={false}
                                codeBlock
                                wrapLines
                            />

                        : 
                        <div className='h-100-100 display-flex justifyC-center alignI-center mt-2'>
                        <Ui/>

                        </div>
            }
            </div>
        </div>
    )
}
