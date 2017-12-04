package br.com.aflorar.produto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;

	public List<ProdutoDomain> getAllProdutos() {
		return this.produtoRepository.findByExcluidoIsFalse();
	}

	public void insert(ProdutoDomain produto) {
		this.produtoRepository.save(produto);
	}

	public void delete(String id) {
		ProdutoDomain temp = this.produtoRepository.findById(id);
		temp.setExcluido(true);
		this.produtoRepository.save(temp);
	}
	
	public ProdutoDomain getProdutoById(String id) {
		return this.produtoRepository.findById(id);
	}

}
