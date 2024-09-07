export default function InputBill({ bill, onBillChange }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input type="text" value={bill} onChange={onBillChange} />
    </div>
  );
}
