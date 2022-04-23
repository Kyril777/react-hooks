import { useFormState } from 'react-use-form-state';

export default function RegistrationForm() {
  const [formState, { text, email, password }] = useFormState();
  return (
    <form onSubmit={() => console.log(formState)}>
      <input { ... text('name')} />
      <input { ... email('email')} required />
      <input { ... text('password')} required />
      <input { ... text('telephone')} />
    </form>
  );
}
