import NewHabitModal from '../NewHabitModal';

export function SummaryHeader() {
  return (
    <div className={'w-full max-w-5xl px-6 flex flex-col gap-16'}>
      <div className={'w-full max-w-3xl mx-auto flex items-center justify-end'}>
        <div className="flex flex-row gap-2">
          <NewHabitModal />
        </div>
      </div>
    </div>
  );
}
