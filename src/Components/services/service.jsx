// import './service.css';
import Alcohol from '../../assets/alcohol.png'
function Services(){
    return(
        <>
        <div id="SERVICES">
            <h1>TREATMENTS</h1>
            <p>Together we will!</p>
             <div className='services'>
            {
                   
                    <div className='service'>
                        <div className='boxx'>
                            <div className='ph'>
                                <img src={Alcohol} alt="im" />
                            </div>
                        </div>
                    </div>
                   
                
            }
            </div>
        </div>
        </>
    )
}
export default Services;