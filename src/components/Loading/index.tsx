import { Jelly } from '@uiball/loaders';
import colors from 'tailwindcss/colors';
export function Loading() {
  return (
    <div className={'w-full h-96 flex items-center justify-center'}>
      <Jelly size={80} speed={0.9} color={colors.violet[500]} />
    </div>
  );
}
