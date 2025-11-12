function SplitMessage({ message }) {
  if (!message) return null;
  return <div className="text-success small mt-1">{message}</div>;
}

export default SplitMessage;