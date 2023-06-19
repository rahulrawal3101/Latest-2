import { CssBaseline, Grid} from '@mui/material'
import './Home.css'
import Wrapper from '../Global/Wrapper'
import Header from '../Global/Header'
import MainCard from './MainCard'
import MainMiddle from './MainMiddleLeft'
import MainTruckArea from './MainTruckArea'
import Footer from './Footer'
import CompleteKYC from './pages/CompleteKYC'
import Recharge from '../Utils/Recharge'
import Order from '../Utils/Order'
import DashSecond from '../Utils/DashSecond';
import Tools from '../Utils/ChangingComp/Tools';
import Couriers from '../Utils/Couriers'

const MainActivity = ({pageHandler,setStateHandler}) => {
const pageStateHandler = (page)=>{
  setStateHandler(page)
}

                        // pagecliks
  if(pageHandler === "initial" || pageHandler === "Home"){
  return (
    <>
                                          <CssBaseline />
<Header title="Welcome AdelSocial!"/>

<Wrapper>
      <Grid container spacing={2}>
             <MainCard pageStateHandler={pageStateHandler}/>
             <MainMiddle/>
             <MainTruckArea/>
             <Footer/> 
      </Grid>
</Wrapper>
</>)
}

if(pageHandler === "Complete KYC"){
  return (
    <>
                                  <CssBaseline />
<Header title="Settings"/>

  <Wrapper>
               <Grid container spacing={2}>
                {/* these props holds the state for first time opening of the page by setting click and kyc click  */}
                         <CompleteKYC kyc={true} setting={false}/>
                         <Footer/>
                </Grid>
</Wrapper>

    </>
  )
}

   if( pageHandler === 'Recharge Now' ||  pageHandler === 'Wallet'){
           return(
           <>
    <CssBaseline />
 <Header title="Wallet"/>
 
<Wrapper>
<Recharge/>
</Wrapper>
    </>
    )
   }

   if( pageHandler === 'Order'){
           return(
           <>
    <CssBaseline />
 <Header title="Order"/>
 
<Wrapper>
<Order/>
</Wrapper>
    </>
    )
   }

   if(pageHandler === 'Dashboard'){
        return (
      <>
        <CssBaseline />
        <Header title="Dashboard" />
  
        <Wrapper>
            <DashSecond/>
        </Wrapper>     
      </>
    )
   }
    if(pageHandler === 'Tools'){
        return (
      <>
        <CssBaseline />
        <Header title="Tools" />
  
        <Wrapper>
            <Tools/>
        </Wrapper>     
      </>
    )
   }
   if(pageHandler === 'Courier'){
        return (
      <>
        <CssBaseline />
        <Header title="Courier" />
  
        <Wrapper>
            <Couriers/>
        </Wrapper>     
      </>
    )
   }
}

export default MainActivity