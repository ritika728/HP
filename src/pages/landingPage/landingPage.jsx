import './landingPage.css'
import Services from "../../Components/services/service";
import DrawerAppBar from "../../Components/navbar/navbar";
import { useState } from 'react';
import About from '../../Components/About/About';
import ContactUs from '../../Components/ContactUs/Contact'
function LandingPage() {
    const [navBg, setNavBg] = useState(false);
    const changeBackground = () => {
        if (window.scrollY>=75) {
            setNavBg(true);
        }
        else {
            setNavBg(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <>
            {
                navBg === true ? (
                    <>
                        <div className='ch'>
                            <DrawerAppBar />
                        </div>
                    </>

                ) : (
                    <>
                        <DrawerAppBar />
                    </>
                )
            }

            <Services />
            <About/>
            <ContactUs/>

        </>
    )
}
export default LandingPage;