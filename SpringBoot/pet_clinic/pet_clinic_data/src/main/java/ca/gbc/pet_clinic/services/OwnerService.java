package ca.gbc.pet_clinic.services;
import ca.gbc.pet_clinic.model.Owner;

public interface OwnerService extends CrudService<Owner,Long> {

    Owner findByLastName(String lastName);


}
