export const runtime = 'edge';

export async function POST() {
  return new Response('Gone', { status: 410 });
}
