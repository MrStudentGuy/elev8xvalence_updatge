export async function GET() {
  // Static posts data
  const posts = [
    { id: 1, title: "First Post", published: true, createdAt: "2025-07-13" },
    { id: 2, title: "Second Post", published: true, createdAt: "2025-07-20" },
  ];

  return new Response(JSON.stringify(posts));
}
