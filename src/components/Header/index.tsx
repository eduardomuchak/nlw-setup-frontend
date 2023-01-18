import logo from '../../assets/logo.svg';
import NewHabitButton from '../NewHabitButton';
import SummaryTable from '../SummaryTable';

function Header() {
  return (
    <div className={'w-full max-w-5xl px-6 flex flex-col gap-16'}>
      <div className={'w-full max-w-3xl mx-auto flex items-center justify-between'}>
        <img src={logo} className="Habits logo" alt="Habits logo" />
        <NewHabitButton />
      </div>
      <SummaryTable />
    </div>
  );
}

export default Header;
