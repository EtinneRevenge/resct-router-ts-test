import { useEffect, useRef, useState } from 'react'
import styles from './App.module.scss'
import { Details } from './Details'



export function App() {

    const [details, setDetails] = useState({
        isLoading: true,
        title: 'null',
        description: '999',
        buttonText: 'Click',
    })

    const imgRef = useRef(null)

    const onClick = () => {
        if (!imgRef.current)
            return
        imgRef.current.style.borderRadius = '20px'
    }

    return (

        <div className={styles.layout}>
            <img ref={imgRef} src='/src/assets/Screenshot.png' />

            <br />

            <button onClick={onClick}> ref </button>

            {details.isLoading ? (<p>Loading...</p>) :
                <Details
                    qqq={details} fff={setDetails}
                />}
        </div>
    )
}


