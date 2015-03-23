module lottery {
    export interface IPerson {
        id: string;
        name: string;
    }

    export class Person implements IPerson {
        constructor(public name: string) {
            this.id = Guid.newGuid();   
        }

        id: string;
    }
} 