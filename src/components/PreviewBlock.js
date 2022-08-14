import { recipeService } from '../services/apiService';

function PrewiewBlock(props) {

  var recipe = props.recipe

  return (
    <div className="previewBlock">
      <a href={`${recipeService.angular}/recipe/${recipe.id}`}>
        <div className="imagePart">
          <img src={recipe.image} alt="Lekker van bij ons logo" />
        </div>
        <div className="previewText">
          <p className="previewTitle">{recipe.title}</p>
          <div className="previewDetail">type:
            {recipe.dishTypes.map(type => {
              return <div key={type.toString()}>- {type}</div>
            })}
          </div>
          <div className="previewDetail">diets:
            {recipe.diets.map(diet => {
              return <div key={diet.toString()}>- {diet}</div>
            })}
          </div>
          <p className="previewDetail">Heeft een healthScore van: {recipe.healthScore}</p>
          <p className="previewDetail">Heeft een weightWatcherSmartPoints van: {recipe.weightWatcherSmartPoints}</p>
        </div>
      </a>
    </div>
  );
}

export default PrewiewBlock;