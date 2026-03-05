import '../styles/modal.css'

export default function ChickenModal({ image, onClose }) {

  if (!image) return null

  return (

    <div className="modal" onClick={onClose}>

      <img src={image} />

    </div>

  )

}