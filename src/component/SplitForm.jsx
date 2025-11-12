import { useState, useEffect } from "react";

function SplitForm({ selectedFriend, friends, onSplit }) {
  const [total, setTotal] = useState("");
  const [spender, setSpender] = useState("Who is paying?");

  useEffect(() => {
    if (selectedFriend) {
      setSpender(selectedFriend);
    }
  }, [selectedFriend]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(total);
    if (!selectedFriend || !amount || spender === "Who is paying?") {
      alert("Please fill all fields correctly!");
      return;
    }
    onSplit(amount, spender);
    setTotal("");
    setSpender("Who is paying?");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="mb-3">
        Split with{" "}
        <span className="text-primary">{selectedFriend || "....."}</span>
      </h5>
      <input
        type="number"
        className="form-control mb-3"
        placeholder="Enter total expense"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <select
        className="form-select mb-3"
        value={spender}
        onChange={(e) => setSpender(e.target.value)}
      >
        <option>Who is paying?</option>
        <option>You</option>
        {friends.map((f, i) => (
          <option key={i}>{f}</option>
        ))}
      </select>
      <button className="btn btn-primary w-100">💸 Split Expense</button>
    </form>
  );
}

export default SplitForm;
