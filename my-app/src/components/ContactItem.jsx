// ContactItem.jsx
// Shows ONE contact in the list (avatar + name + email)

function ContactItem({ contact, isSelected, onSelect }) {
  // Get initials from the name, e.g. "Alice Johnson" -> "AJ"
  const initials = contact.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <li>
      <button
        type="button"
        className={isSelected ? 'contact-item active' : 'contact-item'}
        onClick={() => onSelect(contact)}
      >
        <span className="avatar">{initials}</span>
        <span className="contact-info">
          <span className="contact-name">{contact.name}</span>
          <span className="contact-email">{contact.email}</span>
        </span>
      </button>
    </li>
  )
}

export default ContactItem
