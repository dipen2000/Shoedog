import "./AddressModal.css";
import { useState } from "react";
import { useAddress } from "../../../context/addressesContext";
import { ACTIONS } from "../../../constants/actions";

const AddressModal = ({ setAddressModal }) => {
  const { addressDispatch } = useAddress();
  const [input, setInput] = useState({
    name: "",
    street: "",
    city: "",
    zip: null,
    state: "",
    country: "",
    mobile: null,
  });

  const formInputChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const addressFormSubmitHandler = (e) => {
    e.preventDefault();
    addressDispatch({ type: ACTIONS.ADD_ADDRESS, payload: { data: input } });
    setAddressModal(false);
  };

  return (
    <div className="flex-col modal-section-overlay justify-center-flex align-center-flex">
      <div className="flex-col gap-2 bord-3-black address-modal-container  container-box-shadow-purple-big">
        <div className="flex-row align-center-flex justify-space-between-flex">
          <h3>Add new Address</h3>
          <div
            className="modal-close-icon-container curs-point"
            onClick={() => setAddressModal(false)}
          >
            <i className="fa-solid fa-times modal-icon-color"></i>
          </div>
        </div>
        <div>
          <form onSubmit={addressFormSubmitHandler}>
            <div className="flex-col gap-1">
              <div className="flex-col bord-3-black address-modal-input-container gap-z-5">
                <span>Name</span>
                <input
                  className="address-modal-input"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  onChange={formInputChangeHandler}
                  required
                />
              </div>
              <div className="flex-col bord-3-black address-modal-input-container gap-z-5">
                <span>Street</span>
                <input
                  className="address-modal-input"
                  type="text"
                  placeholder="Enter your street"
                  name="street"
                  onChange={formInputChangeHandler}
                  required
                />
              </div>
              <div className="flex-col bord-3-black address-modal-input-container gap-z-5">
                <span>City</span>
                <input
                  className="address-modal-input"
                  type="text"
                  placeholder="Enter your city"
                  name="city"
                  onChange={formInputChangeHandler}
                  required
                />
              </div>
              <div className="flex-col bord-3-black address-modal-input-container gap-z-5">
                <span>Zip-code</span>
                <input
                  className="address-modal-input"
                  type="number"
                  placeholder="Enter your zip code"
                  name="zip"
                  onChange={formInputChangeHandler}
                  required
                />
                {String(input?.zip).length < 6 &&
                  input.zip != null &&
                  String(input?.zip).length != 0 && (
                    <span>Invalid zip code</span>
                  )}
              </div>
              <div className="flex-col bord-3-black address-modal-input-container gap-z-5">
                <span>State</span>
                <input
                  className="address-modal-input"
                  type="text"
                  placeholder="Enter your state"
                  name="state"
                  onChange={formInputChangeHandler}
                  required
                />
              </div>
              <div className="flex-col bord-3-black address-modal-input-container gap-z-5">
                <span>Country</span>
                <input
                  className="address-modal-input"
                  type="text"
                  placeholder="Enter your country"
                  name="country"
                  onChange={formInputChangeHandler}
                  required
                />
              </div>
              <div className="flex-col bord-3-black address-modal-input-container gap-z-5">
                <span>Mobile</span>
                <input
                  className="address-modal-input"
                  type="number"
                  placeholder="Enter your mobile no."
                  name="mobile"
                  onChange={formInputChangeHandler}
                  required
                />
                {String(input?.mobile).length < 10 &&
                  input?.mobile != null &&
                  String(input?.mobile).length != 0 && (
                    <span>Invalid mobile number</span>
                  )}
              </div>
              <div className="flex-row justify-center-flex align-center-flex">
                <button className="curs-point btn btn-primary-solid shoetube-btn-main">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { AddressModal };
