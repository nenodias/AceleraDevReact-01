import React from 'react'

const RecipeItem = (prop) => {
    const title = prop.title || '';
    const ingredients = prop.ingredients || '';
    const regex = prop.regex || new RegExp(`()`, 'gi');
    
    const renderMarked = (text) => text.split(regex).map( (val, index) => {
        const marked = regex.source !== '()' && regex.test(val) ? (<mark>{val}</mark>) : val;
        return (<React.Fragment key={index}>{marked}</React.Fragment>);
    });
    return (<div className="col-sm-3 mt-4">
        <div className="card">
            <img className="card-img-top img-fluid" src={ prop.thumbnail } alt={ prop.title } />
            <div className="card-body">
                <h5 className="card-title">{ renderMarked(title) }</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{ renderMarked(ingredients) }
                </p>
            </div>
        </div>
    </div>);
}

export default RecipeItem;