package com.sergio.IkeVeo.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sergio.IkeVeo.entity.dao.IGafasDao;
import com.sergio.IkeVeo.entity.models.Gafas;

@Service
public class GafasServiceImpl implements IGafasService{
	
	@Autowired
	IGafasDao gafasDao;
	
	@Override
	public List<Gafas> getAll() {
		// TODO Auto-generated method stub
		return (List<Gafas>) gafasDao.findAll();
	}

	@Override
	public void addGafas(Gafas gafas) {
		// TODO Auto-generated method stub
		gafasDao.save(gafas);
	}

	@Override
	public void deleteGafas(int id) {
		// TODO Auto-generated method stub
		gafasDao.deleteById(id);
	}

	@Override
	public void updateGafas(int id, Gafas gafas) {
		// TODO Auto-generated method stub
		Optional<Gafas> b = gafasDao.findById(id);
		
		if(b.isPresent()) {
			gafas.setId(id);
			gafasDao.save(gafas);
		}
	}

	@Override
	public Gafas findById(int id) {
		// TODO Auto-generated method stub
		Optional<Gafas> g = gafasDao.findById(id);
		
		if(g.isPresent()) {
			return g.get();
		}
		return null;
	}

}
