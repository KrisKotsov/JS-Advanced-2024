import { expect } from "chai"
import { planYourTrip } from "./planYourTrip.js"

describe("test suite", function () {
    it("Invalid inputs", () => {
        expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2020)).to.throw("Invalid Year!")
        expect(() => planYourTrip.choosingDestination("Bansko", "Winter", 2024)).to.throw("This destination is not what you are looking for.")
    })
    it("Picking valid inputs", () => {
        expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.")
        expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.")
    })

    it("Invalid inputs", () => {
        expect(() => planYourTrip.exploreOptions("5", 5)).to.throw("Invalid Information!")
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], "5")).to.throw("Invalid Information!")
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 5)).to.throw("Invalid Information!")
        expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2.5)).to.throw("Invalid Information!")
    })
    it("Valid Inputs with Explore Options", () => {
        let activities = ["Skiing", "Snowboarding", "Winter Hiking"]
        let activityIndex = 1
        expect(planYourTrip.exploreOptions(activities, activityIndex)).to.equal(["Skiing", "Winter Hiking"].join(", "))
    })

    it("estimateExpenses invalid inputs", () => {
        expect(() => planYourTrip.estimateExpenses("5", 5)).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses("5", "5")).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses(5, "5")).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses(-5, 5)).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses(-5, -5)).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses(5, -5)).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses(0, 2)).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses(1, 0)).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses([], {})).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses(5, undefined)).to.throw("Invalid Information!")
        expect(() => planYourTrip.estimateExpenses(undefined, 1)).to.throw("Invalid Information!")
    })
    it("estimateExpenses valid inputs", () => {
        expect(planYourTrip.estimateExpenses(100, 3)).to.equal("The trip is budget-friendly, estimated cost is $300.00.")
        expect(planYourTrip.estimateExpenses(100, 5)).to.equal("The trip is budget-friendly, estimated cost is $500.00.")
        expect(planYourTrip.estimateExpenses(100, 6)).to.equal("The estimated cost for the trip is $600.00, plan accordingly.")
    })
})
