import { Routes, Route } from 'react-router-dom';
import { SummaryPage } from '../pages/Summary';
import { HabitsListPage } from '../pages/HabitsList';
import { NotFoundPage } from '../pages/NotFound';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SummaryPage />} />
      <Route path="/habits-list" element={<HabitsListPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
