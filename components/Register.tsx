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
            <input type="email" />
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
          <label htmlFor="mango variety">Mango Variety</label>
          <div className="select-list">
            <select name="" id="">
              <option className="" value="select">
                Select mango variety
              </option>
              <option value=" ">Alphonso(Hapus)</option>
              <option value=" ">Devgad(Hapus)</option>
              <option value="">Totapuri</option>
              <option value="">Kesar</option>
              <option value="">Rajapuri</option>
              <option value="">Himsagar</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mango variety">Mango Size</label>
          <div className="select-list">
            <select name="" id="">
              <option className="" value="select">
                Select Mango Size
              </option>
              <option value="">Small(150-180g) </option>
              <option value="">Medium(180-250g)</option>
              <option value="">Large(250-350g)</option>
              <option value="">Extra-large(250-350g)</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mango variety">Mango Quantity</label>
          <div className="select-list">
            <select name="" id="">
              <option className="" value="select">
                Select mango variety
              </option>
              <option value=" ">1 Dozen</option>
              <option value=" ">2 Dozen</option>
              <option value=" ">3 Dozen</option>
              <option value=" ">4 Dozen</option>
              <option value=" ">5 Dozen</option>
              
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
