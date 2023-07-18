import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const EmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
    setIsButtonDisabled(!isValidEmail(value) || password.length < 6);
  };

  const PasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    setIsButtonDisabled(!isValidEmail(email) || value.length < 6);
  };

  const handleLogin = () => {
    // Salvar o e-mail no estado global da aplicação
    dispatch({ type: 'setEmail', payload: email });
    // Mudar a rota para /carteira
    navigate('/carteira');
  };

  return (
    <div>
      <h1>
        Trybe
        <span>Wallet</span>
      </h1>
      <input
        type="email"
        placeholder="E-mail"
        data-testid="email-input"
        value={ email }
        onChange={ EmailChange }
      />
      <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        value={ password }
        onChange={ PasswordChange }
      />
      <button onClick={ handleLogin } disabled={ isButtonDisabled }>Entrar</button>
    </div>
  );
}

export default Login;
