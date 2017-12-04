package br.com.aflorar.produto;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProdutoRepository extends MongoRepository<ProdutoDomain, String>{

	public ProdutoDomain findById(String id);
	
	public List<ProdutoDomain> findByExcluidoIsFalse();

}