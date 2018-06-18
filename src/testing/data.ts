import { Listing } from "../model/Listing";
import { User } from "../model/User";


export class Data {

    listings: Listing[] = require("./fake_listing_data.json").map(
        (listing: any) =>
            new Listing(listing.id, listing.sellerId, listing.isbn, listing.price, listing.description)
    )

    sellers: User[] = require("./fake_user_data.json").map(
        (user: any) =>
            new User(
                user.id,
                user.name,
                user.imageID,
                user.uniID,
                user.email,
                user.phoneNumber
            )
    );

    getListings = (): Listing[] => (this.listings)
    getSellers = (): User[] => (this.sellers)
}