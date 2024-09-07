import "../styles.css";
import DisplayTotal from "./DisplayTotal";
import InputBill from "./InputBill";
import InputService from "./InputService";
import ResetButton from "./ResetButton";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);

  function handleBillChange(event) {
    setBill(Number(event.target.value));
  }

  function handleReset() {
    setBill("");
    setService1(0);
    setService2(0);
  }

  return (
    <div>
      <InputBill bill={bill} onBillChange={handleBillChange} />
      <InputService service={service1} onServiceChange={setService1}>
        How did you like the service?
      </InputService>
      <InputService service={service2} onServiceChange={setService2}>
        How did your friend like the service?
      </InputService>
      {bill > 0 && (
        <>
          <DisplayTotal bill={bill} service1={service1} service2={service2} />
          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}
