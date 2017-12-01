"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given('I am at the brand registration screen', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I cannot see the brand {stringInDoubleQuotes} in the brands list', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to register the brand {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see {stringInDoubleQuotes} in the brands list', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I can see a brand {stringInDoubleQuotes} in the brands list', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see the register-existing-brand error message', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to register the brand {stringInDoubleQuotes} with blank fields', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see the blank-fields error message', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
});
