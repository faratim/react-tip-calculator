export default function InputBill({ bill, onBillChange }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={onBillChange}
      />
    </div>
  );
}
