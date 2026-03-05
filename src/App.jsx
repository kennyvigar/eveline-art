import { useEffect, useState } from "react"

import Header from "./components/Header"
import ChickenGrid from "./components/ChickenGrid"
import ChickenModal from "./components/ChickenModal"
import RandomChicken from "./components/RandomChicken"

export default function App() {

  const [images, setImages] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {

  const modules = import.meta.glob(
    './assets/chickens/*.{jpg,jpeg,png,JPG,PNG}',
    { eager: true }
  )

  const imgs = Object.values(modules)
    .map(m => m.default)
    .sort()

  console.log("Loaded chickens:", imgs)

  setImages(imgs)

}, [])

  return (

    <div className="app-container">

      <Header />

      <RandomChicken images={images} onPick={setSelected} />

      <ChickenGrid images={images} onSelect={setSelected} />

      <ChickenModal image={selected} onClose={() => setSelected(null)} />

    </div>

  )

}