import { useNavigate } from 'react-router-dom';
import errorSVG from '../../assets/request-error.svg';

export function UnderDevelopmentPage() {
  const navigate = useNavigate();

  return (
    <div className={'h-screen w-screen flex items-center justify-center flex-col gap-4'}>
      <img src={errorSVG} alt="Under development message" className="w-96 h-96" />
      <h1 className="text-white text-3xl font-bold text-center">
        A página que você buscou ainda está em desenvolvimento
      </h1>
      <button
        className="mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-violet-600 hover:bg-violet-700 transition-all duration-400"
        type="reset"
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
    </div>
  );
}
