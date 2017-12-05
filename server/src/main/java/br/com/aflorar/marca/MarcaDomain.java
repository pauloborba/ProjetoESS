package br.com.aflorar.marca;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

public class MarcaDomain implements Serializable{

	private static final long serialVersionUID = -5924854317494397614L;
	
	@Id
	private String id;
	@Indexed
	private String nome;
	
	private boolean excluido = false;

	public String getId() {
		return id;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}

	public boolean isExcluido() {
		return excluido;
	}

	public void setExcluido(boolean excluido) {
		this.excluido = excluido;
	}

}
