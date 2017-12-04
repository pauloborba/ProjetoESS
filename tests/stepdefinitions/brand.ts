import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {

    Given('I am at the brand registration screen', function (callback) {
        expect();
    });

    Given('I cannot see the brand {brand} in the brands list', function (brand, callback) {
        expect();
    });

    When('I try to register the brand {brand}', function (brand, callback) {
        expect();
    });

    Then('I can see {brand} in the brands list', function (brand, callback) {
        expect();
    });
    
    Given('I can see a brand {brand} in the brands list', function (brand, callback) {
        expect();
    });

    Then('I can see the register-existing-brand error message', function (callback) {
        expect();
    });

    Then('I can see the brand-missing-fields error message', function (callback) {
        expect();
    });

})