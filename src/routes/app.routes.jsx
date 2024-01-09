import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Users } from '../pages/Users';
import { Regions } from '../pages/Regions';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/regions" element={<Regions />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}