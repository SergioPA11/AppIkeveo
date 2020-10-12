package com.sergio.IkeVeo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sergio.IkeVeo.entity.models.Gafas;
import com.sergio.IkeVeo.entity.services.IGafasService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class GafasController {

	@Autowired
	IGafasService gafasService;
	// Here are the end-points
	
	@GetMapping("/api/gafas")
	private List<Gafas> getAll(){
		return gafasService.getAll();
	}
	
	@GetMapping("api/gafas/{id}")
	private Gafas findById(@PathVariable(value = "id")int id) {
		return gafasService.findById(id);
	}
	
	@PostMapping("/api/gafas")
	private void addGafas(Gafas gafas){
		gafasService.addGafas(gafas);
	}
	
	@DeleteMapping("/api/gafas/{id}")
	private void deleteGafas(@PathVariable(value = "id")int id) {
		gafasService.deleteGafas(id);
	}
	
	@PutMapping("api/gafas/{id}")
	private void updateGafas(@PathVariable(value = "id")int id, Gafas gafas) {
		gafasService.updateGafas(id, gafas);
	}
}
