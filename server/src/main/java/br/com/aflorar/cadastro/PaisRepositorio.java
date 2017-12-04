package br.com.aflorar.cadastro;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface PaisRepositorio extends MongoRepository<Pais, String>{
	
	public List<Pais> findByNome(String nome);
	public Pais findById(String id);

}
