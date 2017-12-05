package br.com.aflorar.marca;

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
@RequestMapping(value = "/marca")
public class MarcaController {

	@Autowired
	private MarcaService marcaService;
	
	@GetMapping("/get_all")
	public List<MarcaDomain> getAllMarcas(){
		System.out.println("Retornando todas as marcas");
		return this.marcaService.getAllMarcas();
	}
	
	@PostMapping("/new")
	public MarcaDomain insertMarca(@RequestBody MarcaDomain marca) {
		this.marcaService.insert(marca);
		System.out.println("Nova marca inserida");
		return marca;
	}
	
	@DeleteMapping("/delete/{id}")
	public MarcaDomain deleteMarca(@PathVariable("id") String id) {
		MarcaDomain deleted = this.marcaService.getMarcaById(id);
		this.marcaService.delete(id);
		System.out.println("Marca " + this.marcaService.getMarcaById(id).getNome() + " deletada");
		return deleted;
	}
	
	@PutMapping("/edit")
	public MarcaDomain updateMarca(@RequestBody MarcaDomain marca) {
		this.marcaService.insert(marca);
		System.out.println("Marca " + marca.getNome() + " atualizada");
		return marca;
	}
	
}
