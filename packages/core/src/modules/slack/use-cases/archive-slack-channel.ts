import { db } from '@engine/db';

import { type GetBullJobData } from '@/infrastructure/bull.types';

export async function archiveSlackChannel({
  id,
}: GetBullJobData<'slack.channel.archive'>) {
  await db
    .updateTable('slackChannels')
    .set({ deletedAt: new Date() })
    .where('id', '=', id)
    .where('deletedAt', 'is', null)
    .execute();
}
