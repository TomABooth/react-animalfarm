import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal">
      <img src={`animals/${props.images}.svg`} />
      <h2 className="name">{props.name}</h2>
      <p>{props.says}</p>
    </div>
  );
}
