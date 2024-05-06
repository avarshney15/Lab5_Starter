// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
/*
isPhoneNumber
*/
test("isPhoneNumber: 123-456-7890", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("isPhoneNumber: (123)456-7890", () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

test("isPhoneNumber: 1234567890", () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test("isPhoneNumber: 9", () => {
  expect(isPhoneNumber("9")).toBe(false);
});

/*
isEmail
*/
test("isEmail: tpowell2@ucsd.edu", () => {
  expect(isEmail("tpowell2@ucsd.edu")).toBe(true);
});

test("isEmail: ken@zeger.us", () => {
  expect(isEmail("ken@zeger.us")).toBe(true);
});

test("isEmail: ken@zeger", () => {
  expect(isEmail("ken@zeger")).toBe(false);
});

test("isEmail: 123442as", () => {
  expect(isEmail("123442as")).toBe(false);
});

/*
isStrongPassword
*/
test("isStrongPassword: Password", () => {
  expect(isStrongPassword("Password")).toBe(true);
});

test("isStrongPassword: davidwang_22", () => {
  expect(isStrongPassword("davidwang_22")).toBe(true);
});

test("isStrongPassword: dav", () => {
  expect(isStrongPassword("dav")).toBe(false);
});

test("isStrongPassword: 1234234213421341234", () => {
  expect(isStrongPassword("1234234213421341234")).toBe(false);
});

/*
isDate
*/
test("isDate: 12/12/2020", () => {
  expect(isDate("12/12/2020")).toBe(true);
});

test("isDate: 1/1/2025", () => {
  expect(isDate("1/1/2025")).toBe(true);
});

test("isDate: 11-2025", () => {
  expect(isDate("11-2025")).toBe(false);
});

test("isDate: 11/11/2025234", () => {
  expect(isDate("11/11/2025234")).toBe(false);
});

/*
isHexColor
*/

test("isHexColor: #123456", () => {
  expect(isHexColor("#123456")).toBe(true);
});


test("isHexColor: #FFF", () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test("isHexColor: #ZZZ", () => {
  expect(isHexColor("#ZZZ")).toBe(false);
});

test("isHexColor: #1234567", () => {
  expect(isHexColor("#1234567")).toBe(false);
});


