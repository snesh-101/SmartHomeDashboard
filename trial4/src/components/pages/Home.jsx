// import Devices from "/home/sumanyu301/Desktop/trial4/trial4/src/components/Devices.jsx";
// import Devices from "trial4\src\components\Devices.jsx"
import Devices from "../Devices";
import Sidebar from "../Sidebar";
import Temperature from "../Temperature";

function Home() {
  return (
    <>
      <div className="flex bg-blue-300 min-h-screen">
        <Sidebar />
        <Devices />
        {/* <Temperature /> */}
      </div>
    </>
  );
}

export default Home;
