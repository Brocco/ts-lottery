module lottery.data {
  export interface IDataService {
    addEntrant: (name: string) => IEntrant;
    deleteEntrant: (id: string) => void;
    drawWinner: () => IEntrant;
    getWinners: () => IEntrant[];
    getNonWinners: () => IEntrant[];
  }
  export class DataService implements IDataService {
    private entrants: IEntrant[] = [];

    addEntrant(name: string) {
      var entrant = new Entrant(name);
      this.entrants.push(entrant);
      return entrant;
    }

    deleteEntrant(id: string) {
      var entrant = this.findEntrantById(id);

      this.entrants.splice(this.entrants.indexOf(entrant), 1);
    }

    private findEntrantById(id: string): IEntrant {
      var entrant: IEntrant = null;
      this.entrants.some((e) => {
        if (e.id === id) {
          entrant = e;
          return true;
        }
        return false;
      });
      return entrant;
    }

    drawWinner () {
      var nonWinners = this.getNonWinners();
      var winnerIndex = Math.floor((Math.random() * nonWinners.length));
      var winner = nonWinners[winnerIndex];
      winner.hasWon = true;
      return winner;
    }

    getWinners () {
      console.log('getWinners - ', this.entrants.length);
      return this.entrants.filter((entrant) => {
        return entrant.hasWon;
      });
    }

    getNonWinners () {
      return this.entrants.filter((entrant) => {
        return !entrant.hasWon;
      });
    }
  }
} 