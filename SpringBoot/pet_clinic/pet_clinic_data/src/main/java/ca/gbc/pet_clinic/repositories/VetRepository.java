package ca.gbc.pet_clinic.repositories;

import ca.gbc.pet_clinic.model.Vet;
import org.springframework.data.repository.CrudRepository;

public interface VetRepository extends CrudRepository<Vet,Long> {
}
