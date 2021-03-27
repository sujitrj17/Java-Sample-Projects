package com.backend.DaoRepo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.model.Traveller;

@Repository
public interface DaoRepository extends JpaRepository<Traveller,Integer>{

	public List<Traveller> findByUsernameAndPassword(String u,String p);


}
