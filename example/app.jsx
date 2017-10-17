import React from 'react';
import {render} from 'react-dom';
// import applePay from '../src/applePay';
// import SimpleButton from '../payment-methods/apple-pay';
import applePay from '../payment-methods/apple-pay';



const SimpleButton = ( {children, onClick, style} ) =>
  <button style={style} onClick={onClick}>
    {children}

  </button>;


const applePayButtonStyles = {
	backgroundColor: "black",
	backgroundImage: "-webkit-named-image(apple-pay-logo-white)",
	backgroundSize: "100% 100%",
	backgroundOrigin: "content-box",
	backgroundRepeat: "no-repeat",
	width:"100%",
	height:"44px",
	borderRadius: "10px"
	// minHeight: "50px",
	// minWidth: "150px",
	// backgroundPosition: "center",
}
const App =()=>(<div style={{background:"grey"}}>
	<h1>Payment Methods</h1>
	<h3>Apple Pay</h3>
	{window.ApplePaySession ?
<SimpleButton style={applePayButtonStyles} onClick={applePay.startApplePay}/>
		 : <h4>Apple Pay not avalible. Only supported on mobile devices</h4>
	 }

</div>)
// If apple pay is supported render the apple pay button
if(applePay.canMakePayments()){
	render(<App/>,
		document.getElementById('app')
	);
}
