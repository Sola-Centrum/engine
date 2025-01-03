import { z } from 'zod';

import { Email, type ExtractValue } from '@engine/types';

// Enums

export const AdminRole = {
  ADMIN: 'admin',
  AMBASSADOR: 'ambassador',
  OWNER: 'owner',
} as const;

export type AdminRole = ExtractValue<typeof AdminRole>;

// Use Cases

export const AddAdminInput = z.object({
  actor: z.string().trim().min(1),
  email: Email,
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  role: z.nativeEnum(AdminRole),
});

export const RemoveAdminInput = z.object({
  actor: z.string().trim().min(1),
  id: z.string().trim().min(1),
});

export type AddAdminInput = z.infer<typeof AddAdminInput>;
export type RemoveAdminInput = z.infer<typeof RemoveAdminInput>;
