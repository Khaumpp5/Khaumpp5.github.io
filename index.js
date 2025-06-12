const MainContent = document.querySelector('.main-content');
const Sidebar = document.querySelector('.side-bar');

const SkillsButton = document.querySelector(".skill-sets-button");
const InfoButton = document.querySelector(".info-button");
const ProjectsButton = document.querySelector(".projects-button");

const FocusSquare = document.querySelector('.background-shape');

let route = "info";

function hoverAnimate(element,  span, side) {
  span.addEventListener("mouseover", () => {
    element.animate([
      { borderRadius: '2rem',
       },
      { borderRadius: '5px',
       }
    ], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    
    span.animate([
      { borderRadius: '2rem' },
      { borderRadius: '5px' }
    ], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'forwards'
    });

    side.animate([
      { borderRadius: '2rem',
       },
      { borderRadius: '0.8rem',
       }
    ], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  });

  span.addEventListener("mouseout", () => {
    element.animate([
      { borderRadius: '5px' },
      { borderRadius: '2rem' }
    ], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    span.animate([
      { borderRadius: '5px' },
      { borderRadius: '2rem' }
    ], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    side.animate([
      { borderRadius: '0.8rem' },
      { borderRadius: '2rem' }
    ], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  });
}

hoverAnimate(InfoButton, InfoButton.querySelector('.button-span'), SkillsButton);
hoverAnimate(SkillsButton, SkillsButton.querySelector('.button-span.skill'), InfoButton);
hoverAnimate(ProjectsButton, ProjectsButton.querySelector('.button-span'), SkillsButton);

const frontend = `
      <h3>frontend</h3>
      <ul>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>React</li>
      </ul>
      </div>`;

const backend = `
      <h3>backend</h3>
      <ul>
        <li>JavaScript/express.js</li>
        <li>Python</li>
      </ul>`;

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
  
    <h1>Which do you need?</h1>
    <div class="skillOptions">
    
    <button class="front-btn">
      <span class="button-span">
        Frontend
      </span>
    </button>

    <button class="backend-btn">
      <span class="button-span">
        Backend
      </span>
    </button>

    <button class="database-button">
      <span class="button-span">
        Database
      </span>
    </button>
  </div>
  
  </div>
  <div class="skill-sets-content">
    <h3>Select one<h3>
  </div>
  `;
  
  observer.observe(MainContent);

  FEDbutton = document.querySelector(".front-btn");
  BEDbutton = document.querySelector(".backend-btn")
  DATAbutton = document.querySelector(".database-button")
  const skillContent = document.querySelector('.skill-sets-content');

  FEDbutton.addEventListener("click", () => {
    skillContent.innerHTML = `
      <h3>Frontend Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>React</li>
      </ul>`;
    skillContent.style.height = "10rem";
  });

  BEDbutton.addEventListener("click", () => {
    skillContent.innerHTML = `
      <h3>Backend Skills</h3>
      <ul>
        <li>JavaScript/express.js</li>
        <li>Python</li>
      </ul>`
    skillContent.style.height = "10rem";
  });

  DATAbutton.addEventListener("click", () => {
    skillContent.innerHTML = `
      <h3>Database Skills</h3>
      <ul>
        <li>None</li>
      </ul>`
    skillContent.style.height = "5rem";
  });
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

  FocusSquare.style.borderRadius = "14rem";
  FocusSquare.style.width = "32rem"; 
  FocusSquare.style.height = "14rem"; 
  FocusSquare.style.clipPath = "none";

  document.body.style.background = "var(--red-50)";
  FocusSquare.style.backgroundColor = "var(--red-700)"; // Change background
  Sidebar.style.backgroundColor = "var(--red-500)"; // Change sidebar background color


  FocusSquare.animate([
    { transform: `rotate(${getRotation(FocusSquare)}deg)` },
    { transform: `rotate(${getRotation(FocusSquare) + 360}deg)` }
  ],{
    duration: 500, // match the transition duration
    easing: 'ease-in-out',
  })
  FocusSquare.classList.add("rotating");
});