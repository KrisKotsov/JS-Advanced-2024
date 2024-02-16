import { expect } from "chai"
import { findNewApartment } from "./findApartment.js"

describe("Test suite", function () {
    describe("isGoodLocation", () => {
        it('throw error for invalid input data', () => {
            expect(() => findNewApartment.isGoodLocation(6, "6")).to.throw("Invalid input!")
        })
        it('throw error for invalid input data', () => {
            expect(() => findNewApartment.isGoodLocation("6", 6)).to.throw("Invalid input!")
        })
        it('throw error for invalid input data', () => {
            expect(() => findNewApartment.isGoodLocation(5, true)).to.throw("Invalid input!")
        })

        it('throw error for invalid city', () => {
            expect(() => findNewApartment.isGoodLocation("Pernik", true).to.equal("This location is not suitable for you."))
        })
        it('throw error for invalid city', () => {
            expect(() => findNewApartment.isGoodLocation("Plovdiv", false).to.equal("There is no public transport in area."))
        })
        it('throw error for invalid city', () => {
            expect(() => findNewApartment.isGoodLocation("Varna", false).to.equal("There is no public transport in area."))
        })
        it('throw error for invalid city', () => {
            expect(() => findNewApartment.isGoodLocation("Sofia", false).to.equal("There is no public transport in area."))
        })
        it('everything is ok', () => {
            expect(() => findNewApartment.isGoodLocation("Sofia", true).to.equal("You can go on home tour!"))
        })
        it('everything is ok', () => {
            expect(() => findNewApartment.isGoodLocation("Plovdiv", true).to.equal("You can go on home tour!"))
        })
        it('everything is ok', () => {
            expect(() => findNewApartment.isGoodLocation("Varna", true).to.equal("You can go on home tour!"))
        })
    })

    describe("Is large enough", () => {
        it("Invalid inputs", () => {
            expect(() => findNewApartment.isLargeEnough("arr", 5)).to.throw("Invalid input!")
        })
        it("Invalid inputs", () => {
            expect(() => findNewApartment.isLargeEnough([], 5)).to.throw("Invalid input!")
        })
        it("Invalid inputs", () => {
            expect(() => findNewApartment.isLargeEnough([50], "5")).to.throw("Invalid input!")
        })
        it("Invalid inputs", () => {
            expect(() => findNewApartment.isLargeEnough("arr", 5, "")).to.throw("Invalid input!")
        })
        it("valid inputs", () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60, 120], 55)).to.equal('60, 120');
        })
        it("valid inputs", () => {
            expect(findNewApartment.isLargeEnough([40, 50, 40, 20], 55)).to.equal('');
        })
        it("valid inputs", () => {
            expect(findNewApartment.isLargeEnough([40, 55, 40, 20], 55)).to.equal('55');
        })

        describe("IsItAffordable", () => {
            it("valid inputs", () => {
                expect(findNewApartment.isItAffordable(40, 60)).to.equal("You can afford this home!")
                expect(findNewApartment.isItAffordable(60, 40)).to.equal("You don't have enough money for this house!")
            })
            it("invalid inputs", () => {
                expect(() => findNewApartment.isItAffordable(60, "40")).to.throw("Invalid input!")
                expect(() => findNewApartment.isItAffordable("60", 40)).to.throw("Invalid input!")
                expect(() => findNewApartment.isItAffordable(-60, 80)).to.throw("Invalid input!")
                expect(() => findNewApartment.isItAffordable(60, -40)).to.throw("Invalid input!")
            })
        })
    })
})