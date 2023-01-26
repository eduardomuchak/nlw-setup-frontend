import logo from '../../assets/logo.svg';
import NewHabitModal from '../NewHabitModal';

function Header() {
  return (
    <div className={'w-full max-w-5xl px-6 flex flex-col gap-16'}>
      <div className={'w-full max-w-3xl mx-auto flex items-center justify-between'}>
        <img src={logo} alt="Habits logo" />
        <div className="flex flex-row gap-2">
          <NewHabitModal />
        </div>
      </div>
    </div>
  );
}

export default Header;
