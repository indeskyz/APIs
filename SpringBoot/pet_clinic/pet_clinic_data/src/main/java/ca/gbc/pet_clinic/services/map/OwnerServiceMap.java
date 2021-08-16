package ca.gbc.pet_clinic.services.map;

import ca.gbc.pet_clinic.model.Owner;
import ca.gbc.pet_clinic.model.Pet;
import ca.gbc.pet_clinic.services.OwnerService;
import ca.gbc.pet_clinic.services.PetService;
import ca.gbc.pet_clinic.services.PetTypeService;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class OwnerServiceMap extends AbstractMapService<Owner, Long> implements OwnerService {

    private final PetTypeService petTypeService;
    private final PetService petService;

    public OwnerServiceMap(PetTypeService petTypeService, PetService petService) {
        this.petTypeService = petTypeService;
        this.petService = petService;
    }


    @Override
    public Set<Owner> findAll() {
        return super.findAll();
    }

    @Override
    public void deleteById(Long id) {
        super.deleteById(id);
    }

    @Override
    public void delete(Owner object) {
        super.delete(object);
    }

    @Override
    public Owner findByID(Long id) {
        return super.findById(id);
    }

    @Override
    public Owner save(Owner object) {

        if (object != null) {
            //check if pet type exists
            if (object.getPet() != null) {
                object.getPet().forEach(pet -> {
                    if (pet.getPetType() != null) {
                        if (pet.getPetType().getId() == null) {
                            pet.setPetType(petTypeService.save(pet.getPetType()));
                        }
                    } else {
                        throw new RuntimeException("Pet Type is required");
                    }
                    //check if pet exists
                    if (pet.getId() == null) {
                        Pet savedPet = petService.save(pet);
                        pet.setId(savedPet.getId());

                    }
                });


            }
            return super.save(object);

        } else {
            return null;
        }


    }


    @Override
    public Owner findByLastName(String lastName) {
        return null;
    }
}

