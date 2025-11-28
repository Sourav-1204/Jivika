import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { ShopContext } from "../../context/context";

export default function AddAlert() {
  const { alert, setAlert, alertMsg, setAlertMsg } = useContext(ShopContext);
  function handleAlertDisplay() {
    console.log("clicked lulu vuttoiashas");
    setAlert(false);
    setAlertMsg("");
  }
  return (
    <div
      style={{ padding: "15px 10px", marginTop: "40px" }}
      className={`md:absolute fixed z-10 md:w-[30%] w-[80%] md:top-0 top-150 flex justify-between items-center gap-2 md:bg-[#8390ff] bg-[#80808086] text-[#230d7b] rounded-full ${
        alert ? "showAlert" : "hideAlert"
      }`}
    >
      <p className="w-[60%] text-center md:text-xl text-lg">{alertMsg}</p>
      <RxCross2
        className="w-[20%] text-2xl transform hover:scale-110 active:scale-95 transition-transform duration-200"
        onClick={handleAlertDisplay}
      />
    </div>
  );
}
