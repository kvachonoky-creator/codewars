class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }

  isWorthIt(draft, crew) {
    draft = this.draft;
    crew = this.crew
    while (crew > 0) {
      draft -= 1.5;
      crew--;
    }
    if (draft > 20) {
      return true;
    } return false;
  }

}

const shipps = new Ship(35, 20)