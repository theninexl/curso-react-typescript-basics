import { RandomFox } from "@/components/RandomFox";

//generate random number between 1 and 123
const random = () => Math.floor(Math.random()*123)+1;

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`} />
    </main>
  )
}
