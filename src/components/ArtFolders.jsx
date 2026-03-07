export default function ArtFolders({ folders, onSelect }) {

  return (

    <div className="folders">

      {folders.map(folder => (

        <div
          key={folder}
          className="folder-card"
          onClick={() => onSelect(folder)}
        >

          {folder === "chickens" ? "🐔 Chicken Art" : "🎨 Other Art"}

        </div>

      ))}

    </div>

  )

}