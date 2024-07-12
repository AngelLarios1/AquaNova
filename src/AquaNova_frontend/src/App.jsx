import { Client, InternetIdentity } from '@bundly/ic-core-js';
import { IcpConnectContextProvider } from '@bundly/ic-react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './Home';
import { FibraCapilar } from './FibraCapilar';
import { Contaminantes } from './Contaminantes';
import { Cultivos } from './Cultivos';
import { Sensor } from './Sensor';
import { Arcilla } from '../Arcilla';
import Desoname from './Desoname';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/fibra-capilar",
      element: <FibraCapilar />
    },
    {
      path: "/contaminantes",
      element: <Contaminantes />
    },
    {
      path: "/cultivos",
      element: <Cultivos />
    },
    {
      path: "/sensor",
      element: <Sensor />
    },
    {
      path: "/arcilla",
      element: <Arcilla />
    },
    {
      path: '/desonamexd',
      element: <Desoname />
    }
  ]);

  const client = Client.create({
    restCanisters: {
      backend: {
        baseUrl: process.env.REACT_APP_API_REST_URL
      }
    },
    providers: [
      new InternetIdentity({
        providerUrl: process.env.REACT_APP_INTERNET_IDENTITY_URL
      })
    ]
  });

  return (
    <IcpConnectContextProvider client={client}>
      <RouterProvider router={router} />
    </IcpConnectContextProvider>
  )
}