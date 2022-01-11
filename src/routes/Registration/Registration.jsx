export default function Login() {
  return (
    <div>
      <form method="post" autocomplete="on" className="form registartion_">
        <h3>Registration</h3>
        <section>
          <div className="form-field username-form-field">
            <label htmlFor="name">
              <h5>Name</h5>
            </label>
            <input type="text" placeholder="Name" required></input>
          </div>
          <div className="form-field password-form-field">
            <label htmlFor="password">
              <h5>Password</h5>
            </label>
            <input type="password" placeholder="Password" required></input>
          </div>
        </section>
        <section>
          <button type="submit">Register</button>
        </section>
      </form>
    </div>
  )
}
