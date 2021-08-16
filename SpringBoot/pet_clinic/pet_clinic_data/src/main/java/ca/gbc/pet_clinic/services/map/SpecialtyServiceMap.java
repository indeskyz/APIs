package ca.gbc.pet_clinic.services.map;

import ca.gbc.pet_clinic.model.Specialty;
import ca.gbc.pet_clinic.services.SpecialtyService;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class SpecialtyServiceMap extends AbstractMapService<Specialty,Long> implements SpecialtyService {

    @Override
    public Set<Specialty> findAll() {
        return super.findAll();
    }

    @Override
    public Specialty findByID(Long id) {
        return super.findById(id);
    }



    @Override
    public Specialty save(Specialty object) {
        return super.save(object);
    }

    @Override
    public void delete(Specialty object) {
        super.delete(object);
    }

    @Override
    public void deleteById(Long id) {
        super.deleteById(id);
    }
}
