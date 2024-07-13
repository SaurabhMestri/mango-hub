import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="container">
      <div className="login-container">
      <h2>ApplicationForm</h2>
      <div className="form-group">
        <label htmlFor="">
          Full Name
          <input type="text" />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="Email">
          Email
          <input type="text" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="Phone No">
          Phone No
          <input type="text" />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="Address">
          Address
          <input type="text" />
        </label>
      </div>
      <div className="form-group">
        <label  htmlFor="mango variety">Mango quantity</label>
        <input className="count" type="number" />
        
      </div>
      <div className="form-group">
        <label htmlFor="mango variety">Mango Variety</label>
        <div className="select-list">
        <select name="" id="">
          <option className="" value="select">Select mango variety</option>
          <option value=" ">raju</option>
          <option value="">tanu</option>
        </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="mango variety">Mango Size</label>
        <div className="select-list">
        <select name="" id="">
          <option className="" value="select">Select Mango Size</option>
          <option value="">small(150-180g) </option>
          <option value="">medium(180-250g)</option>
          <option value="">medium(250-350g)</option>
        </select>
       
        </div>
      </div>
      <div className="submit-btn">
      <button className="btn">Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Register;
