import { Header } from '../Header';

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={'w-screen h-screen flex justify-center items-center'}>{children}</div>
    </>
  );
}
