import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { List, X } from 'phosphor-react';

import logo from '../../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.info('Você saiu da sua conta!');
    localStorage.removeItem('@User');
    navigate('/');
  };

  return (
    <Popover className="relative bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <img src={logo} alt="Habits logo" className="h-12 w-auto" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="border border-violet-500 font-semibold rounded-lg px-2 py-2 flex items-center hover:bg-violet-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background">
              <List className="h-6 w-6" aria-hidden="true" color="white" />
            </Popover.Button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Link to="/" className="text-base font-medium text-white hover:text-violet-300">
              Início
            </Link>
            <Link to="/habits-list" className="text-base font-medium text-white hover:text-violet-300">
              Lista de Hábitos
            </Link>
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <button
              className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:bg-violet-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
              onClick={() => handleLogout()}
            >
              Sair
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img src={logo} alt="Habits logo" className="h-12 w-auto" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-lg bg-violet-500 p-2 text-gray-400 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600">
                    <X className="h-6 w-6" aria-hidden="true" color={'white'} />
                  </Popover.Button>
                </div>
              </div>
              <nav className="flex flex-col items-end gap-y-8 mt-6 mr-4">
                <Link to="/" className="text-base font-medium text-white hover:text-violet-300">
                  Início
                </Link>
                <Link to="/habits-list" className="text-base font-medium text-white hover:text-violet-300">
                  Lista de Hábitos
                </Link>
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
