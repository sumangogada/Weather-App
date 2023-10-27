
export class weather {

    public id: number;
    public main: string;
    public description: string;
    public icon: string;

    constructor(id: number, main: string, description: string, icon: string) {
        this.id = id;
        this.main = main;
        this.description = description;
        this.icon = icon;
    }
}