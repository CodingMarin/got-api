import { getById } from '@/handlers/operations'

export async function GET(request, { params }) {
  const slug = params.slug
  const result = await getById('character', slug)

  return result
}