package br.com.aflorar.cliente;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClienteRepositorio extends MongoRepository<Cliente, String>{
	
	public List<Cliente> findByNome(String nome);
	public Cliente findById(String id);
	public Cliente findByEmail(String email);
}
