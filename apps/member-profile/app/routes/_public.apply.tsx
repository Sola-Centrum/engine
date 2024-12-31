import { json } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';

import { isFeatureFlagEnabled } from '@engine/core/member-profile/server';
import { Public, Text } from '@engine/ui';

export async function loader() {
  const isApplicationOpen = await isFeatureFlagEnabled('family_application');

  return json({
    isApplicationOpen,
  });
}

export default function ApplicationLayout() {
  const { isApplicationOpen } = useLoaderData<typeof loader>();

  return (
    <Public.Content layout="lg">
      <img
        alt="propel2excel Workmark"
        height={30}
        width={200}
        src="/images/propel2excel-wordmark.png"
      />

      <Text className="mt-8" variant="2xl">
        The propel2excel Family Application
      </Text>

      {isApplicationOpen ? (
        <Outlet />
      ) : (
        <Text>
          Unfortunately, our application is temporarily closed as we review
          exising applications. Please check back in the upcoming days/weeks for
          the opportunity to apply to propel2excel!
        </Text>
      )}
    </Public.Content>
  );
}
