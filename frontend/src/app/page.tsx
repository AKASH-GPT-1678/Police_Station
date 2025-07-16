import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { StaafDisplay } from "./staffcompoments/StaafDisplay";
export default function Home() {
  return (
 
    <div className="p-4 lg:p-8 flex flex-row gap-4
    ">
     <Sidebar/>
     <StaafDisplay/>
     
    </div>
  );
}
