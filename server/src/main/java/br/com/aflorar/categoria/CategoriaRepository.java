package br.com.aflorar.categoria;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoriaRepository extends MongoRepository<CategoriaDomain, String>{

	public CategoriaDomain findById(String id);
	public List<CategoriaDomain> findByExcluidoIsFalse();

}
