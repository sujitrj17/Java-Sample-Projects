package com.backend.ServiceInterface;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.DaoRepo.DaoRepository;
import com.backend.model.Traveller;

@Service
public class ServiceImpl implements ServiceInterface{

	@Autowired
	DaoRepository dao;
	
	@Override
	public String addTraveller(Traveller t) {
dao.save(t);
System.out.println("traveller added - "+t);
		return t.getName();
	}

	@Override
	public List<Traveller> getAll() {
		
		return dao.findAll();
	}

	@Override
	public Traveller getById(int id) {
		Traveller t = dao.findById(id).get();
		return t;
	}

	@Override
	public List<Traveller> login(String u, String p) {
		System.out.println();
		return dao.findByUsernameAndPassword(u,p);
	}

	@Override
	public int update(Traveller tr) {
		dao.save(tr);
		return 0;
	}

	@Override
	public List<Traveller> delete(int id) {
		dao.deleteById(id);
		System.out.println("id "+id +" is deleted");
		return dao.findAll();
	}

}
