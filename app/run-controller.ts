module lottery {
  export class RunController {
    constructor(private dataService: data.IDataService) {
      this.getLists();
    }

    nonWinners: IEntrant[];
    winners: IEntrant[];
    lastWinner: IEntrant;

    init() {
      this.getLists();
    }

    drawWinner() {
      this.lastWinner = this.dataService.drawWinner();
      this.getLists();
    }

    private getLists() {
      this.nonWinners = this.dataService.getNonWinners();
      this.winners = this.dataService.getWinners();
    }
  }
}