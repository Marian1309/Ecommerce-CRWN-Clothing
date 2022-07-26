import { useState, useContext } from 'react';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase/Firebase';
import { Button } from '../button/Button';
import { FormInput } from '../form-input/FormInput';

import { UserContext } from '../../contexts/User.context';

import './SignInForm.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          alert('No user associated with this account, please sign up');
          break;
        case 'auth/wrong-password':
          alert('Incorrent password for email');
          break;
        case 'auth/weak-password':
          alert('Length of the password need have at least 6 characters');
          break;
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          onChange={handleChange}
          value={password}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign in</Button>
          <Button onClick={signInWithGoogle} buttonType='google'>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export { SignInForm };
