"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given('I am at the product registration screen', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I cannot see a product {stringInDoubleQuotes} in the products list', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to register the product {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see {stringInDoubleQuotes} in the products list', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I can see a product {stringInDoubleQuotes} in the products list', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see the register-existing-product error message', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to register the product {stringInDoubleQuotes} with blank fields', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I am at the product listing screen', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I can see the product {stringInDoubleQuotes} in the products list', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to edit the product {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I update the product fields', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I can see the update-existing-product confirmation message', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Given('I cannot see a product {stringInDoubleQuotes} in the products list', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    When('I try to register the product {stringInDoubleQuotes} with a non-image file', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
    });
    Then('I get an error message asking to upload a image file', function (callback) {
        // Write code here that turns the phrase above into concrete actions
    });
});
