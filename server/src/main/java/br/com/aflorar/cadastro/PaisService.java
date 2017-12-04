package br.com.aflorar.cadastro;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaisService {

	@Autowired
	private PaisRepositorio paisRepositorio;
	
	public void inserir(Pais pais){
		paisRepositorio.save(pais);
	}
	
	public void deletar(String id){
		paisRepositorio.delete(id);
	}
	
	public List<Pais> listarTodos(){
		return paisRepositorio.findAll();
	}
}
