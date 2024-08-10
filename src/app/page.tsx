const mockImagesUrls = [
  "https://utfs.io/f/b10c628b-3381-43b7-a1fc-02c9b9aff450-xj3yd5.22.25-AforebodingGothicmansionsurroundedbydensetwistedtreesunderafullmoon.Thewindowsglowwithaneerielightandshadowsseemtomoveonth-ezgif.com-webp-to-jpg-converter.jpg",
  "https://utfs.io/f/05df8598-789c-43b1-b287-4385ee4599a7-xj3yd5.22.29-Adimlylitancientlibraryfilledwithtoweringshelvesofoldbooks.Inthecenterstandsacloakedfigurewithhollowglowingeyessurroundedby-ezgif.com-webp-to-jpg-converter.jpg",
];

const mockImages = mockImagesUrls.map((url, index) => {
  return {
    id: index,
    url: url,
  };
});

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
