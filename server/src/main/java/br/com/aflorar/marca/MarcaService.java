package br.com.aflorar.marca;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarcaService {
	
	@Autowired
	private MarcaRepository marcaRepository;

	public List<MarcaDomain> getAllMarcas() {
		return this.marcaRepository.findByExcluidoIsFalse();
	}

	public void insert(MarcaDomain marca) {
		this.marcaRepository.save(marca);
	}

	public void delete(String id) {
		MarcaDomain temp = this.marcaRepository.findById(id);
		temp.setExcluido(true);
		this.marcaRepository.save(temp);
	}
	
	public MarcaDomain getMarcaById(String id) {
		return this.marcaRepository.findById(id);
	}

}
