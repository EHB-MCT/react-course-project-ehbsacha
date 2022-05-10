function PrewiewBlock(props) {

  var recipe = props.recipe

  return (
    <div className="previewBlock">
      <div className="imagePart">
        <img src={recipe.image} alt="Lekker van bij ons logo" />
      </div>
      <div className="previewText">
        <p className="previewTitle">{recipe.title}</p>
        <p className="previewDetail">type:
          {recipe.dishTypes.map(type => {
            return <div>- {type}</div>
          })}</p>
        <p className="previewDetail">Heeft een score van: {recipe.score}</p>
        <p className="previewDetail">Duurt ongeveer {Math.floor(recipe.time / 60)}h en {recipe.time - Math.floor(recipe.time / 60) * 60}min</p>
        <p></p>
      </div>
    </div>
  );
}

export default PrewiewBlock;