import  {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';


export const OrderForm = (props) => {
		const router = useRouter();

	const { register, handleSubmit, formState: { errors } } = useForm();
	const [name, setName] = useState('')
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [disableStatus, setDisableStatus] = useState(false);



	

	const onSubmit = async (data) => {

		setDisableStatus(true);
		
		setName(data.firstName )
		setEmail(data.email)
		setPhone(data.phone)

    
	
		//Send the form data as an email using Node.js and Nodemailer.
		const response = await fetch('https://apis.pharmmaex.com/extra-product-list', {
		  method: 'POST',
		  body: JSON.stringify({...data,totalPrices:props.totalPrices,productTable:props.cart}),
		  headers: {
			'Content-Type': 'application/json',
		  },
		});
		// const response = await fetch('http://localhost:5001/extra-product-list', {
		// 	method: 'POST',
		// 	body: JSON.stringify({...data,totalPrices:props.totalPrices,productTable:props.cart}),
		// 	headers: {
		// 	  'Content-Type': 'application/json',
		// 	},
		//   });
	  
          if (response.status === 200) {
            // Email sent successfully
            // alert('Order successful! Check your email for confirmation.');
		  			// Router.reload();
		  			router.push('/thank-you');

          } else {
            // Email sending failed
            alert('Order failed. Please try again later.');
		  			router.refresh();

          }
  
	
		};

	  
	return (
		<>
			<section id='registrationForm' className="registration-section orderForm ">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md 12 col-lg-12">
							
							<form className="free-registration-form" onSubmit={handleSubmit(onSubmit)}>
								<div className="form-box">
									<div className="form-item">
										<label htmlFor="fname">First Name:</label>
										<input type='text' {...register('firstName', { required: true })} placeholder="First Name" />
										{errors.firstName && <span className="error-message">First name is required</span>}

									</div>
									
									<div className="form-item">
										<label htmlFor="email">Enter Email:</label>
										<input type="text" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} name="email" placeholder="Enter Email" />
										{errors.email && errors.email.type === 'required' && <span className="error-message">Email is required</span>}
                    {errors.email && errors.email.type === 'pattern' && <span className="error-message">Invalid email format</span>}
									</div>
									<div className="form-item">
										<label htmlFor="phone">Phone Number:</label>
										<input type="number" id="phone" {...register('phone', { required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]+$/ })} name="phone" placeholder="Phone Number" min-length="10" maxLength="10" />
										{errors.phone && errors.phone.type === 'required' && <span className="error-message">Phone number is required</span>}
                    {errors.phone && errors.phone.type === 'minLength' && <span className="error-message">Phone number should be at least 10 digits</span>}
                    {errors.phone && errors.phone.type === 'maxLength' && <span className="error-message">Phone number should not exceed 10 digits</span>}
                    {errors.phone && errors.phone.type === 'pattern' && <span className="error-message">Invalid phone number</span>}
									</div>
									<div className="form-item">
										<label htmlFor="company">Company:</label>
										<input type="text" id="company" name="company"     {...register('company', { required: true })} placeholder="Company" />
										{errors.company && <span className="error-message">Company name is required</span>}

									</div>
									
								</div>

								<button disabled={disableStatus} type="submit" className="submit-reg-form">Submit Now</button>

							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
