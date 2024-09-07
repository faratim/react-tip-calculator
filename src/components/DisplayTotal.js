export default function DisplayTotal({ bill, service }) {
  const tip = bill * (service / 100);
  const total = bill + tip;
  return (
    <div>
      <h1>
        {total > 0
          ? `You pay $${total} ($${bill} + $${tip} tip)`
          : "Please enter the bill and tip."}
      </h1>
    </div>
  );
}
