import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { getUserImages } from "~/server/data/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const user = auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }

  const images = await getUserImages(user.userId);

  return (
    <main>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <Image
              style={{ objectFit: "contain" }}
              src={image.url}
              width={192}
              height={192}
              alt={image.name}
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
