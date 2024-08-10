import { getImages } from "~/server/data/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getImages();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} alt={image.name} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
