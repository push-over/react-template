import React, { FC } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

const Layout: FC = ({ route }: RouteConfig) => (
  <>{renderRoutes(route.routes)}</>
)

export default Layout
