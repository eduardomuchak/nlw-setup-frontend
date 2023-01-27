import { Header } from '../Header';

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={'w-screen h-screen bg-background'}>
      <Header />
      {children}
    </div>
  );
}
