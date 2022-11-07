import Office from '../public/office.jpg';
import Image from "next/legacy/image";

export default function Background() {
  return (
    <Image
      src={Office}
      alt="background"
      layout="fill"
      priority
      objectFit="cover"
    />
  );
}
