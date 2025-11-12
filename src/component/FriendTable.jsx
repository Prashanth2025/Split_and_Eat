import SplitMessage from "./SplitMessage";

function FriendTable({ friends, onAddFriend, onSelectFriend, messages }) {
  const handleAdd = () => {
    const name = prompt("Enter friend's name:");
    if (name && !friends.includes(name.trim())) {
      onAddFriend(name.trim());
    }
  };

  return (
    <table className="table table-hover align-middle">
      <tbody>
        {friends.map((friend, i) => (
          <tr key={i}>
            <td style={{ width: "50px" }}>
              <img
                src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon.jpg"
                alt="avatar"
                className="rounded-circle"
                width="40"
              />
            </td>
            <td className="fw-semibold">
              {friend}
              <SplitMessage message={messages[friend]} />
            </td>
            <td>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => onSelectFriend(friend)}
              >
                Split
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">
            <button className="btn btn-success w-100" onClick={handleAdd}>
              ➕ Add Friend
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default FriendTable;
