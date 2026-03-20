import { useEffect, useState } from "react"

import Header from "./components/Header"
import ChickenGrid from "./components/ChickenGrid"
import ChickenModal from "./components/ChickenModal"
import RandomChicken from "./components/RandomChicken"
import ArtFolders from "./components/ArtFolders"
import ChickenFact from "./components/ChickenFact"

export default function App() {

  const [images, setImages] = useState({})
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {

    const modules = import.meta.glob(
      './assets/art/*/*.{jpg,jpeg,png}',
      { eager: true }
    )

    const grouped = {}

    Object.entries(modules).forEach(([path, mod]) => {

      const parts = path.split('/')
      const folder = parts[3]   // chickens or other

      if (!grouped[folder]) grouped[folder] = []

      grouped[folder].push(mod.default)

    })

    Object.keys(grouped).forEach(folder => {
      grouped[folder].sort()
    })

    setImages(grouped)

  }, [])

  return (

    <div className="app-container">

      <Header />

      {!selectedCategory && (
        <ArtFolders
          folders={Object.keys(images)}
          onSelect={setSelectedCategory}
        />
        
      )}
      {/* <ChickenFact /> */}

      {selectedCategory && (

        <>
          <button onClick={() => setSelectedCategory(null)}>
            ← Back
          </button>

          <RandomChicken
            images={images[selectedCategory]}
            onPick={setSelectedImage}
            label={
              selectedCategory === "chickens"
                ? "🐔 Random Chicken"
                : "🎨 Random Artwork"
            }
          />

          <ChickenGrid
            images={images[selectedCategory]}
            onSelect={setSelectedImage}
          />
          
        </>

      )}

      <ChickenModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

    </div>

  )
}