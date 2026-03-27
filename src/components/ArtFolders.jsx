export default function ArtFolders({ folders, onSelect }) {

  return (

    <div className="folders">

      {folders.map(folder => (

        <div
          key={folder}
          className="folder-card"
          onClick={() => onSelect(folder)}
        >

          {folder === "chickens" ? "🐔 Chicken Art" : folder === "rockart" ? "🪨 rocks" : folder === "clay" ? "🗿 clay" : folder === "zkynlee" ? "👭 kynlee's art" : "🎨 Other Art"}

        </div>

      ))}

    </div>

  )

}