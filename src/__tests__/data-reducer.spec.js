import { dataReducer, dataInitialState } from "../store/reducers/";
import { fetchSucceeded } from "../store/actions/";

const testItem = {
    name: "Odish",
    type: "grass"
};

describe("data-reducer", () => {
    it("should return same initial state by default", () => {
        const state = dataReducer(dataInitialState, {
            type: "UNHANDLED_ACTION"
        });

        expect(state).toEqual(dataInitialState);
    });

    it("item should be of type Object after successfull fetch", () => {
        const state = dataReducer(dataInitialState, fetchSucceeded(testItem));

        expect(state.item).toBeInstanceOf(Object);
    });

    it("name should be \"Odish\" after successfull fetch", () => {
        const state = dataReducer(dataInitialState, fetchSucceeded(testItem));

        expect(state.item.name).toBe(testItem.name);
    });
});
