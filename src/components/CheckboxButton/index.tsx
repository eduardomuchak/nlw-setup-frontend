import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export function CheckboxButton() {
  return (
    <Checkbox.Root className="flex items-center gap-3 group">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-violet-500 group-data-[state=checked]:border-violet-500 transition-all duration-400">
        <Checkbox.Indicator>
          <Check size={20} color="white" />
        </Checkbox.Indicator>
      </div>

      <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
        Academia
      </span>
    </Checkbox.Root>
  );
}
