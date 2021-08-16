package ca.gbc.pet_clinic.services.spring_data_jpa;

import ca.gbc.pet_clinic.model.PetType;
import ca.gbc.pet_clinic.services.PetTypeService;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@Profile("springdatajpa")
public class PetTypeSDJpaService implements PetTypeService {

    private final PetTypeService petTypeService;

    public PetTypeSDJpaService(PetTypeService petTypeService) {
        this.petTypeService = petTypeService;
    }

    @Override
    public Set<PetType> findAll() {
        Set<PetType> petTypes = new HashSet<>();
        petTypeService.findAll().forEach(petTypes::add);
        return petTypes;
    }

    @Override
    public PetType findByID(Long id) {
        return petTypeService.findByID(id);
    }

    @Override
    public PetType save(PetType object) {
        return petTypeService.save(object);
    }

    @Override
    public void delete(PetType object) {
        petTypeService.delete(object);
    }

    @Override
    public void deleteById(Long id) {
        petTypeService.deleteById(id);
    }
}
