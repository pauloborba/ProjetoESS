Feature: Register Categories - GUI
	As a manager
	I want to register categories
	So that I can bind my products to them

Scenario: Successful category registration - GUI
	Given I am at the category registration screen
	Given I cannot see the category "Perfume" in the categories list 
	When I try to register the category "Perfume"
	Then I can see "Perfume" in the categories list

Scenario: Register an existing category - GUI
	Given I am at the category registration screen
	Given I can see "Perfume" in the categories list 
	When I try to register the category "Perfume"
	Then I can see the register-existing-category error message

Scenario: Category registration with missing fields - GUI
	Given I am at the category registration screen
	Given I cannot see the category "Perfume" in the categories list 
	When I try to register "Perfume" with missing fields
	Then I can see the category-missing-fields error message
	
Scenario: Add categories to products - GUI
	Given I am at the product "Calvin Klein Be 100ml" management screen
	When I try to add the category "Perfume" to the product "Calvin Klein Be 100ml"
	Then I can see "Perfume" in the product "Calvin Klein Be 100ml" categories list

Scenario: Remove categories from products - GUI
	Given I am at the product "Calvin Klein Be 100ml" management screen
	When I try to remove the category "Perfume" from the categories list
	Then I cannot see "Perfume" in the product "Calvin Klein Be 100ml" categories list

