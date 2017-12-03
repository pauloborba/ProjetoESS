import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

defineSupportCode(function ({ Given, When, Then }) {
    
           Given('eu estou na página de {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
            
            expect();
           });

    
           When('tento me cadastrar com o cpf {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
             
            expect();
           });

    
           Then('E recebo uma mensagem de confirmação', function (callback) {
            
            expect();
           });

    
           Then('recebo uma mensagem de cpf já cadastrado', function (callback) {
             
            expect();
           });

    
           When('deixou o campo {stringInDoubleQuotes} em branco', function (stringInDoubleQuotes, callback) {

            expect();
           });

    
            Then('recebo uma mensagem de campos inválidos', function (callback) {

                expect();
            });
}) 