module lottery {
    export interface IEntrant extends IPerson {
        hasWon: boolean;
    }

    export class Entrant extends Person implements IEntrant {
        constructor(name: string) {
            super(name);
        }

        hasWon = false;
    }
} 