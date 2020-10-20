import { RouteConfig } from 'react-router-config'
import BlankLayout from '../layouts'

import Joke from '../pages/joke'

const routes: RouteConfig[] = [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/',
        component: Joke,
        exact: true,
      },
    ]
  }
]

export default routes
