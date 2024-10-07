"use client";
import { useState } from "react";

interface Task {
  task: string;
  desc: string;
}

export default function page() {

  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [main, setmain] = useState<Task[]>([]);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setmain([...main, { task, desc }]);
    settask("");
    setdesc("");
  };
  const deletehandle = (i:any)=>{
    let Delete = [...main]
    Delete.splice(i,1)
    setmain(Delete)
  }

  let renderTask: JSX.Element | JSX.Element[];

  if (main.length === 0) {
    renderTask = <h4 className="px-5 py-2 m-8 font-bold text-center text-2xl">No Task Available!</h4>;
  } else {
    renderTask = main.map((t, i) => {
      return (
        <div key={i} className="flex justify-between w-2/2">
          <h2 className="text-3xl m-8">{t.task}</h2> 
          <h3 className="text-2xl m-8">{t.desc}</h3>
          <button className="px-5 py-2 m-8 rounded-lg text-xl text-white font-bold bg-red-400 hover:bg-red-500" onClick={()=>{
            deletehandle(i)
          }}>Delete</button>
        </div>
      );
    });
  }
  
  return (
    <div>
      
      <header className="bg-white h-16 flex justify-center items-center gap-28">
        <h1 className="font-bold text-black text-4xl">TODO APP!</h1>
        <i className="font-bold text-blue-500 text-4xl">MUHAMMAD ARMAN &nbsp;</i>
      </header>

      <form className=" flex justify-center m-16" onSubmit={submitHandler}>
        <input
          className="text-2xl border-blue-400 border-4 rounded-lg px-4 py-2 m-8 text-black"
          type="text"
          placeholder="Enter Task Here"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <input
          className="text-2xl border-blue-400 border-4 rounded-lg px-4 py-2 m-8 text-black"
          type="text"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="px-5 py-2 m-8 rounded-lg text-xl text-white font-bold border-blue-300 border-4 hover:bg-sky-300">
          Add Task
        </button>
      </form>

      <div className="p-8 bg-blue-300">
        {renderTask}
      </div>

    </div>
  );
}
