Feature: Register Brands - GUI
	As a manager
	I want to register brands
	So that I can register products with them

Scenario: Successful brand registration - GUI
	Given I am at the brand registration screen
	Given I cannot see the brand "Paco Rabanne" in the brands list 
	When I try to register the brand "Paco Rabanne"
	Then I can see "Paco Rabanne" in the brands list

Scenario: Register an existing brand - GUI
	Given I am at the brand registration screen
	Given I can see "Paco Rabanne" in the brands list 
	When I try to register the brand "Paco Rabanne"
	Then I can see the register-existing-brand error message

Scenario: Brand registration with missing fields - GUI
	Given I am at the brand registration screen
	Given I cannot see the brand "Paco Rabanne" in the brands list 
	When I try to register "Paco Rabanne" with missing fields
	Then I can see the brand-missing-fields error message