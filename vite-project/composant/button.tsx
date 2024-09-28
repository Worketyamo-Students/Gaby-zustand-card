import React from "react"



function Button(props:any){
    return(
        <>
              {/* <div className="flex justify-center my-[1rem] "> */}
              <button className="h-[3rem] bg-blue-700 text-[1.5rem] font-medium text-white rounded-[2px] w-[18rem]" onClick={props.onClick}>{props.title}</button>
        </>
    )
}

export default Button