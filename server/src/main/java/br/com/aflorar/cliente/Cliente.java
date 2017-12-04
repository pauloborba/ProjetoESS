package br.com.aflorar.cliente;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.Id;

import br.com.aflorar.cadastro.Endereco;
import br.com.aflorar.carrinho.CarrinhoDomain;


public class Cliente implements Serializable{

	private static final long serialVersionUID = -6643458411250852490L;
	
	@Id
	private String id;
	private String nome;
	private String email;
	private String senha;
	private String cpf;
	private String telefone;
	private String dataDeNascimento;
	private boolean administrador;
	private List<Endereco> endereco;
	private String sexo;
	private boolean ativo;
	
	private CarrinhoDomain carrinho;
		
	public Cliente(){
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getDataDeNascimento() {
		return dataDeNascimento;
	}

	public void setDataDeNascimento(String dataDeNascimento) {
		this.dataDeNascimento = dataDeNascimento;
	}

	public boolean isAdministrador() {
		return administrador;
	}

	public void setAdministrador(boolean administrador) {
		this.administrador = administrador;
	}

	public List<Endereco> getEndereco() {
		return endereco;
	}

	public void setEndereco(List<Endereco> endereco) {
		this.endereco = endereco;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public boolean isAtivo() {
		return ativo;
	}

	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}

	public CarrinhoDomain getCarrinho() {
		return carrinho;
	}

	public void setCarrinho(CarrinhoDomain carrinho) {
		this.carrinho = carrinho;
	}
}
