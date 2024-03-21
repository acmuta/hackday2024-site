import { iceland } from "../components/ui/fonts";
import NavBar from "../components/AfterLoginNavBar";
export default function UnauthorizedPage() {
    return (
        <div>
            <NavBar />
            <div className="md:h-[720px] h-[400px] flex flex-row justify-center items-center">

                <p className={`${iceland.className} text-white text-3xl `}>You are not authorized to view this page.</p>

            </div>
       
        </div>
    );
    }