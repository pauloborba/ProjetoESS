package br.com.aflorar.produto;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;

import br.com.aflorar.marca.MarcaDomain;

public class ProdutoDomain implements Serializable {
	
	private static final long serialVersionUID = 292198439277530906L;
	
	@Id
	private String id;
	@Indexed
	private String nome;
	@DBRef
	private MarcaDomain marca;
	private List<CategoriaDomain> categorias;
	private String descricao;
	private Float preco;
	private Integer quantidade;
	private String caminhoImagem;
	
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
	
	public MarcaDomain getMarca() {
		return marca;
	}
	
	public void setMarca(MarcaDomain marca) {
		this.marca = marca;
	}
	
	public List<CategoriaDomain> getCategoria() {
		return categorias;
	}
	
	public void setCategoria(List<CategoriaDomain> categorias) {
		this.categorias = categorias;
	}
	
	public void addCategoria(CategoriaDomain categoria) {
		this.categorias.add(categoria);
	}
	
	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public Float getPreco() {
		return preco;
	}
	
	public void setPreco(Float preco) {
		this.preco = preco;
	}
	
	public Integer getQuantidade() {
		return quantidade;
	}
	
	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}
	
	public String getCaminhoImagem() {
		return caminhoImagem;
	}
	
	public void setCaminhoImagem(String caminhoImagem) {
		this.caminhoImagem = caminhoImagem;
	}

	public boolean isExcluido() {
		return excluido;
	}

	public void setExcluido(boolean excluido) {
		this.excluido = excluido;
	}

}
