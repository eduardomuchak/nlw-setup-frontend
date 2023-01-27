import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { getWithExpiry, setWithExpiry } from '../../utils/handle-local-storage';
import { toast } from 'react-toastify';

export function LoginPage() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValues.email === '' || formValues.password === '') return;
    toast.success('Login realizado com sucesso!');
    sessionStorage.setItem('@User', JSON.stringify({ email: formValues.email }));
    navigate('/inicio');
  };

  return (
    <div className="w-screen h-screen bg-background flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col mx-auto">
          <img src={logo} alt="Habits logo" className="h-24 w-auto" />
          <h2 className="mt-6 text-center text-2xl font-semibold tracking-tight">Entre com a sua conta</h2>
        </div>
        <form className="mt-8 space-y-8" onSubmit={(event) => handleLogin(event)}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              value={formValues.email}
              onChange={(event) => setFormValues({ ...formValues, email: event.target.value })}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Digite o seu email"
              className="mt-1 px-6 py-4 rounded-md text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Senha</label>
            <input
              value={formValues.password}
              onChange={(event) => setFormValues({ ...formValues, password: event.target.value })}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Senha"
              className="mt-1 px-6 py-4 rounded-md text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox.Root className="flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed">
                <div className="w-5 h-5 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-violet-500 group-data-[state=checked]:border-violet-500 transition-all duration-400 group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background">
                  <Checkbox.Indicator>
                    <Check size={14} color="white" />
                  </Checkbox.Indicator>
                </div>

                <span className="text-white leading-tight">Lembrar de mim</span>
              </Checkbox.Root>
            </div>

            <div className="text-sm">
              <Link to="/recuperar-senha" className="text-white hover:text-violet-300">
                Esqueceu sua senha?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-violet-600 hover:bg-violet-700 transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:cursor-not-allowed disabled:bg-violet-900"
            disabled={formValues.email === '' || formValues.password === ''}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
