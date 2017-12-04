package br.com.aflorar.carrinho;

import java.io.Serializable;
import java.util.List;

import br.com.aflorar.produto.ProdutoDomain;

public class CarrinhoDomain implements Serializable {

	private static final long serialVersionUID = 3029628089958227579L;
	
	private List<ProdutoDomain> listaProdutos;
	
	public CarrinhoDomain() {
	}


	public List<ProdutoDomain> getListaProdutos() {
		return listaProdutos;
	}

	public void setListaProdutos(List<ProdutoDomain> listaProdutos) {
		this.listaProdutos = listaProdutos;
	}

}
