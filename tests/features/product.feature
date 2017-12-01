Feature: Register Products - GUI
	As a manager
	I want to register and update my products
	So that they are available for sale

Scenario: Successful product registration - GUI
	Given I am at the product registration screen
	Given I cannot see a product "Calvin Klein Be 100ml" in the products list 
	When I try to register the product "Calvin Klein Be 100ml"
	Then I can see "Calvin Klein Be 100ml" in the products list

Scenario: Register an existing product - GUI
	Given I am at the product registration screen
	Given I can see "Calvin Klein Be 100ml" in the products list 
	When I try to register the product "Calvin Klein Be 100ml"
	Then I can see the register-existing-product error message

Scenario: Product registration with missing fields - GUI
	Given I am at the product registration screen
	Given I cannot see a product "Calvin Klein Be 100ml" in the products list 
	When I try to register "Calvin Klein Be 100ml" with missing fields
	Then I missing product-missing-fields error message

Scenario: Update an existing product - GUI
	Given I am at the product listing screen
	Given I can see "Calvin Klein Be 100ml" in the products list 
	When I try to edit the product "Calvin Klein Be 100ml"
	And I update the product fields
	Then I can see the update-existing-product confirmation message

Scenario: Failure in upload a product image - GUI
	Given I am at the product registration screen
	Given I cannot see a product "Calvin Klein Be 100ml" in the products list
	When I try to register "Calvin Klein Be 100ml" with a non-image file
	Then I get an error message asking to upload a image file
