package br.com.aflorar.cadastro;

import java.io.Serializable;

public class Pais implements Serializable{

	private static final long serialVersionUID = -3900825201511866219L;
	
	private String id;
	private String nome;
	
	public Pais(){
		
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
}
