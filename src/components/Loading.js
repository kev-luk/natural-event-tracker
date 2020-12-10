import React from 'react'
import { ScaleLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className='loader'>
            <ScaleLoader
                color={'#0099ff'}
                height={40}
                width={8}
                radius={5}
                margin={6}
            />
            {/* <h1 className='loader-title'>Fetching Data</h1> */}
        </div>
    )
}

export default Loading
