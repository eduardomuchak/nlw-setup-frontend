import { Plus, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import NewHabitForm from '../NewHabitForm';

function NewHabitButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-600 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-8" />
        <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-md hover:text-zinc-200 transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
            <X size={24} aria-label="Botão Fechar Modal" />
          </Dialog.Close>
          <Dialog.Title className="text-3xl leading-tight font-extrabold">Criar Hábito</Dialog.Title>
          <NewHabitForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewHabitButton;
