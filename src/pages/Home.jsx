import Server from '../components/Server'
import logo from "../assets/images/finallogo.png"
import chat from "../assets/images/chat.png"
import template from "../assets/images/folder.png"
import projects from "../assets/images/menu.png"
import stats from "../assets/images/chart.png"
import settings from "../assets/images/gear.png"
import updates from "../assets/images/question-mark.png"

const Home = () =>{
    return(
        <div className='h-screen w-screen m-0 flex bg-kodygrey text-white'>
            <section className='h-full w-1/4 p-4 grid '>
                <div className='grid'>
                    <div className='flex gap-4 items-center'>
                        <img src={logo} className='h-10' />
                        <h1 className='text-2xl'>KodyBot</h1>
                    </div>
                    <div className='grid gap-3 pl-4'>
                        <section className='flex gap-2'>
                            <img className='h-5 w-5' src={chat}/>
                            AI Chat Helper
                        </section>
                        <section className='flex gap-2'>
                            <img className='h-5 w-5' src={template}/>
                            Templates
                            <button className='bg-airf rounded-full h-5 w-16'>PRO</button>
                        </section>
                        <section className='flex gap-2'>
                            <img className='h-5 w-5' src={projects}/>
                            My Projects
                            <button className='bg-airf rounded-full h-5 w-16'>PRO</button>
                        </section>
                        <section className='flex gap-2'>
                            <img className='h-5 w-5' src={stats}/>
                            Statistics
                            <button className='bg-airf rounded-full h-5 w-16'>PRO</button>
                        </section>
                        <section className='flex gap-2'>
                            <img className='h-5 w-5' src={settings}/>
                            Settings</section>
                        <section className='flex gap-2'>
                            <img className='h-5 w-5' src={updates}/>
                            Updates & FAQ</section>
                    </div>
                </div>
                
                <div className=''>
                    <div className='bg-airf text-white p-2 rounded-2xl translate-y-10 h-40'>
                        <h1 className='text-lg'>Pro Plan</h1>
                        <p>Strengthen artificial<br/> intelligence: get plan!</p>
                        R118 / month
                        <button className='bg-white text-kodyblack rounded-full w-14 font-medium'>Get</button>
                    </div>
                    <button className='border-t-2 border-kodygrey translate-y-12'>Log out</button>
                </div>
            </section>
            <section className='h-full w-3/4 p-4'>
                <div className=' rounded-2xl bg-white h-full w-full'>
                    <Server/>
                </div>
            </section>
            
      </div>
    )
}

export default Home