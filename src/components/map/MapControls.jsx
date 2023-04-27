import * as React from "react";

function MapControls(props) {
  console.log(props);
  if (Object.keys(props).length === 0)
    return (
      <div className="control-panel bg-danger text-white">
        Veuillez cliquer sur une épave
        <br />
        <small>Zoomez pour afficher les épaves</small>
      </div>
    );
  else
    return (
      <div className="control-panel">
        <>
          <h3>Epave</h3>
          <h4>{props.properties.nom ? props.properties.nom : "Inconnu"}</h4>
          <p>
            Type :{" "}
            {props.properties.caract_bat
              ? props.properties.caract_bat
              : "Inconnu"}
          </p>
          <p>
            Prof.{" "}
            {props.properties.brassiage
              ? (props.properties.brassiage * 1.8288).toFixed() + "m"
              : "inconnu"}
          </p>
        </>
        <hr />
      </div>
    );
}

export default React.memo(MapControls);
