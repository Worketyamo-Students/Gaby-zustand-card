import React from "react"

function Form(){
    return(
        <>
        <form action="" className="h-[25rem] w-[60%]">
      <div className="text-center text-gray-800 text-[1.2rem] font-semibold my-[1rem]">
      <label htmlFor="user">UserId</label></div>
      <input type="text" name="user" id="user" className="h-[2.5rem] w-full border-[1.5px] rounded-[2px]" placeholder="enter User id"/><br />
      <div className="text-center text-gray-800 text-[1.2rem] font-semibold my-[1rem]">
      <label htmlFor="user">Id</label></div>
      <input type="number" name="user" id="user" className="h-[2.5rem] w-full border-[1.5px] rounded-[2px]" placeholder="enter Id"/><br />
      <div className="text-center text-gray-800 text-[1.2rem] font-semibold my-[1rem]">
      <label htmlFor="user">Title</label></div>
      <input type="text" name="user" id="user" className="h-[2.5rem] w-full border-[1.5px] rounded-[2px]" placeholder="enter Title"/><br />
      <div className="text-center text-gray-800 text-[1.2rem] font-semibold my-[1rem]">
      <label htmlFor="user">Body</label></div>
      <textarea name="Body" id="" className="h-[6.5rem] w-full border-[1.5px] rounded-[2px]" placeholder="enter Body"></textarea><br />
      <div className="flex justify-center my-[1rem] ">
      <button className="h-[3rem] bg-blue-700 text-[1.5rem] font-medium text-white rounded-[2px] w-[18rem]">Submit</button></div>
    </form>
        </>
    );
}
export default Form