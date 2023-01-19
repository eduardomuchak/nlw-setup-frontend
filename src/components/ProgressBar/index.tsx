import * as Progress from '@radix-ui/react-progress';

function ProgressBar() {
  {
    /* Exemplo de código de popover acessível sem utilizar o Radix UI:
          <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
            <div
              role={'progressbar'}
              aria-label={'Progresso de hábitos completados nesse dia'}
              aria-valuemin={0}
              aria-valuenow={75}
              aria-valuemax={100}
              className="h-3 rounded-xl bg-violet-600 w-3/4"
            />
          </div> */
  }
  return (
    <Progress.Root className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <Progress.Indicator className="h-3 rounded-xl bg-violet-600 w-3/4 hover:shadow-violet-900 shadow-md transition-all duration-400" />
    </Progress.Root>
  );
}

export default ProgressBar;
