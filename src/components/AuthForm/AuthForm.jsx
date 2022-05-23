import { useState } from 'react';

export default function AuthForm({ label, onSubmit, inputs = {} }) {
  // const useForm = (inputs = {}) => {
  // const [formState, setFormState] = useState(inputs);
  //
  // };
  const [formState, setFormState] = useState(inputs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;

    try {
      setError('');
      setLoading(true);
      await onSubmit(email, password);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>{label}</legend>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            required
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            minLength="8"
            required
            onChange={handleChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : label}
          </button>
          {error && <p>{error}</p>}
        </div>
      </fieldset>
    </form>
  );
}
