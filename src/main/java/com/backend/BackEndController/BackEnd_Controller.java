package com.backend.BackEndController;

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

import com.backend.ServiceInterface.ServiceInterface;
import com.backend.model.Traveller;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/traveller")
public class BackEnd_Controller {

	@Autowired
	ServiceInterface si;
	@PostMapping(value="/")
	public String addTraveller(@RequestBody Traveller t){
		return si.addTraveller(t);
	}

	@GetMapping(value="/")
	public List<Traveller> getAll(){
		return si.getAll();
	}

	@GetMapping(value="/{id}")
	public Traveller getById(@PathVariable int id){
		Traveller t= si.getById(id);
		System.out.println("fetching -"+t);
		return t;
	}
	
	@GetMapping(value="/{u}/{p}")
	public List<Traveller> login(@PathVariable String u,@PathVariable String p){
		return si.login(u, p);
	}
	
//	@PostMapping(value="/")
//	public int update(@RequestBody Traveller tr){
//		System.out.println(tr);
//		return si.update(tr);
//	}
	
	@DeleteMapping("/{id}")
	public List<Traveller> delete(@PathVariable int id){
		
		return si.delete(id);
	}
	
}
