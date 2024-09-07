import "../styles.css";
import DisplayTotal from "./DisplayTotal";
import InputBill from "./InputBill";
import InputService from "./InputService";
import ResetButton from "./ResetButton";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [service, setService] = useState(0);

  function handleBillChange(event) {
    setBill(Number(event.target.value));
  }

  function handleServiceChange(event) {
    setService(Number(event.target.value));
  }

  function handleReset() {
    setBill("");
    setService(0);
  }

  return (
    <div>
      <InputBill bill={bill} onBillChange={handleBillChange} />
      <InputService service={service} onServiceChange={handleServiceChange} />
      <InputService />
      <DisplayTotal bill={bill} service={service} />
      <ResetButton onReset={handleReset} />
    </div>
  );
}
