import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './App.module.scss'
import { Details } from './Details'



export function App() {

    const [details, setDetails] = useState({
        isLoading: true,
        title: 'null',
        description: '999',
        buttonText: 'Click',
    })

    const loading = useCallback(() => {
        setDetails(prev => ({ ...prev, isLoading: !prev.isLoading }))
    }, [])

    const [count, setCount] = useState(0);
    const [multi, setMulti] = useState(10);

    const resault = useMemo(() => {
        return count * multi
    }, [count, multi]);

    return (

        <div className={styles.layout}>
            <img src='/src/assets/Screenshot.png' />

            <div> Res: {resault} </div>

            <button onClick={() => setCount(count + 1)}> x count </button>
            <button onClick={() => setMulti(multi + 10)}>x multi</button>

            {details.isLoading && <p>Loading...</p>}

            <Details
                qqq={details} sss={loading} />
        </div>
    )
}

