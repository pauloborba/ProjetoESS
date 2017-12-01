import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {

    Given('I am at the category registration screen', function (callback) {
        expect();
    });

    Given('I cannot see the category {category} in the categories list', function (category, callback) {
        expect();
    });

    When('I try to register the category {category}', function (category, callback) {
        expect();
    });

    Then('I can see {category} in the categories list', function (category, callback) {
        expect();
    });

    Then('I can see the register-existing-category error message', function (callback) {
        expect();
    });

    Then('I can see the category-missing-fields error message', function (callback) {
        expect();
    });

    Given('I am at the product {product} management screen', function (product, callback) {
        expect();
    });

    When('I try to add the category {category} to the product {product}', function (category, product, callback) {
        expect();
    });

    Then('I can see {category} in the product {product} categories list', function (category, product, callback) {
        expect();
    });

    When('I try to remove the category {category} from the categories list', function (category, callback) {
        expect();
    });

    Then('I cannot see {category} in the product {product} categories list', function (category, product, callback) {
        expect();
    });

    Then('I missing product-missing-fields error message', function (callback) {
        expect();
    });


})