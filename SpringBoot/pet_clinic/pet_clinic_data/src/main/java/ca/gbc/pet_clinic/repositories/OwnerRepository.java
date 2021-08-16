package ca.gbc.pet_clinic.repositories;

import ca.gbc.pet_clinic.model.Owner;
import org.springframework.data.repository.CrudRepository;

public interface OwnerRepository extends CrudRepository<Owner, Long> {

    Owner findByLastName(String lastName);

}
