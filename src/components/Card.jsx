export const Card = (epave) => (
  <div className="col">
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <p className="card-title fw-bold">
          {epave.properties.nom ? epave.properties.nom : "Inconnu"}
        </p>
        <div className="">
          <p>
            <span className="text-muted">Type : </span>
            {epave.properties.caract_bat
              ? epave.properties.caract_bat
              : "inconnu"}
            <br />
            <span className="text-muted">Profondeur : </span>
            {epave.properties.brassiage
              ? (epave.properties.brassiage * 1.8288).toFixed() + "m"
              : "inconnu"}
          </p>
        </div>
        {epave.properties.circ_nauf && (
          <div className="bg-danger text-white p-4 rounded mb-2">
            <p className="card-text">{epave.properties.circ_nauf}</p>
          </div>
        )}
        {epave.properties.caract_obj && (
          <div className="bg-info p-4 rounded">
            <p className="card-text">{epave.properties.caract_obj}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);
