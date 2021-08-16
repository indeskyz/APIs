package ca.gbc.pet_clinic.bootstrap;





import ca.gbc.pet_clinic.model.*;
import ca.gbc.pet_clinic.services.PetTypeService;
import ca.gbc.pet_clinic.services.SpecialtyService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ca.gbc.pet_clinic.services.OwnerService;
import ca.gbc.pet_clinic.services.VetService;

import java.time.LocalDate;


@Component
public class DataLoader implements CommandLineRunner {


   private final OwnerService ownerService;
   private final VetService vetService;
   private final PetTypeService petTypeService;
   private final SpecialtyService specialtyService;

   public DataLoader(OwnerService ownerService, VetService vetService, PetTypeService petTypeService, SpecialtyService specialtyService) {
        this.ownerService = ownerService;
        this.vetService = vetService;
        this.petTypeService = petTypeService;
       this.specialtyService = specialtyService;
   }



    @Override
    public void run(String... args) throws Exception {

        int count = petTypeService.findAll().size();
        if(count == 0) {
            loadData();
        }
    }

    private void loadData() {
        PetType dog = new PetType();
        dog.setName("Dog");
        PetType saveDogType = petTypeService.save(dog);

        PetType cat = new PetType();
        cat.setName("Cat");
        PetType saveCatType = petTypeService.save(cat);

        Owner owner = new Owner();
        Owner owner1 = new Owner();

        owner.setFirstName("uhhhidunno");
        owner.setLastName("bigmoneybigcars");
        owner.setAddress("1234 fake street");
        owner.setTelephone("hotline bling");
        owner.setCity("Toronto");

        Pet ownersPet = new Pet();
        ownersPet.setName("INTERNET THUGGIN");
        ownersPet.setPetType(dog);
        ownersPet.setOwner(owner);
        ownersPet.setBirthday(LocalDate.now());
        owner.getPet().add(ownersPet);

        owner1.setLastName("peter");
        owner1.setLastName("fromPortland");
        owner1.setAddress("69420 blvd");
        owner1.setTelephone("647-690-6969");
        owner1.setCity("Toronto");

        Pet owners1Pet = new Pet();
        owners1Pet.setName("FEMMEBOT");
        owners1Pet.setPetType(cat);
        owners1Pet.setOwner(owner1);
        owners1Pet.setBirthday(LocalDate.now());
        owner1.getPet().add(ownersPet);


        ownerService.save(owner);
        ownerService.save(owner1);

        System.out.println("Owners have been loaded");

        Vet vet = new Vet();
        Vet vet1 = new Vet();

        vet.setFirstName("imsotired");
        vet.setLastName("cantthink");

        vet1.setFirstName("sue");
        vet1.setLastName("sleepy");

        vetService.save(vet);
        vetService.save(vet1);
        System.out.println("Veterinarian's have been loaded, also i dont know how to spell ");

        Specialty radiology = new Specialty();
        radiology.setDescription("Radiology");

        Specialty dentistry = new Specialty();
        radiology.setDescription("Dentistry");

        Specialty surgery = new Specialty();
        radiology.setDescription("Surgery");

        Specialty savedRadiology = specialtyService.save(radiology);
        Specialty savedDentistry = specialtyService.save(dentistry);
        Specialty savedSurgery = specialtyService.save(surgery);
    }
}
