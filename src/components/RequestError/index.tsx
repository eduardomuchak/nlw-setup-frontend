import requestErrorSVG from '../../assets/request-error.svg';

export function RequestError() {
  return (
    <div className={'flex items-center justify-center flex-col gap-4'}>
      <img src={requestErrorSVG} alt="Request Error" className="w-96 h-96" />
      <h1 className="text-white text-3xl font-bold text-center">Opa! Parece que houve um erro na sua requisição!</h1>
      <button
        className="mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-violet-600 hover:bg-violet-700 transition-all duration-400"
        type="reset"
        onClick={() => window.location.reload()}
      >
        Tentar Novamente
      </button>
    </div>
  );
}
