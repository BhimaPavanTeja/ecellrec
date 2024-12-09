import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image"; 

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function BlurFadeCollage() {
  return (
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <Image
              className="mb-4 size-full rounded-lg object-contain"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
              width={800} // Set a default width
              height={600} // Set a default height
              layout="responsive" // Use responsive layout
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}