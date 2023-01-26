import SummaryTable from '../../components/SummaryTable';

import { PageContainer } from '../../components/PageContainer';
import { SummaryHeader } from '../../components/SummaryHeader';

export function SummaryPage() {
  return (
    <PageContainer>
      <div className={'w-full max-w-5xl h-[88%] px-6 flex flex-col gap-16 flex-1 items-center justify-center mx-auto'}>
        <SummaryHeader />
        <SummaryTable />
      </div>
    </PageContainer>
  );
}
