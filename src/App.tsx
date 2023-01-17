import './styles/global.css';

import Habit from './components/habit';

function App() {
  return (
    <>
      <Habit completed={2} />
      <Habit completed={4} />
      <Habit completed={1} />
      <Habit completed={10} />
    </>
  );
}

export default App;
