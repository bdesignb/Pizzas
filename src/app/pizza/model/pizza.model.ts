export class Pizza {
    _id: number;
    name: string;
    description: string;
    grade: number;
    price: number;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.grade = obj && obj.grade || null;
        this.price = obj && obj.price || null;
    }
}