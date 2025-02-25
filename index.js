
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


const showInfo =()=> 
    {
        let petNumb = document.querySelector("#petNum").value;
         petNumb = parseInt(petNumb) - 1;
         let selectedPetInfo = document.querySelector(".selectedPetInfo");
        let pet = petsData[petNumb];
       
       
        let str = ` ${pet.petName} the ${pet.specie} 
        is ${pet.age} years old. This ${pet.specie} weights
         ${pet.weightInKilos} kilos
        and is a  ${pet.breed} breed`;
    
    
        let dogs = document.querySelector(".str");
    
       dogs.innerHTML =str;
       console.log(str);
    
    }

