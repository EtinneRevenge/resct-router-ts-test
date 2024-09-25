import { memo } from "react"
import { IDetails } from "./types"

interface Props {
    qqq: IDetails
    sss: () => void
}

export function InitialDetails({ qqq, sss }: Props) {



    return (
        <>

            <h1>{qqq.title}</h1>
            <div>{qqq.description}</div>
            <button onClick={sss}>
                {qqq.buttonText}
            </button>
        </>
    )
}

export const Details = memo(InitialDetails)

