import {useState} from 'react';

function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameChange = e => { setValues({...values, firstName: e.target.value})};
  const handleLastNameChange = e => { setValues({...values, lastName: e.target.value})};
  const handleEmailChange = e => { setValues({...values, email: e.target.value})};

  const handleSubmit = e => {
    e.preventDefault();
    // if (values.firstName !== "" && values.lastName !== "" && values.email !== ""){
    if (values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className='registration-form' onSubmit={handleSubmit}>
        {submitted && valid ? <div className='success-msg'>Success, thanks for registering!</div>: null }
        <input 
          className='form-field' 
          type="text" 
          placeholder='First Name' 
          name='firstName' 
          value={values.firstName}
          onChange={handleFirstNameChange}
        />
        { submitted && !values.firstName ? <span>Please enter a first name</span> : null }

        <input 
          className='form-field' 
          type="text" 
          placeholder='Last Name' 
          name='lastName' 
          value={values.lastName}
          onChange={handleLastNameChange}
        />
        { submitted && !values.lastName ? <span>Please enter a last name</span> : null}

        <input 
          className='form-field' 
          type="text" 
          placeholder='Email' 
          name='email' 
          value={values.email}
          onChange={handleEmailChange}
        />
        { submitted && !values.email ? <span>Please enter an email</span> : null }
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
