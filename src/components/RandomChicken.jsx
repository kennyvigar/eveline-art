export default function RandomChicken({ images, onPick }) {

  const randomChicken = () => {

    const index = Math.floor(Math.random() * images.length)

    onPick(images[index])

  }

  return (

    <div style={{textAlign:"center", marginBottom:"30px"}}>

      <button onClick={randomChicken}>
        🐔 Random Chicken
      </button>

    </div>

  )

}