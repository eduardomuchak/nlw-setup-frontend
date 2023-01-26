import { useNavigate } from 'react-router-dom';
import errorSVG from '../../assets/404.svg';
import { PageContainer } from '../../components/PageContainer';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <div className={'flex items-center justify-center flex-col gap-4'}>
        <img src={errorSVG} alt="404 Error" className="w-96 h-96" />
        <h1 className="text-white text-3xl font-bold text-center">
          Eita! Acho que a página que você buscou não existe!
        </h1>
        <button
          className="mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-violet-600 hover:bg-violet-700 transition-all duration-400"
          type="reset"
          onClick={() => navigate('/')}
        >
          Voltar para página inicial
        </button>
      </div>
    </PageContainer>
  );
}
