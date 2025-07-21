"use client"

import { useState } from "react";
import NavBar from "./components/nav-bar";
import SideBar from "./components/sidebar";
import Tasks from "./components/tasks";

export default function Home() {
  const [currentTasks, setCurrentTasks] = useState<"all" | "important">("all");

  return (
    <div>
      <NavBar/> 
      <div className="flex h-screen justify-center gap-40"> 
        <SideBar currentTasks={currentTasks} setCurrentTasks={setCurrentTasks}/>
        <Tasks currentTasks={currentTasks} setCurrentTasks={setCurrentTasks}/>
      </div>
    </div>
  );
}
