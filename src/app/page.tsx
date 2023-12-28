'use client';
import { useState } from "react";
import { RandomFox } from "@/components/RandomFox";

//generate random number between 1 and 123
const random = () => Math.floor(Math.random()*123)+1;

export default function Home() {
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      {images.map((image,index) => (
        <div key={index} className='p-4'>
          <RandomFox image={image} />
        </div>
      ))}
    </main>
  )
}
