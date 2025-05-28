import { PropsWithChildren } from "react"

interface IButton {
    className: string
    _onClick: () => void
}

const Button = (props: PropsWithChildren<IButton>) => {
    return (
        <button className={`inline-flex py-4 px-4 items-center w-full my-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)] bg-Secondary ${props.className}`} onClick={() => props._onClick()}>
            {props.children}
        </button>
    )
}

export default Button
