import { NewtonsCradle } from '@uiball/loaders';
import colors from 'tailwindcss/colors';
export function Loading() {
  return (
    <div className={'w-full h-96 flex items-center justify-center'}>
      <NewtonsCradle size={70} speed={1.4} color={colors.violet[500]} />
    </div>
  );
}
