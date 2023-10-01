import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cardData from "./data/cardData";

export default function App() {
  const elements = cardData.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  return (
    <div>
      <Navbar />
      {elements}
    </div>
  );
}
