package br.com.aflorar.categoria;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService {
	
	@Autowired
	private CategoriaRepository categoriaRepository;

	public List<CategoriaDomain> getAllCategorias() {
		return this.categoriaRepository.findByExcluidoIsFalse();
	}

	public void insert(CategoriaDomain categoria) {
		this.categoriaRepository.save(categoria);
	}

	public void delete(String id) {
		CategoriaDomain temp = this.categoriaRepository.findById(id);
		temp.setExcluido(true);
		this.categoriaRepository.save(temp);
	}
	
	public CategoriaDomain getCategoriaById(String id) {
		return this.categoriaRepository.findById(id);
	}

}
