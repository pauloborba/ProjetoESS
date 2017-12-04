import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {

    Given('I am at the product registration screen', function (callback) {
        expect();
    });

    Given('I cannot see a product {product} in the products list', function (product, callback) {
        expect();
    });

    When('I try to register the product {product}', function (product, callback) {
        expect();
    });

    Then('I can see {product} in the products list', function (product, callback) {
        expect();
    });

    Then('I can see the register-existing-product error message', function (callback) {
        expect();
    });

    When('I try to register {product} with missing fields', function (product, callback) {
        expect();
    });

    Then('I can see the product-missing-fields error message', function (callback) {
        expect();
    });

    Given('I am at the product listing screen', function (callback) {
        expect();
    });

    When('I try to edit the product {product}', function (product, callback) {
        expect();
    });

    When('I update the product fields', function (callback) {
        expect();
    });

    Then('I can see the update-existing-product confirmation message', function (callback) {
        expect();
    });

    When('I try to register {product} with a non-image file', function (product, callback) {
        expect();
    }); 

    Then('I get an error message asking to upload a image file', function (callback) {
        expect();        
    });
})