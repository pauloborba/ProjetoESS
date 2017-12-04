package br.com.aflorar.categoria;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/categoria")
public class CategoriaController {

	@Autowired
	private CategoriaService categoriaService;
	
	@GetMapping("/get_all")
	public List<CategoriaDomain> getAllCategorias(){
		System.out.println("Retornando todas as categorias");
		return this.categoriaService.getAllCategorias();
	}
	
	@PostMapping("/new")
	public CategoriaDomain insertCategoria(@RequestBody CategoriaDomain categoria) {
		this.categoriaService.insert(categoria);
		System.out.println("Nova categoria inserida");
		return categoria;
	}
	
	@DeleteMapping("/delete/{id}")
	public CategoriaDomain deleteCategoria(@PathVariable("id") String id) {
		CategoriaDomain deleted = this.categoriaService.getCategoriaById(id);
		this.categoriaService.delete(id);
		System.out.println("Categoria " + this.categoriaService.getCategoriaById(id).getNome() + " deletada");
		return deleted;
	}
	
	@PutMapping("/edit")
	public CategoriaDomain updateCategoria(@RequestBody CategoriaDomain categoria) {
		this.categoriaService.insert(categoria);
		System.out.println("Categoria " + categoria.getNome() + " atualizada");		
		return categoria;
	}
	
}
