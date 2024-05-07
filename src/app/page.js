import HowIam from "@/components/HowIam";
import Navbar2 from "@/components/Navbar2";
import Pag1 from "@/components/Pag1";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";


export default function Home() {
 
  return (
    <main>
    <Navbar2 />
    <Pag1 />
    <HowIam/>
    <Technologies/>
    <Projects/>
    </main>
  );
}
