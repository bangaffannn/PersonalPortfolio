import Sidebar, { SidebarItem } from "./components/Sidebar";
import { HiHome } from "react-icons/hi2";
import { FaUser, FaChartPie, FaBuilding } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";

function App() {
  return (
    <>
      <Sidebar>
        <SidebarItem icon={<HiHome />} />
        <SidebarItem icon={<FaUser />} />
        <SidebarItem icon={<FaChartPie />} />
        <SidebarItem icon={<FaBuilding />} />
        <SidebarItem icon={<FaCodeBranch />} />
      </Sidebar>
    </>
  );
}

export default App;
