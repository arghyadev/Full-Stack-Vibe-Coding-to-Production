import { useEffect, useState } from 'react'

export function StopWatch() {
    const [seconds, setSeconds] = useState<number>(0)
    const [isRunning, setIsRunning] = useState<boolean>(false)

    useEffect(() => {

        if (isRunning) {
            const interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
            }, 1000)

            console.log("3. Effect")

            return () => clearInterval(interval)
        }
    }, [isRunning])
    
    console.log("1. Rendering")

    return (
        <div className='border rounded-md shadow-lg max-w-sm mx-auto p-4 jusitfy-center flex flex-col space-y-4 items-center'>
            {console.log("2. UI Paint")}
            <h1 className='text-3xl font-bold'>Timer: {seconds} seconds</h1>
            <div className='max-w-md flex space-x-6 items-center mt-6'>
                <button 
                    className={`p-2 rounded-md bg-blue-600 disabled:bg-blue-300 ${isRunning ? 'cursor-not-allowed' : 'cursor-pointer'} text-white`}
                    onClick={() => setIsRunning(true)}
                    disabled={isRunning}
                    >Start</button>
                <button 
                    className='p-2 rounded-md bg-red-600 cursor-pointer text-white'
                    onClick={() => setIsRunning(false)}
                    >Stop</button>
                <button 
                    className='p-2 rounded-md bg-green-600 cursor-pointer text-white'
                    onClick={() => {
                        setIsRunning(false)
                        setSeconds(0)}}
                    >Reset</button>
            </div>
        </div>
    )
}
