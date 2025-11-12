import { useState } from "react";
import FriendTable from "./component/FriendTable";
import SplitForm from "./component/SplitForm";

function App() {
  const [friends, setFriends] = useState(["friend 1", "friend 2"]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState({});

  const addFriend = (name) => {
    if (!friends.includes(name)) {
      setFriends([...friends, name]);
    }
  };

  const handleSplit = (total, spender) => {
    const half = total / 2;
    const message =
      total === 0
        ? "All settled! No one owes anything."
        : spender === "You"
        ? `Friend owes you ₹${half}`
        : `You owe ₹${half}`;

    setMessages((prev) => ({ ...prev, [selectedFriend]: message }));
    setSelectedFriend(null);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold">🍽️ Split and Eat</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <FriendTable
                friends={friends}
                onAddFriend={addFriend}
                onSelectFriend={setSelectedFriend}
                messages={messages}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <SplitForm
                selectedFriend={selectedFriend}
                friends={friends}
                onSplit={handleSplit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
