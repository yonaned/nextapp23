
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1>Advanced Image</h1>
      <Image
        src="/nuxt.jpg"
        alt="My Image"
        width={500}
        height={300}
        placeholder="blur" // Add a blurry placeholder
        blurDataURL="data:image/png;base64,..." // Base64-encoded placeholder
        priority // Load this image first
      />
    </div>
  );
}