export function getFormValues() {
    const name = document.getElementById("user-name").value;
    const age = document.getElementById("user-age").value;
    const profession = document.getElementById('user-profession').value;
    const gender = document.getElementById('user-gender').value;
    const role = document.getElementById('user-role').value;

    return {
        name,
        age,
        profession,
        gender,
        role
    };
}


export function getRandomAvatar(gender) {
    const male = [
        "https://www.w3schools.com/howto/img_avatar.png",
        "https://www.w3schools.com/w3images/avatar2.png"
    ];

    const female = [
        "https://www.w3schools.com/w3images/avatar2.png",
        "https://www.w3schools.com/howto/img_avatar2.png",
        "https://www.w3schools.com/w3images/avatar6.png"
    ];

    const avatars = gender === "male" ? male : female;
    const randomIndex = Math.floor(Math.random() * avatars.length);

    return avatars[randomIndex];
}

export function createUserCard(user) {
    const userCard = document.createElement('div');
    const img = document.createElement('img');
    img.src = user.avatar;  
    img.alt = "User Avatar";
    userCard.className = "ui card user-card";

    userCard.innerHTML = `
        <div class="ui card"> 
          <div class="image"> 
            <img src="${user.avatar}">
          </div>
          <div class="content">
            <a class="header">${user.name}</a>
            <div class="meta">
              <span class="date">${user.profession}</span>
            </div>
            <div class="description">
              <div class="popup">Hello, I am ${user.sayHello()}</div>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <button class="ui basic green button profession-btn">Say Profession</button>
              <button class="ui basic red button delete-btn">Delete</button>
            </div>
          </div>
        </div>   
    `;
    
    return userCard;
}