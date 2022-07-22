import './service.css';
import Alcohol from '../../assets/alcohol.png'
import Drugg from '../../assets/drugg.jpg'
import Cigar from '../../assets/cigar.webp'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Services(){
    const navigate=useNavigate();
    return(
        
        <>
        <div id="SERVICES">
            <h1>TREATMENTS</h1>
            <p>Together we will!</p>
             <div className='services'>
            {
                   
                    <div className='service'>
                        <div className='boxx'>
                        <img src={Alcohol} height={200} alt="im" />
                            <div className='ph'>
                                
                                <Button onClick={()=>{
          }} variant="contained"  sx={{bgcolor:"#55d483",fontSize:"17px", marginTop:"15px", marginLeft:"50px"}} size="large">
                ALCOHOL ADDICTION
          </Button>
                            </div>
                            </div>
                            <div className='boxx'>
                            <img src={Drugg} height={200} alt="im" />
                            <div className='ph'>
                                
                                <Button onClick={()=>{ navigate("/login");
          }} variant="contained"  sx={{bgcolor:"#55d483",fontSize:"17px", marginTop:"15px", marginLeft:"50px"}} size="large">
                DRUG ADDICTION
          </Button>
          
                            </div>
                            </div>
                            <div className='boxx'>
                            <img src={Cigar} height={200} alt="im" />
                            <div className='ph'>
                               
                                <Button onClick={()=>{
          }} variant="contained"  sx={{bgcolor:"#55d483",fontSize:"17px", marginTop:"15px", marginLeft:"50px"}} size="large">
                CIGARETTE ADDICTION
          </Button>
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