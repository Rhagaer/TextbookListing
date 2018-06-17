export class Textbook {
    private _name: string;
    private _author: string;
    private _isbn: string;
    private _edition: number;
    private _image: string;


    constructor(name: string, author: string, isbn: string, edition: number, image: string) {
        this._name = name;
        this._author = author;
        this._isbn = isbn;
        this._edition = edition;
        this._image = image;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get isbn(): string {
        return this._isbn;
    }

    set isbn(value: string) {
        this._isbn = value;
    }

    get edition(): number {
        return this._edition;
    }

    set edition(value: number) {
        this._edition = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }
}