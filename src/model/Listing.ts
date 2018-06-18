export class Listing{
    private _id: string;
    private _sellerId: string;
    private _isbn: string;
    private _price: string;
    private _description: string;


    constructor(id: string, sellerId: string, isbn: string, price: string, description: string) {
        this._id = id;
        this._sellerId = sellerId;
        this._isbn = isbn;
        this._price = price;
        this._description = description;
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get sellerId(): string {
        return this._sellerId;
    }

    set sellerId(value: string) {
        this._sellerId = value;
    }

    get isbn(): string {
        return this._isbn;
    }

    set isbn(value: string) {
        this._isbn = value;
    }

    get price(): string {
        return this._price;
    }

    set price(value: string) {
        this._price = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}