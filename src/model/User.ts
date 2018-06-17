export class User{
    private _id: string;
    private _name: string;
    private _imageID: string;
    private _universityID: string;
    private _email: string;
    private _phoneNumber: string


    constructor(id: string, name: string, imageID: string, universityID: string, email: string, phoneNumber: string) {
        this._id = id;
        this._name = name;
        this._imageID = imageID;
        this._universityID = universityID;
        this._email = email;
        this._phoneNumber = phoneNumber;
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get imageID(): string {
        return this._imageID;
    }

    set imageID(value: string) {
        this._imageID = value;
    }

    get universityID(): string {
        return this._universityID;
    }

    set universityID(value: string) {
        this._universityID = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
}