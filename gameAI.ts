// Basic AI and game state stubs

// Example countries
const countries = [
  "USA", "Germany", "USSR", "Japan", "UK", "France", "Italy", "India", "China"
];

function randomAIAction() {
  const actions = ["attack", "formAlliance", "research", "fortify"];
  return actions[Math.floor(Math.random() * actions.length)];
}

export function initializeGameState() {
  return {
    playerCountry: null,
    countries: countries.map(name => ({
      name,
      isAI: true,
      morale: 100,
      alliances: [],
      enemies: [],
      // ...more
    })),
    turn: 1
  };
}

export function runAIForOtherCountries(state: any) {
  // Each AI country takes a random action (stub)
  const newState = { ...state, turn: state.turn + 1 };
  newState.countries = newState.countries.map((c: any) => {
    if (!c.isAI) return c;
    // Example: very basic AI logic (expand!)
    const action = randomAIAction();
    if (action === "attack") {
      // Pick another country (not self)
      const targets = newState.countries.filter(
        (other: any) => other.name !== c.name
      );
      const target = targets[Math.floor(Math.random() * targets.length)];
      if (!c.enemies.includes(target.name)) c.enemies.push(target.name);
    } else if (action === "formAlliance") {
      // Try to form alliance
      const allies = newState.countries.filter(
        (other: any) =>
          other.name !== c.name && !c.alliances.includes(other.name)
      );
      if (allies.length) {
        const ally = allies[Math.floor(Math.random() * allies.length)];
        c.alliances.push(ally.name);
      }
    }
    // ...other actions
    return { ...c };
  });
  return newState;
}