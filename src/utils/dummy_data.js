import uuid from "react-native-uuid";
import { faker } from "@faker-js/faker";

export const eventsDummyData = () => {
    let eventsList = [];
    for (let i = 0; i < 5; i++) {
        eventsList.push({
            id: uuid.v4(),
            picture: null,
            name: faker.lorem.sentence(3),
            date: Date.now(),
            location: faker.location.streetAddress()
        });
    }
    return eventsList;
}

export const usersDummyData = () => {
    let usersList = [];
    for (let i = 0; i < 5; i++) {
        usersList.push({
            id: uuid.v4(),
            fullname: faker.person.fullName(),
            email: faker.internet.email(),
            phone_number: faker.phone.number('501-###-###'),
            password: "Password123#"
        });
    }
    return usersList;
}

export const attendeesDummyData = [];

export const expensesDummyData = () => {
    let expensesList = [];
    for (let i = 0; i < 5; i++) {
        expensesList.push({
            id: uuid.v4(),
            for: faker.lorem.word(),
            notes: faker.lorem.sentence(),
            count: faker.number.int()
        });
    return expensesList();
    }
}

export const incomesDummyData = () => {
    let incomesList = [];
    for (let i = 0; i < 5; i++) {
        incomesList.push({
            id: uuid.v4(),
            from: faker.lorem.word(),
            notes: faker.lorem.sentence(),
            count: faker.number.int()
        });
    return incomesList();
    }
}