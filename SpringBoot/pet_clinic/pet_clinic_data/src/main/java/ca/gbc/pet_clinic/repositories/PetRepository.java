package ca.gbc.pet_clinic.repositories;

import ca.gbc.pet_clinic.model.Pet;
import org.springframework.data.repository.CrudRepository;

public interface PetRepository extends CrudRepository<Pet,Long> {


}
