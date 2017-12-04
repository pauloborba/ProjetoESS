package br.com.aflorar.produto;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
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
import org.springframework.web.multipart.MultipartFile;

import br.com.aflorar.categoria.CategoriaDomain;
import br.com.aflorar.categoria.CategoriaService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/produto")
public class ProdutoController {

	@Autowired
	private ProdutoService produtoService;
	
	@Autowired
	private CategoriaService categoriaService;
	
	@GetMapping("/get_all")
	public List<ProdutoDomain> getAllProdutos(){
		System.out.println("Retornando todas as produtos");
		return this.produtoService.getAllProdutos();
	}
	
	@PostMapping("/new")
	public ProdutoDomain insertProduto(@RequestBody ProdutoDomain produto) {
		System.out.println(produto.getDescricao());
		System.out.println(produto.getQuantidade());
		System.out.println(produto.getPreco());
		List<CategoriaDomain> cats = new ArrayList<>();
		for(CategoriaDomain c : produto.getCategorias()) {
			System.out.println(c.getId());
			cats.add(this.categoriaService.getCategoriaById(c.getId()));
		}
		produto.setCategorias(cats);
		System.out.println("Nova produto inserido");
		this.produtoService.insert(produto);
		return produto;
	}
	
	@PostMapping("/image/{produtoId}")
	public ProdutoDomain insertImagem(@RequestBody MultipartFile imagem, @PathVariable("produtoId") String id) {
		try {
			byte[] bytes = imagem.getBytes();

			Path path = Paths.get("./IMAGENS/"+id+FilenameUtils.getExtension(imagem.getOriginalFilename()));
			
			Files.write(path, bytes);
		} catch (IOException e) {
			System.out.println("ERR: Não pôde pegar os bytes");
			e.printStackTrace();
		}
		
		ProdutoDomain p = this.produtoService.getProdutoById(id);
		
//		System.out.println(FilenameUtils.getExtension(imagem.getAbsolutePath()));
		return null;
	}
	
	@DeleteMapping("/delete/{id}")
	public ProdutoDomain deleteProduto(@PathVariable("id") String id) {
		ProdutoDomain deleted = this.produtoService.getProdutoById(id);
		this.produtoService.delete(id);
		System.out.println("Produto " + this.produtoService.getProdutoById(id).getNome() + " deletado");
		return deleted;
	}
	
	@PutMapping("/edit")
	public ProdutoDomain updateProduto(@RequestBody ProdutoDomain produto) {
		this.produtoService.insert(produto);
		System.out.println("Produto " + produto.getNome() + " atualizado");
		return produto;
	}
	
}
