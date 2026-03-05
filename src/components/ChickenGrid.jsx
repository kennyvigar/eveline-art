import '../styles/grid.css'

export default function ChickenGrid({ images, onSelect }) {

    return (

        <div className="gallery">

            {images.map((img, i) => (

                <img
                    key={i}
                    src={img}
                    alt="chicken drawing"
                    onClick={() => onSelect(img)}
                />

            ))}

        </div>

    )

}