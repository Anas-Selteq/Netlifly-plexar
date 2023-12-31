import React, { useEffect } from "react";
import "./dashboardpages.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getallgenders, getuserdataafterlogin, resendotpmobile, sendgender, sendotpsecondary } from "../../Store/Auth/actions";

function Addgender() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [alluserdata, setAlluserdata] = useState("");
  const [selectedOption, setSelectedOption] = useState("1");
  const registersuccessId = useSelector(
    (state) => state.Auth?.registersuccessId
  );
  const getallgendersreducer = useSelector(
    (state) => state.Auth?.allgenders
  );
  const handleOptionChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
  };
  useEffect(() => {
    dispatch(
        getallgenders()
    );
    console.log("userrrrrr");
  }, []);

  const sendgenderrr = () =>{
    dispatch(
        sendgender({
        id: registersuccessId,
        genderId:  selectedOption,
        modifiedBy: registersuccessId,
        // history: history,
        // setIsLoading,
      })
    );
console.log("function hit")
  }
    console.log("--secondary email------------>", selectedOption);
  return (
    <div className="col-md-12  box_height_profile1" id="style-2">
      <h2>Add Gender</h2>

      <div className="col-md-12 px-0 pb-2 pt-3">
        <p className="mb-0 sub_text_color_account_alltext">Phone</p>
      </div>
      <select className="form-control" value={selectedOption} onChange={handleOptionChange}>
      {getallgendersreducer?.map((gender, index) => (
    <option key={gender.id} value={gender.id}>{gender.name}</option>
        ))}
 </select>
 <button className="btn btn-primary mt-4 px-5" onClick={sendgenderrr}> Save </button>
      

    </div>
  );
}

export default Addgender;
