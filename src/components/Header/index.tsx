import logo from '../../assets/logo.svg';
import NewHabitButton from '../NewHabitButton';

function Header() {
  return (
    <div className={'w-full max-w-5xl px-6 flex flex-col gap-16'}>
      <div className={'w-full max-w-3xl mx-auto flex items-center justify-between'}>
        <img src={logo} className="Habits logo" alt="Habits logo" />
        <NewHabitButton />
      </div>
    </div>
  );
}

export default Header;
