import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootPage from './pages/Root';
import HomePage from './pages/Home';
import Rootplans from './pages/rootpage';
import PlanDetails from './components/plan/plandetails';
import './app.css';
import AboutPage from './pages/about';
import PackageDetails from './components/plan/packagedetails';
import { RootAction } from './pages/Root';
import AuthPagge from './pages/auth';
function App() {
  const roter=createBrowserRouter([{
    path:'/',
    element: <RootPage />,
    action: RootAction,
    children:[
      {index:true,element:<HomePage />},
      {path:'plan',element:<Rootplans />},
      {path:'plan/:planId',element:<PlanDetails />},
      {path:'pack/:planId',element:<PackageDetails />},
      {path: 'about',element:<AboutPage />},
      {path: 'auth',element:<AuthPagge />}
    ]
  }])
  return (
    <div>
      <RouterProvider router={roter}/>
    </div>
  );
}

export default App;
