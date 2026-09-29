// MessageButton.jsx
// A simple button that shows a message when clicked

function MessageButton({ onShowMessage }) {
  return (
    <button type="button" className="message-btn" onClick={onShowMessage}>
      Show Message
    </button>
  )
}

export default MessageButton
