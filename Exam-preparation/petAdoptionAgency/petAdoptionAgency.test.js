import { expect } from "chai"
import { petAdoptionAgency } from "./petAdoptionAgency.js"

describe("petAdoptionAgency", function () {
    describe("isAvailablePet", () => {
        it("Validate input", function () {
            expect(() => petAdoptionAgency.isPetAvailable("6", "5", true)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable("6", 5, 20)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable(6, "5", 20)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable(6, 10, true)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable(6, 10, 10)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable(6, 10, true)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.isPetAvailable(6, "10", true)).to.throw("Invalid input")
        });
        it("Available count less than zero", () => {
            expect(petAdoptionAgency.isPetAvailable("dog", -1, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`)
            expect(petAdoptionAgency.isPetAvailable("dog", 0, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`)
        })
        it("Available count above zero and vacc status", () => {
            expect(petAdoptionAgency.isPetAvailable("cat", 5, true)).to.equal(`Great! We have 5 vaccinated cat(s) available for adoption at the agency.`)
            expect(petAdoptionAgency.isPetAvailable("cat", 5, false)).to.equal(`Great! We have 5 cat(s) available for adoption, but they need vaccination.`)
        })
    });

    describe("getRecommendedPets", () => {
        it("Validate input", () => {
            expect(() => petAdoptionAgency.getRecommendedPets(5, "5")).to.throw("Invalid input")
            expect(() => petAdoptionAgency.getRecommendedPets(5, 5)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.getRecommendedPets([{ name: "dog", desiredTraits: "white" }], 5)).to.throw("Invalid input")
        })
        it("Search for traits input", () => {
            let pets = [{
                name: "sharo",
                traits: "black"
            },
            {
                name: "vihur",
                traits: "black"
            },
            {
                name: "balkan",
                traits: "white"
            }
            ]

            expect(petAdoptionAgency.getRecommendedPets(pets, "black")).to.equal(`Recommended pets with the desired traits (black): sharo, vihur`)
            expect(petAdoptionAgency.getRecommendedPets(pets, "yellow")).to.equal(`Sorry, we currently have no recommended pets with the desired traits: yellow.`)
        })
    })

    describe("adoptPet", () => {
        it("Invalid input", () => {
            expect(() => petAdoptionAgency.adoptPet("dog", 2)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.adoptPet(2, 2)).to.throw("Invalid input")
            expect(() => petAdoptionAgency.adoptPet(2, "2")).to.throw("Invalid input")
        })
        it("Valid input", () => {
            expect(petAdoptionAgency.adoptPet("dog", "Kris")).to.equal(`Congratulations, Kris! You have adopted dog from the agency. Enjoy your time with your new furry friend!`)
        })
    })
});
