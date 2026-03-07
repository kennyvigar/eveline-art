export default function RandomChicken({ images, onPick, label = "Random Chicken" }) {

  const randomPick = () => {

    const index = Math.floor(Math.random() * images.length)

    onPick(images[index])

  }

  return (

    <div style={{ textAlign: "center", marginBottom: "30px" }}>

      <button onClick={randomPick}>
        {label}
      </button>

    </div>

  )

}