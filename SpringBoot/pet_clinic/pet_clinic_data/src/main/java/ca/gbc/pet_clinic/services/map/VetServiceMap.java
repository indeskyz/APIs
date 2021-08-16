package ca.gbc.pet_clinic.services.map;

import ca.gbc.pet_clinic.model.Specialty;
import ca.gbc.pet_clinic.services.SpecialtyService;
import org.springframework.stereotype.Service;
import ca.gbc.pet_clinic.model.Vet;
import ca.gbc.pet_clinic.services.VetService;

import java.util.Set;
@Service
public class VetServiceMap extends AbstractMapService<Vet,Long> implements VetService {

    private final SpecialtyService specialtyService;

    public VetServiceMap(SpecialtyService specialtyService) {
        this.specialtyService = specialtyService;
    }

    @Override
    public Set<Vet> findAll() {
        return super.findAll();
    }

    @Override
    public void deleteById(Long id) {
        super.deleteById(id);
    }

    @Override
    public void delete(Vet object) {
        super.delete(object);
    }

    @Override
    public Vet findByID(Long id) {
        return super.findById(id);
    }

    @Override
    public Vet save(Vet object) {

        if(object.getSpecialties().size()>0){
            object.getSpecialties().forEach(specialty -> {
                if(specialty.getId() ==null){
                    Specialty savedSpecialty = specialtyService.save(specialty);
                    specialty.setId(savedSpecialty.getId());
                }
            });
        }

        return super.save(object);
    }
}
