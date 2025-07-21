import AddButton from "./add-buttons";

interface SideBarProps {
    currentTasks : string,
    setCurrentTasks: React.Dispatch<React.SetStateAction<"all" | "important">>
}

const SideBar = ({ currentTasks, setCurrentTasks } : SideBarProps) => {

    return (
        <div>
            <div className="flex flex-col mt-50 ml-15 px-10 py-6 h-fit gap-y-7 bg-[#FAF9F6] rounded-4xl shadow-[0_30px_80px_rgba(0,0,0,0.35),_0_-15px_40px_rgba(0,0,0,0.15)]">
                <AddButton/>
                <div className="flex flex-col items-center gap-4 py-5">
                    <h1 className="bg-orange-300 w-80 rounded-md cursor-pointer text-center font-bold text-white p-1 hover:bg-orange-400" onClick={() => setCurrentTasks("all")}>ALL</h1>
                    <h1 className="bg-orange-300 w-80 rounded-md cursor-pointer text-center font-bold text-white p-1 hover:bg-orange-400" onClick={() => setCurrentTasks("important")}>IMPORTANT</h1>
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;
