'use client';
import { useState } from "react";
import type { MouseEventHandler } from "react";
import { LazyImage } from "@/components/LazyImage";



//generate simple unique id
const generateId = () => Math.random().toString(36).substring(2,9);

//generate random number between 1 and 123
const random = () => Math.floor(Math.random()*123)+1;

type ImageItems = { id: string, url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItems>>([]);
  

  const addNewFox:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const newImageItem:ImageItems = {
      id:generateId(), 
      url: `https://randomfox.ca/images/${random()}.jpg`
    };

    setImages([...images,newImageItem])
  }

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <button onClick={addNewFox}>Añadir nuevo zorro</button>
      {images.map(({ id, url }, index) => (
        <div key={id} className='p-4'>
          <LazyImage 
            src={url} 
            title='RandomFox'
            className='rounded bg-slate-300' 
            width={320} 
            height='auto'
            onClick={() => console.log('click!')}
            onLazyLoad={(imageNode) => console.log(`Imagen #${index+1} cargada. Nodo:`,imageNode)} />
        </div>
      ))}
    </main>
  )
}
