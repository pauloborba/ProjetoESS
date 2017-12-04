Feature: cadastro cliente
    As cliente
    I want to criar uma nova conta
    So that eu possa comprar novos produtos

Scenario: Cadastrar um novo cliente - GUI
	Given eu estou na página de "cadastro cliente"
	When tento me cadastrar com o cpf "10104123451"
	Then E recebo uma mensagem de confirmação

Scenario: Cadastro com cpf já existente - GUI
	Given eu estou na página de "cadastro cliente"
	When tento me cadastrar com o cpf "10104123451"
	Then recebo uma mensagem de cpf já cadastrado

Scenario: Cadastrar cliente com campos inválidos- GUI
	Given eu estou na página de "cadastro cliente"
	When tento me cadastrar com o cpf "10104123451"
	And deixou o campo "email" em branco
	Then recebo uma mensagem de campos inválidos

