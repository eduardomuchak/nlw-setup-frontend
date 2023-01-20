import { Check } from 'phosphor-react';
import { CheckboxWeekDay } from '../CheckboxWeekDay';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createHabit } from '../../services/habits';
function NewHabitForm() {
  const queryClient = useQueryClient();

  const [formValues, setFormValues] = useState({
    title: '',
    weekDays: [] as number[],
  });

  const mutation = useMutation({
    mutationFn: createHabit,
    onSuccess: () => {
      setFormValues({ title: '', weekDays: [] });
      window.alert('Hábito criado com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['habits'] });
    },
  });

  const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];

  const createNewHabit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValues.title === '' || !formValues.weekDays.length) return;

    mutation.mutate(formValues);
  };

  const handleToggleWeekDay = (weekDayIndex: number) => {
    const alreadySelected = formValues.weekDays.includes(weekDayIndex);

    if (alreadySelected) {
      const filteredWeekDays = formValues.weekDays.filter((item) => item !== weekDayIndex);
      setFormValues({ ...formValues, weekDays: filteredWeekDays });
    } else {
      setFormValues({ ...formValues, weekDays: [...formValues.weekDays, weekDayIndex] });
    }
  };

  return (
    <form onSubmit={(event) => createNewHabit(event)} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual o seu comprometimento?
      </label>
      <input
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir 8h, etc..."
        autoFocus
        onChange={(event) => setFormValues({ ...formValues, title: event.target.value })}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((weekDay, index) => (
          <CheckboxWeekDay
            key={`${index}-${weekDay}`}
            weekDay={weekDay}
            onCheckedChange={() => handleToggleWeekDay(index)}
          />
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-green-600 hover:bg-green-700 transition-all duration-400"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}

export default NewHabitForm;
