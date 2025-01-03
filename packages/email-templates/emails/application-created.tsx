import React from 'react';

import { Email } from './components/email';
import { type EmailTemplateData } from '../src/types';

export function ApplicationCreatedEmail({
  firstName,
}: EmailTemplateData<'application-created'>) {
  return (
    <Email.Template>
      <Email.Preview>
        We've received your application and will review it shortly. In the
        meantime, follow us on the socials!
      </Email.Preview>

      <Email.Main>
        <Email.Text>Hi {firstName},</Email.Text>

        <Email.Text>
          Thank you so much for applying to join the propel2excel family. We've
          received your application and will provide you with an update soon.
        </Email.Text>

        <Email.Text>
          In the meantime, be sure to follow us on{' '}
          <Email.Link href="https://www.instagram.com/propel2excelorg">
            Instagram
          </Email.Link>
          ,{' '}
          <Email.Link href="https://twitter.com/propel2excelorg">
            Twitter
          </Email.Link>
          , and{' '}
          <Email.Link href="https://www.linkedin.com/company/propel2excel">
            LinkedIn
          </Email.Link>
          !
        </Email.Text>

        <Email.Signature />
      </Email.Main>
    </Email.Template>
  );
}

export default ApplicationCreatedEmail;
