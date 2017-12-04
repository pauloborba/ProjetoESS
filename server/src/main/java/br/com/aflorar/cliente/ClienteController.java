package br.com.aflorar.cliente;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.aflorar.produto.ProdutoDomain;


@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/cliente")
public class ClienteController {
	
	@Autowired
	public ClienteService clienteService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/novo")
	public Cliente insertCliente(@RequestBody Cliente cliente) {
		cliente.getCarrinho().setListaProdutos(new ArrayList<ProdutoDomain>());
		System.out.println("Cliente inserido com sucesso");
		clienteService.inserir(cliente);
		return cliente;
	}
	
	@PostMapping("/login")
	public Cliente logarCliente(@RequestBody Cliente cliente) {
		System.out.println(cliente.getEmail());
		System.out.println(cliente.getSenha());
		return clienteService.logar(cliente);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/editar")
	public Cliente editarCliente(@RequestBody Cliente cliente) {
		System.out.println("Cliente editado com sucesso");
		clienteService.inserir(cliente);
		return cliente;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/listarTodos")
	public List<Cliente> listarClientes(){
		return clienteService.listarTodos();
	}
	
	@DeleteMapping
	public boolean deletarTudo() {
		this.clienteService.deletarTudo();
		return true;
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
	public String deletarPais(@PathVariable("id") String id){
		System.out.println("Cliente deletado com sucesso");
		clienteService.deletar(id);
		return id;
	}
	
}
