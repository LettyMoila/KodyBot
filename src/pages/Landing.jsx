import { Form, Link } from "react-router-dom"
import vid from "../assets/videos/objectss.mp4"
import bot from "../assets/images/finallogo.png"
import arrow from "../assets/images/up-right-arrow.png"
import Stepperdesign from "../components/Stepperdesign"

const Landing = () => {
return(
    <div className="h-screen w-screen flex">
        <section className="h-full w-3/4">
            <div className="flex justify-between p-2">
                <section className="flex">
                    <img src={bot} className="h-20 w-20"/>
                    <h1 className="align-middle text-airf text-3xl font-bold">KodyBot</h1>
                </section>
                <section className="flex gap-2">
                    <img src={arrow} className="h-5 w-5 align-middle"/>
                    <Link>help</Link>
                </section>
            </div>
            <div className="grid justify-center gap-3">
                <h1 className="text-2xl ">Ey, meet Kody!</h1>
                <p>Your coding buddy 24/7 throughout the year, please dive in.</p>
                <Stepperdesign/>
            </div>
        </section>
        <section className="h-full w-1/4 bg-vid">
            <video autoPlay loop typeof="video/mp4" src={vid} className="h-full w-screen">
                <h1>sign in</h1>
            </video>
        </section>

    </div>
)
}

export default Landing