// import React, { useState } from 'react'
// import '.././App.css'

// function loadScript(src) {
// 	return new Promise((resolve) => {
// 		const script = document.createElement('script')
// 		script.src = src
// 		script.onload = () => {
// 			resolve(true)
// 		}
// 		script.onerror = () => {
// 			resolve(false)
// 		}
// 		document.body.appendChild(script)
// 	})
// }

// const __DEV__ = document.domain === 'localhost'

// function Payment() {
// 	const [name, setName] = useState('Mehul')

// 	async function displayRazorpay() {
// 		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

// 		if (!res) {
// 			alert('Razorpay SDK failed to load. Are you online?')
// 			return
// 		}

// 		const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
// 			t.json()
// 		)

// 		console.log(data)

// 		const options = {
// 			key: __DEV__ ? 'rzp_test_uGoq5ABJztRAhk' : 'PRODUCTION_KEY',
// 			currency: data.currency,
// 			amount: data.amount.toString(),
// 			order_id: data.id,
// 			name: 'Donation',
// 			description: 'Thank you for nothing. Please give us some money',
// 			// image: 'http://localhost:1337/logo.svg',
// 			handler: function (response) {
// 				alert(response.razorpay_payment_id)
// 				alert(response.razorpay_order_id)
// 				alert(response.razorpay_signature)
// 			},
// 			prefill: {
// 				name,
// 				email: 'saptak.bugatti20@gmail.com',
// 				phone_number: '7003425064'
// 			}
// 		}
// 		const paymentObject = new window.Razorpay(options)
// 		paymentObject.open()
// 	}

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				{/* <img src={logo} className="App-logo" alt="logo" /> */}
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a href='#'
// 					className="App-link"
// 					onClick={displayRazorpay}
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Donate $5
// 				</a>
// 			</header>
// 		</div>
// 	)
// }

// export default Payment