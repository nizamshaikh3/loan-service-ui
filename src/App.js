import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './components/Home';
import LoansPage from './components/Loans';
import RootLayout from './components/Root';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {path: '/', element: <HomePage/>},
      {path: '/loans', element: <LoansPage/>}
    ],
    errorElement: <ErrorPage/>
  }
]
)

function App() {
  return <RouterProvider router={router}/>
}

export default App;
