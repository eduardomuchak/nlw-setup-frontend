import { RaceBy } from '@uiball/loaders';
import colors from 'tailwindcss/colors';
export function ModalLoading() {
  return (
    <div className={'w-full h-20 flex items-center justify-center'}>
      <RaceBy size={80} lineWeight={5} speed={1.4} color={colors.violet[500]} />
    </div>
  );
}
