const MainContent = document.querySelector('.main-content');
const Sidebar = document.querySelector('.side-bar');

const SkillsButton = document.querySelector(".skill-sets-button");
const InfoButton = document.querySelector(".info-button");
const ProjectsButton = document.querySelector(".projects-button");

const FocusSquare = document.querySelector('.background-shape');

var route = "info";

function getRotation(element) {
     const style = window.getComputedStyle(element);
     const transform = style.getPropertyValue('transform') || style.getPropertyValue('-webkit-transform') || style.getPropertyValue('-moz-transform') || style.getPropertyValue('-ms-transform') || style.getPropertyValue('-o-transform');

     if (transform && transform !== 'none') {
       const matrixValues = transform.match(/matrix\((.+)\)/);
       if (matrixValues && matrixValues[1]) {
         const values = matrixValues[1].split(',').map(Number);
         const a = values[0];
         const b = values[1];
         const angle = Math.atan2(b, a) * (180 / Math.PI);
         return angle;
       }
     }
     return 0; // Return 0 if no rotation is found.
}

const options = {
  root: MainContent,
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
    else {
      entry.target.classList.remove("fade-in");
    }})
});

observer.observe(document.querySelector('.main-content'));

SkillsButton.addEventListener("click", () => {
  MainContent.innerHTML = `
    <div class="skill-sets">
      <h2>Skill Sets</h2>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>HTML & CSS</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </div>
  `;
  observer.observe(MainContent);
  // Add the rotated class
  FocusSquare.classList.remove("rotating");

  FocusSquare.style.borderRadius = "0"; 
  FocusSquare.style.height = "14rem";
  FocusSquare.style.width = "17rem";
  FocusSquare.style.aspectRatio = "1/cos(30deg)";
  FocusSquare.style.clipPath = "polygon(50% -50%,100% 50%,50% 150%,0 50%)";

  document.body.style.backgroundColor = "var(--purple-50)"; // Change background color for skills section
  FocusSquare.style.background = "var(--purple-700)";
  Sidebar.style.backgroundColor = "var(--purple-500)"; // Change sidebar background color for skills section

  FocusSquare.animate([
    { transform: `rotate(${getRotation(FocusSquare)}deg)` },
    { transform: `rotate(${getRotation(FocusSquare) + 360}deg)` }
  ],{
    duration: 500, // match the transition duration
    easing: 'ease-in-out',
  })
  FocusSquare.classList.add("rotating");
});

InfoButton.addEventListener("click", () => {
  MainContent.innerHTML = `
    <div class="infomations">
                <div class="gradient-border"></div>
                <div class="mask">
                    <h3>I'm Khun Hein Kham</h3>
                    <p>Welcome to my portfolio! <br> I am a passionate developer with a <br>keen interest in creating innovative solutions.</p>
                    <p>Feel free to explore my projects and skills.</p>
                </div>
    </div>`;
    observer.observe(MainContent);
      // Add the rotated class
  FocusSquare.classList.remove("rotating");

  FocusSquare.style.borderRadius = "3rem"; 
  FocusSquare.style.width = "18rem";
  FocusSquare.style.height = "18rem";
  FocusSquare.style.aspectRatio = "1/1";
  FocusSquare.style.clipPath = "none";

  document.body.style.background = "var(--blue-50)";
  FocusSquare.style.backgroundColor = "var(--blue-700)"; // Change background color for info section
  Sidebar.style.backgroundColor = "var(--blue-500)"; // Change sidebar background color for info section

  FocusSquare.animate([
    { transform: `rotate(${getRotation(FocusSquare)}deg)` },
    { transform: `rotate(${getRotation(FocusSquare) + 360}deg)` }
  ],{
    duration: 500, // match the transition duration
    easing: 'ease-in-out',
  })
  FocusSquare.classList.add("rotating");
});

ProjectsButton.addEventListener("click", () => {
  MainContent.innerHTML = `
    <div class="infomations">
        <h1>No projects completed yet :(</h1>
    </div>`;
    observer.observe(MainContent);
    route = "projects";
      // Add the rotated class
  FocusSquare.classList.remove("rotating");

  FocusSquare.style.borderRadius = "14rem"; // Ensure the square is circular for rotation
  FocusSquare.style.width = "32rem"; 
  FocusSquare.style.height = "14rem"; 
  FocusSquare.style.clipPath = "none";

  document.body.style.background = "var(--red-50)";
  FocusSquare.style.backgroundColor = "var(--red-700)"; // Change background color for info section
  Sidebar.style.backgroundColor = "var(--red-500)"; // Change sidebar background color for info section


  FocusSquare.animate([
    { transform: `rotate(${getRotation(FocusSquare)}deg)` },
    { transform: `rotate(${getRotation(FocusSquare) + 360}deg)` }
  ],{
    duration: 500, // match the transition duration
    easing: 'ease-in-out',
  })
  FocusSquare.classList.add("rotating");
});



