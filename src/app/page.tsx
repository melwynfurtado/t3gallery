export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/5e57a499-b9dd-460c-84db-40d6ba6a0d7f-zc26f8.jpg",
    "https://utfs.io/f/1cafa05b-8169-4876-b981-63fb87f576e0-78hxc3.jpg",
    "https://utfs.io/f/40a50433-f4a9-4a45-9caa-cd6865fb879a-vh95zh.jpg",
    "https://utfs.io/f/bfd06311-da5d-4b19-a37f-80811d558661-je5m6z.jpg",
    "https://utfs.io/f/5e57a499-b9dd-460c-84db-40d6ba6a0d7f-zc26f8.jpg",
    "https://utfs.io/f/1cafa05b-8169-4876-b981-63fb87f576e0-78hxc3.jpg",
    "https://utfs.io/f/40a50433-f4a9-4a45-9caa-cd6865fb879a-vh95zh.jpg",
    "https://utfs.io/f/bfd06311-da5d-4b19-a37f-80811d558661-je5m6z.jpg",
    "https://utfs.io/f/5e57a499-b9dd-460c-84db-40d6ba6a0d7f-zc26f8.jpg",
    "https://utfs.io/f/1cafa05b-8169-4876-b981-63fb87f576e0-78hxc3.jpg",
    "https://utfs.io/f/40a50433-f4a9-4a45-9caa-cd6865fb879a-vh95zh.jpg",
    "https://utfs.io/f/bfd06311-da5d-4b19-a37f-80811d558661-je5m6z.jpg",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
