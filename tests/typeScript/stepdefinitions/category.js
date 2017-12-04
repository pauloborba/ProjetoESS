"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given('I am at the category registration screen', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I cannot see the category {category} in the categories list', function (category, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to register the category {category}', function (category, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see {category} in the categories list', function (category, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I can see a category {category} in the categories list', function (category, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to register the category {category} with blank fields', function (category, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see the blank-fields error message', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see the register-existing-category error message', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I am at the product {stringInDoubleQuotes} management screen', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to add the category {stringInDoubleQuotes} to the product {stringInDoubleQuotes}', function (stringInDoubleQuotes, stringInDoubleQuotes2, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see {stringInDoubleQuotes} in {stringInDoubleQuotes} categories list', function (stringInDoubleQuotes, stringInDoubleQuotes2, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to remove the category {stringInDoubleQuotes} from the categories list', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I cannot see {stringInDoubleQuotes} in {stringInDoubleQuotes} categories list', function (stringInDoubleQuotes, stringInDoubleQuotes2, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
});
