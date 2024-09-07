export default function DisplayTotal({ bill, service1, service2 }) {
  const tip = bill * ((service1 + service2) / 2 / 100);
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
