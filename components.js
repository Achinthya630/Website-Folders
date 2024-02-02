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
                    </div>`,
    
    "Header2":`<div class = "header">
                <div class = "Header-Logo">
                <a href = "/1.HOMEPAGE/homepage.html"><img src = "IMAGES/HomePageLogowhite.jfif" class = "Header-Logo-Img"></a>
                    <div class = "Header-Title">GOVERNMENT INSTITUTIONS
                
                RAJANUKUNTE</div></div>
                <div class = "Header-Right">
                    <!-- <div class = "Header-content">ABOUT</div>
                    <div class = "Header-content">ADMISSION</div>
                    <div class = "Header-content">ACADEMICS</div>
                    <div class = "Header-content">DEPARTMENTS</div>
                    <div class = "Header-content">FACILITIES</div>
                    <div class = "Header-content">GALLERY</div> -->
                    <ul class = "Header-Right">
                        <li><a href = "/2.ABOUT PAGE/AboutPage.html">ABOUT</a></li>
                        <li><a href = "#">ADMISSION</a></li>
                        <li><a href = "/4.Academics/Academics.html">ACADEMICS</a></li>
                        <li><a href = "/5.Department/Department.html">DEPARTMENTS</a></li>
                        <li><a href = "/6.Facilities/Facilities.html">FACILITIES</a></li>
                        <li><a href = "/7.GALLERY/Gallery.html">GALLERY</a></li>
                    </ul>
                </div>
            </div>`,

    "Footer":`
    <div class="footer2">
        <!-- <div class = "Footer-Left">
            <div><img src = "IMAGES/HomePageLogowhite.jfif" class = "footerImg"></div>
            <div class = "FooterTitle">GOVERNMENT INSTITUTIONS RAJANUKUNTE</div>
        </div> -->

        <div class = "Contacts">
            
            <div class = "CallIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <div class="contactUs">Contact us:</div>
            
        
        </div>

        <div class = "ContactInfo">
            <div class = "ContactInfoType">
                <div>Govt PU College</div>
                <div>Govt High School</div>
                <div>Govt Primary School</div>
                <div>BOG</div>
            </div>
            <div class="ContactInfoType">
                <div>Mr Karthik Ankar</div>
                <div>Mr. Kantaraju B G</div>
                <div>Mr Shreenivasa G</div>
                <div>Mr. Rajendra Kumar R C</div>
            </div>
            <div class="ContactInfoType">
                <div>9342736575</div>
                <div>9845917244</div>
                <div>7204602103</div>
                <div>9901773645</div>
            </div>
          </div>
      </div>

      <!-- ----------------------- -->

      <footer class="footer">
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <p>&copy;2024 GOVERNMENT INSTITUTIONS RAJANUKUNTE</p>
      </footer>
`
    
}