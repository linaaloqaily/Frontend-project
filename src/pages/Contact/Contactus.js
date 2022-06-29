import React from 'react'
import './Contactus.css'

function Contactus() {
  return (
<div className="container contact">
	<div className="row">
		<div className="col-md-3">
			<div className="contact-info ">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>
			</div>
		</div>
		<div className="col-md-9">
			<div className="contact-form">
				<div className="form-group">
				  <label className="control-label col-sm-2">Your Name:</label>
				  <div className="col-sm-10">          
					<input type="text" className="form-control" placeholder="Enter Your Name" name="fname"/>
				  </div>
				</div>
				<div className="form-group mt-2">
				  <label className="control-label col-sm-2">Email:</label>
				  <div className="col-sm-10">
					<input type="email" className="form-control" placeholder="Enter email" name="email"/>
				  </div>
				</div>
				<div className="form-group mt-2">
				  <label className="control-label col-sm-2">Comment:</label>
				  <div className="col-sm-10">
					<textarea className="form-control" rows="5"></textarea>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>

  )
}

export default Contactus