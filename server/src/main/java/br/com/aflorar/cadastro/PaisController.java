package br.com.aflorar.cadastro;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/pais")
public class PaisController {
	
	@Autowired
	public PaisService paisService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/novo")
	public void insertRadio(@RequestBody Pais pais) {
		System.out.println("Pais inserido com sucesso");
		paisService.inserir(pais);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/editar")
	public void editarPais(@RequestBody Pais pais){
		System.out.println("Pais editado com sucesso");
		paisService.inserir(pais);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/listarTodos")
	public List<Pais> listarRadios(){
		return paisService.listarTodos();
	}
	
	@RequestMapping(method = RequestMethod.DELETE, value = "/delete/{id}")
	public void deletarPais(@PathVariable("id") String id){
		System.out.println("Pais deletado com sucesso");
		paisService.deletar(id);
	}

}
