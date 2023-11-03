var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
let currentImageIndex = 0;
let currentProjectname = 'project1';
let boucle;
let boucle2;
var projectlinks = document.getElementsByClassName("project-links");



function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function openimages(projectname){
    for(projectlink of projectlinks){
        projectlink.classList.remove("active-project-link");
    }
    event.currentTarget.classList.add("active-project-link");
    currentProjectname = projectname;
    currentImageIndex = 0;
    clearTimeout(boucle);
    clearTimeout(boucle2);
    showImages(currentProjectname);
    showDescription(currentProjectname);
}

/*const projectImages = {
    project1: ['iphone12 (2).png', 'iphone12 (3).png'],
    project2: ['iphone12 (4).png', 'iphone12 (5).png'],
    project3: ['iphone12 (all).png', 'iphone12 (main).png'],
    project4: ['iphone12 (3).png', 'iphone12 (4).png'],
};*/

const projectDescriptions = {
    project1: ["project 1 ","description"],
    project2: ["project 2 ","description"],
    project3: ["project 3 ","description"],
    project4: ["project 4 ","description"],
};

function showImages(projectname) {    
    //const projectImagesArray = projectImages[projectname];
    imageElement = document.getElementById('image-container');
    //imageElement.src = projectImagesArray[currentImageIndex];
    imageElement.src = "https://placehold.co/1920x1080";
    imageElement.style.opacity = 1;
        boucle2 = setTimeout(() => {
            imageElement.style.opacity = 0;
        }, 4500);
        
        //console.log(currentProjectname+" "+currentImageIndex);
        currentImageIndex = (currentImageIndex === 0) ? 1 : 0;
        boucle = setTimeout(() => showImages(currentProjectname), 5000);
}
function showDescription(projectname){
    const projectName = projectDescriptions[projectname][0];
    const projectDescription = projectDescriptions[projectname][1];
    titleElement = document.getElementById('title-container');
    descriptionElement = document.getElementById('description-container');
    titleElement.innerText = projectName;
    descriptionElement.innerHTML = projectDescription;
}
