import {Link} from "react-router-dom"


export function BottomWarning({label,buttonText,to}){
    return <div className="py-2 text-sm font-medium flex justify-center">
        <div>
            {label}
        </div>
        <Link className="pointer undeline pl-1 cursor-pointer" to={to}>
          {buttonText}
        </Link>

    </div>
}