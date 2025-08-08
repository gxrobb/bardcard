import BaseCard from './components/cards/BaseCard';

import SpellCard from './components/cards/SpellCard';

function App() {


  const cardList = [
    {
      id: "spell1",
      title: "Fireball",
      effectText: "A fiery explosion that deals damage.",
      cost: 5,
    },
    {
      id: "spell2",
      title: "Ice Shard",
      effectText: "A shard of ice that pierces through enemies.",
      cost: 3,
    },
    {
      id: "spell3",
      title: "Lightning Bolt",
      effectText: "A bolt of lightning that strikes a single target.",
      cost: 4,
    },
    {
      id: "spell4",
      title: "Frost Nova",
      effectText: "A freezing blast that slows down enemies.",
      cost: 6,
    },
    {
      id: "spell5",
      title: "Arcane Explosion",
      effectText: "An explosion of arcane energy that damages all nearby enemies.",
      cost: 5,
    },
    {
      id: "spell6",
      title: "Shadow Bolt",
      effectText: "A bolt of dark magic that deals damage over time.",
      cost: 4,
    },
    {
      id: "spell7",
      title: "Mind Flay",
      effectText: "A sinister spell that torments the mind.",
      cost: 5,
    }
  ]


  return (
    <div>
      {
        cardList.map((card) => (
          <BaseCard key={card.id} id={card.id}>
            <SpellCard {...card} />
          </BaseCard>
        ))
      }
    </div>
  )
}

export default App