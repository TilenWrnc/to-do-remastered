import { ListChecks } from 'lucide-react';

const NavBar = () => {
    return ( 
        <div className="flex justify-center text-5xl bg-gray w-full gap-x-5 mt-5 mb-10 font-bold">
            <ListChecks width={50} height={50} color='coral'/>
            <h1>
                To Do List
            </h1>
        </div>
     );
}
 
export default NavBar;