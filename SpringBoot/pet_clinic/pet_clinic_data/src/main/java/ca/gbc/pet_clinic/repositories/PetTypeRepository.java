package ca.gbc.pet_clinic.repositories;

import ca.gbc.pet_clinic.model.PetType;
import org.springframework.data.repository.CrudRepository;

public interface PetTypeRepository extends CrudRepository<PetType,Long> {
}
