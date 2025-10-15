import { z } from 'zod'

/**
 * Validation schema for contact form
 * Ensures all required fields are present and properly formatted
 */
export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  organization: z.string().optional(),
  'inquiry-type': z.enum(['new-project', 'partnership', 'support', 'general'], {
    errorMap: () => ({ message: 'Please select an inquiry type' }),
  }),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
