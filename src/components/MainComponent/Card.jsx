import style from './Card.module.css';

function Card({ cityImage, onDelete }) {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className={`card ${style.cardCustom}`}>
                <img className={`card-foto ${style.cardFotoCustom}`} src={cityImage.img} alt="Card image" />
                <div className="card-body" id="card-tot">
                    <h5>{cityImage.title}</h5>
                    <p>{cityImage.description}</p>
                    <a href="#" className="btn btn-primary me-2">{cityImage.data}</a>
                    <a href="#" className="btn btn-success me-2">Scopri itinerario</a>
                    <button
                        id="button"
                        className="delete icon btn btn-danger delete-btn"
                        onClick={() => onDelete(cityImage.id)}
                    >
                        Elimina
                    </button>
                    <div className="tags mt-3">
                        {cityImage.tags.map((tag) => {
                            let tagClass = '';
                            if (tag === "#Vacanze") tagClass = `${style.vacanze}`;
                            else if (tag === "#Viaggio") tagClass = `${style.viaggio}`;
                            else if (tag === "#VacanzaPerfetta") tagClass = `${style.vacanzaPerfetta}`;
                            else if (tag === "#AllaScoperta") tagClass = `${style.allaScoperta}`;
                            else if (tag === "#VacanzeInFamiglia") tagClass = `${style.vacanzeInFamiglia}`;
                            else if (tag === "#Avventure") tagClass = `${style.avventure}`;
                            return <span key={tag} className={tagClass}>{tag}</span>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;


