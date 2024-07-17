// for fetch at our services part
document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/workouts")
    .then((response) => response.json())
    .then((data) => {
      const workoutsContainer = document.getElementById("workouts");
      data.forEach((workout) => {
        const workoutDiv = document.createElement("div");
        workoutDiv.classList.add("workout");

        workoutDiv.innerHTML = `
          <h3>${workout.name}</h3>
          <p>${workout.description}</p>
          <img src="${workout.imageUrl}" alt="${workout.name}">
          <p><strong>Schedule:</strong> ${workout.schedule}</p>
        `;

        workoutsContainer.appendChild(workoutDiv);
      });
    })
    .catch((error) => console.error("Error fetching workouts:", error));
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/blogPosts")
    .then((res) => res.json())
    .then((blog) => {
      const blogpostcontainer = document.getElementById("blogger");
      blog.forEach((blogpost) => {
        const blogdiv = document.createElement("div");
        blogdiv.classList.add("blogpost");

        blogdiv.innerHTML = `
        <h4><a href="https://sakarazenfitness.blogspot.com/2023/03/look-lean-and-clean.html" target="_blank">${blogpost.title}</a></h4>
        <p>${blogpost.content}</p>
        <p><i>Author:</i>${blogpost.author}</p>
        <p><strong>Date:</strong>${blogpost.date}</p>
        `;
        blogpostcontainer.appendChild(blogdiv);
      });
    });
});

// function getLink(id) {
//   switch (id) {
//     case 1:
//       return "https://sakarazenfitness.blogspot.com/2023/09/from-couch-potato-to-fitness-enthusiast.html";
//     case 2:
//       return "https://sakarazenfitness.blogspot.com/2023/08/gym-ettiquette.html";
//     case 3:
//       return "https://sakarazenfitness.blogspot.com/2023/03/look-lean-and-clean.html";
//   }
// }
// handling the form part
const form = document.getElementById("bookClassForm"); // adds an event that will listen to the submit event
form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents the form from submitting the usual way
  const className = document.getElementById("classname").value; // select each form and its id and get the value input by the user
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const yourName = document.getElementById("yourName").value;
  const email = document.getElementById("email").value;

  //my new object
  const newClassBooking = {
    className,
    date,
    time,
    yourName,
    email,
  };
  fetch("http://localhost:3000/classbookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newClassBooking),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Class booked:", data);
    });

  const message = document.getElementById("message");
  const sucess = `
    Class booked!<br>
    Class Name: ${className}<br>
    Date: ${date}<br>
    Time: ${time}<br>
    Your Name: ${yourName}<br>
    Email: ${email}`;
  message.innerHTML = sucess;
  form.reset();
});
