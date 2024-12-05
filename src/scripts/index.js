
import { User, Director, Assistant, Designer,Employee} from './app.js';
import {getFormValues, getRandomAvatar, createUserCard} from './utils.js';




function getUserBasedOnRole(name, age, profession, gender, role, avatar) {  
    let user;
    switch (role) {
        case 'Director':
            user = new Director(name, age, profession, gender, role, avatar);
            break;
        case 'Assistant':
            user = new Assistant(name, age, profession, gender, role, avatar);
            break;
        case "Designer":
            user = new Designer(name, age, profession, gender, role, avatar);
            break;
        case 'Employee':
            user = new Employee(name, age, profession, gender, role, avatar);
            break;    
        default:
            alert("Invalid role.");
            break;
    }
    return user;
}





function handleCreateNewUser(event) {
    event.preventDefault(); 

    const { name, age, profession, gender, role } = getFormValues();
    const avatar = getRandomAvatar(gender);

    const user = getUserBasedOnRole(name, age, profession, gender, role, avatar);
    const userCard = createUserCard(user);

    
    userCard.querySelector(".profession-btn").addEventListener("click", () => {
        alert(user.sayProfession());
    });

 
    userCard.querySelector(".delete-btn").addEventListener("click", () => {
        userCard.remove();
    });

    document.getElementById("users-container").appendChild(userCard);

    return userCard;
}


document.getElementById('user-form').addEventListener('createUser', handleCreateNewUser);


document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();  
    const createUserEvent = new CustomEvent('createUser');
    document.getElementById('user-form').dispatchEvent(createUserEvent);
}); 