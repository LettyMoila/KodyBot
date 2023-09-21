import Stepper from "react-stepper-horizontal"
import { useState } from "react";

function UserDetails() {
    return <h2>User details</h2>;
  }
  
  function Payment() {
    return <h2>Payment information</h2>;
  }
  
  function Confirmation() {
    return <h2>Booking is confirmed</h2>;
  }

const Stepperdesign = () =>{
    const [ activeStep, setActiveStep ] = useState(0);

    const steps = [
        { title: 'User details', onClick: () => setActiveStep(0) },
        { title: 'Payment', onClick: () => setActiveStep(1) },
        { title: 'Booking confirmation', onClick: () => setActiveStep(2) },
      ];

      function getSectionComponent() {
        switch(activeStep) {
          case 0: return <UserDetails/>;
          case 1: return <Payment/>;
          case 2: return <Confirmation/>;
          default: return null;
        }
      }

    return(
        <div>
           <Stepper
                steps={steps}
                activeStep={activeStep}/>
                <form className="grid gap-4">
                    <div><label>Username</label></div>
                    <div>
                        <input className="rounded-full border-2 h-10 p-3" type="email" placeholder="example@gmail.com"/>
                    </div>
                    <div className="flex gap-2">
                        <input className="border-airf border-4" type="checkbox"/>
                        <p>I agree to</p>
                    </div>
                  
                </form>
                    <div className="p-5">
                        
                        { (activeStep !== 0 && activeStep !== steps.length - 1)
                            && <button className=" bg-airf h-10 w-40 rounded-full" onClick={ () => setActiveStep(activeStep - 1) }>Previous</button>
                        }
                        { activeStep !== steps.length - 1
                        && <button className=" bg-airf h-10 w-40 rounded-full" onClick={ () => setActiveStep(activeStep + 1) }>Next step</button>
                        }
                    </div>
        </div>
    )
}

export default Stepperdesign