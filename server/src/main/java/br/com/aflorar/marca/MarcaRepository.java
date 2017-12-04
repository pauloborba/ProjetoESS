package br.com.aflorar.marca;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MarcaRepository extends MongoRepository<MarcaDomain, String>{

	public MarcaDomain findById(String id);
	public List<MarcaDomain> findByExcluidoIsFalse();

}
