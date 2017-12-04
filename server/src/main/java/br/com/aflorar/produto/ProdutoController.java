package br.com.aflorar.produto;

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
@RequestMapping(value = "/produto")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	@GetMapping("/get_all")
	public List<ProdutoDomain> getAllProdutos(){
		System.out.println("Retornando todas as produtos");
		return this.produtoService.getAllProdutos();
	}
	
	@PostMapping("/new")
	public ProdutoDomain insertProduto(@RequestBody ProdutoDomain produto) {
		this.produtoService.insert(produto);
		System.out.println("Nova produto inserida");
		return produto;
	}
	
	@DeleteMapping("/delete/{id}")
	public ProdutoDomain deleteProduto(@PathVariable("id") String id) {
		ProdutoDomain deleted = this.produtoService.getProdutoById(id);
		this.produtoService.delete(id);
		System.out.println("Produto " + this.produtoService.getProdutoById(id).getNome() + " deletada");
		return deleted;
	}
	
	@PutMapping("/edit")
	public ProdutoDomain updateProduto(@RequestBody ProdutoDomain produto) {
		this.produtoService.insert(produto);
		System.out.println("Produto " + produto.getNome() + " atualizada");
		return produto;
	}

}
