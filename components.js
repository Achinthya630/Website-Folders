function getComponent(comp){
    let componentString = componentsJSON[comp];
    return componentString;
}

function displayComponent(IDName,componentString){
    let component = document.createElement("div");
    console.log(component);
    component.innerHTML = componentString;  
    document.getElementById(IDName).appendChild(component);
}

export {getComponent, displayComponent};

let componentsJSON = 
{
    "header" : `<div class = "homepage-header"><div></div><img src = "IMAGES/HomePageLogowhite.jfif" class = "website-logo"><div></div>
    </div>
    <!-- TITLE -->
    <div class = "homepage-header-content"><div></div>
        <div class = "homepage-header-title">GOVERNMENT INSTITUTIONS RAJANUKUNTE</div><div></div>

                </div>`,

    "Header-Navbar":`<div class = "homepage-navbar">
                    <button class = "homepage-navbar-button">ABOUT</button>    
                    <button class = "homepage-navbar-button">ADMISSION</button>    
                    <button class = "homepage-navbar-button">ACADEMICS</button>    
                    <button class = "homepage-navbar-button">DEPARTMENTS</button>  
                    <button class = "homepage-navbar-button">FACILITIES</button>   
                    <button class = "homepage-navbar-button">GALLERY</button>  
                    </div>`
}