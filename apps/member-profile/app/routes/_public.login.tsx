import { json } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

import { Login, Public } from '@engine/ui';

export async function loader() {
  return json({});
}

export default function LoginLayout() {
  return (
    <Public.Content>
      <Login.Title>propel2excel Profile</Login.Title>
      <Outlet />
    </Public.Content>
  );
}
