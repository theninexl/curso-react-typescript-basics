'use client';
import { useState } from "react";
import { RandomFox } from "@/components/RandomFox";

//generate simple unique id
const generateId = () => Math.random().toString(36).substring(2,9);

//generate random number between 1 and 123
const random = () => Math.floor(Math.random()*123)+1;

type ImageItems = { id: string, url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItems>>([
    {id:generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id:generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id:generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
    {id:generateId(), url: `https://randomfox.ca/images/${random()}.jpg`},
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      {images.map(({ id, url }) => (
        <div key={id} className='p-4'>
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  )
}
