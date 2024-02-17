import { expect } from "chai"
import { onlineStore } from "./onlineStore";

describe("Tests …", function () {
    describe("isProductAvailable", function () {
        it("Valid tests", function () {
            expect(onlineStore.isProductAvailable("lopata", -1)).to.equal(`Sorry, lopata is currently out of stock.`)
            expect(onlineStore.isProductAvailable("lopata", 0)).to.equal(`Sorry, lopata is currently out of stock.`)
            expect(onlineStore.isProductAvailable("lopata", 5)).to.equal(`Great! lopata is available for purchase.`)
        });
        it("Invalid inputs", () => {
            expect(() => onlineStore.isProductAvailable("lopata", "5")).to.throw("Invalid input.")
            expect(() => onlineStore.isProductAvailable(2, 5)).to.throw("Invalid input.")
            expect(() => onlineStore.isProductAvailable(2, "5")).to.throw("Invalid input.")
        })
    });
});
