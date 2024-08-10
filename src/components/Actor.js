import React from "react";

const Actor = (props) => {

    const { actor, onClickActor} = props;

    return (
        <div className="actor" onClick={onClickActor}>
          <div className="square">
          {actor.profile_path ? (
                            <img src={`http://image.tmdb.org/t/p/original${actor.profile_path}`} alt="image-film" />
                          ) : (
                            <img src='/NoImageLogo.png' alt='image-acteur' />
                          )}
            <div className="actor-name-overlay">{actor.original_name}</div>
          </div>
        </div>
      );
    };
    
    export default Actor;