package br.com.aflorar.cliente;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepositorio clienteRepositorio;
	
	public void inserir(Cliente cliente){
		clienteRepositorio.save(cliente);
	}
	
	public void deletar(String id){
		clienteRepositorio.delete(id);
	}
	
	public List<Cliente> listarTodos(){
		return clienteRepositorio.findAll();
	}

	public void deletarTudo() {
		this.clienteRepositorio.deleteAll();
	}

	public Cliente logar(Cliente cliente) {
		Cliente res = null;
		Cliente aux = this.clienteRepositorio.findByEmail(cliente.getEmail());
		
		System.out.println(aux.getEmail());
		System.out.println(aux.getSenha());
		
		if (aux != null) {
			if (aux.getSenha().equals(cliente.getSenha())) {
				res = aux;
			}
		}
		
		return res;
	}

}
