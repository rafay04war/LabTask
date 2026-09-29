// App.jsx
// Main component: puts everything together

import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import MessageButton from './components/MessageButton'
import LetConstDemo from './components/LetConstDemo'


function App() {
  // Form values
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  // Message shown on screen
  const [message, setMessage] = useState('')

  // Controls whether the LetConstDemo component is shown or hidden
  const [showDemo, setShowDemo] = useState(true)

  // Show a welcome message
  const showMessage = () => {
    setMessage('Welcome! Thanks for signing up.')
  }

  // Called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault() // stop the page from reloading
    setMessage('Account created for "' + (username || 'Guest') + '". Welcome aboard!')
  }

  return (
    <div className="page">
      {/* Right side: form + message button + demo */}
      <main className="main">
        <SignUpForm
          username={username}
          password={password}
          rememberMe={rememberMe}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
          onRememberChange={setRememberMe}
          onSubmit={handleSubmit}
        />

        <MessageButton onShowMessage={showMessage} />

        {message && <p className="message">{message}</p>}

        {/* Button to show/hide the LetConstDemo component */}
        <button
          type="button"
          className="message-btn toggle-btn"
          onClick={() => setShowDemo(!showDemo)}
        >
          {showDemo ? 'Hide Demo' : 'Show Demo'}
        </button>

        {/* Conditionally render the demo — removed from DOM when hidden */}
        {showDemo && <LetConstDemo />}
      </main>
    </div>
  )
}

export default App
