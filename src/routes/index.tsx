import { SummaryPage } from '../pages/Summary';
import { HabitsListPage } from '../pages/HabitsList';
import { NotFoundPage } from '../pages/NotFound';
import { LoginPage } from '../pages/Login';

import { Routes, Route, useLocation } from 'react-router-dom';

import { RequireAuth } from './RequireAuth';
import { Layout } from '../components/Layout';

export function MainRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/inicio" element={<SummaryPage />} />
          <Route path="/habits-list" element={<HabitsListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
