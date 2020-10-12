package com.sergio.IkeVeo.entity.services;

import java.util.List;

import com.sergio.IkeVeo.entity.models.Gafas;

public interface IGafasService {
	public List<Gafas> getAll();

	public void addGafas(Gafas gafas);

	public void deleteGafas(int id);

	public void updateGafas(int id, Gafas gafas);

	public Gafas findById(int id);

}
