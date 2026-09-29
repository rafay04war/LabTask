// SignUpForm.jsx
// The login/sign-up form (username, password, submit)

function SignUpForm({ username, password, rememberMe, onUsernameChange, onPasswordChange, onRememberChange, onSubmit }) {
  return (
    <div className="form-card">
      <h1 className="form-title">LOGIN</h1>

      <form onSubmit={onSubmit}>
        <label className="field-label" htmlFor="username">
          User Name
        </label>
        <div className="input-wrap">
          <span className="input-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </span>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
            autoComplete="username"
          />
        </div>

        <label className="field-label" htmlFor="password">
          Password
        </label>
        <div className="input-wrap">
          <span className="input-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M17 9h-1V7a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-6 0V7a1 1 0 0 1 2 0v2h-2z" />
            </svg>
          </span>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            autoComplete="current-password"
          />
        </div>

        <div className="form-row">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <div className="form-links">
            <label className="remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => onRememberChange(e.target.checked)}
              />
              <span>Remeber me</span>
            </label>
            <a href="#forgot" className="forgot-link">
              Forgot Password ?
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
