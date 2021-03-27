package com.backend.ServiceInterface;

import java.util.List;

import com.backend.model.Traveller;

public interface ServiceInterface {

	public String addTraveller(Traveller t);
	public List<Traveller> getAll();
	public Traveller getById(int id);
	public List<Traveller> login(String u,String n);
	public int update(Traveller tr);
	public List<Traveller> delete(int id);
}
