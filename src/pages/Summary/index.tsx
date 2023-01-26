import { ListOfHabitsModal } from '../../components/ListOfHabitsModal';
import NewHabitModal from '../../components/NewHabitModal';
import SummaryTable from '../../components/SummaryTable';

import logo from '../../assets/logo.svg';
import { PageContainer } from '../../components/PageContainer';
import Header from '../../components/Header';

export function SummaryPage() {
  return (
    <PageContainer>
      <div className={'w-full max-w-5xl px-6 flex flex-col gap-16'}>
        <Header />
        <SummaryTable />
      </div>
    </PageContainer>
  );
}
