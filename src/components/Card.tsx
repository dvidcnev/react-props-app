interface PropType {
  id: number;
  image: string;
  country: string;
  title: string;
  date: string;
  about: string;
}

export default function Card(props: PropType) {
  return (
    <div className="cardMain">
      <img id="cardImage" src={`../card/${props.image}`} />
      <section>
        <div id="country">
          <img src="../arrow.svg" />
          <span> {props.country.toUpperCase().split("").join(" ")}</span>
          <span className="gray">
            {" "}
            <a href="#">View on Google Maps</a>
          </span>
        </div>
        <h1>{props.title}</h1>
        <p className="bold">{props.date}</p>
        <p>{props.about}</p>
      </section>
      <hr />
    </div>
  );
}
