
const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        specie:"Dog"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        specie:"Dog"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        specie: "Cat"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        specie:"Snake"
    },
    {
        petName: "Buhmie",
        age: 1 ,
        weightInKilos: 28,
        breed: "Bull-dog",
        specie:"Dog"
    }
];

 


const showInfo =(selectedPetInfo)=> 
    {
        
       
        let str = ` ${[selectedPetInfo].petName} the ${[selectedPetInfo].specie} 
        is ${[selectedPetInfo].age} years old. This ${[selectedPetInfo].specie} weights
         ${[selectedPetInfo].weightInKilos} kilos
        and is a  ${[selectedPetInfo].breed} breed`;
    
    
        let pet = document.querySelector(".str");
    
       pet.innerHTML =str;
    
    }
