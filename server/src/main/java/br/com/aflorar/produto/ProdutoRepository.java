package br.com.aflorar.produto;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProdutoRepository extends MongoRepository<ProdutoDomain, String>{

	public ProdutoDomain findById(String id);
	public List<ProdutoDomain> findByMarcaId(String marcaId);
	public List<ProdutoDomain> findByMarcaNome(String marcaNome);
	public List<ProdutoDomain> findByCategoriasId(String categoriaId);
	public List<ProdutoDomain> findByCategoriasNome(String categoriaNome);
	public List<ProdutoDomain> findByExcluidoIsFalse();

}
