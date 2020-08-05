const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navBar = document.querySelectorAll('nav a')
// adding new content 
const blogLink = document.createElement('a')  // blog link 
blogLink.textContent = 'Blog'
blogLink.href = '#'

const nav = document.querySelector('nav') // adding it to the nav
nav.appendChild(blogLink)

const socialLink = document.createElement('a') // social link
socialLink.textContent = 'Social'
socialLink.href = '#'

const newNav = document.querySelector('nav') // adding it to the nav
nav.prepend(socialLink)


          // nav bar

const navLink1 = navBar[0]
const navLink2 = navBar[1]
const navLink3 = navBar[2]
const navLink4 = navBar[3]
const navLink5 = navBar[4]
const navLink6 = navBar[5]

// const navLink1 = navBar.querySelector('a:nth-of-type(1)')
// const navLink2 = navBar.querySelector('a:nth-of-type(2)')
// const navLink3 = navBar.querySelector('a:nth-of-type(3)')
// const navLink4 = navBar.querySelector('a:nth-of-type(4)')
// const navLink5 = navBar.querySelector('a:nth-of-type(5)')
// const navLink6 = navBar.querySelector('a:nth-of-type(6)')

navLink1.textContent = siteContent['nav']['nav-item-1']
navLink2.textContent = siteContent['nav']['nav-item-2']
navLink3.textContent = siteContent['nav']['nav-item-3']
navLink4.textContent = siteContent['nav']['nav-item-4']
navLink5.textContent = siteContent['nav']['nav-item-5']
navLink6.textContent = siteContent['nav']['nav-item-6']

navBar = document.querySelectorAll('nav a');

// top section title and button
const topSection = document.querySelector('.cta');

const topSectTitle = topSection.querySelector('.cta-text h1');
const topSectImage = topSection.querySelector('#cta-img');
const topSectButton = topSection.querySelector('button');


topSectTitle.textContent = siteContent['cta']['h1']
topSectButton.textContent = siteContent['cta']['button']
topSectImage.setAttribute('src', siteContent['cta']['img-src'])

// middle section -- top-content
const midSectImg = document.querySelector('#middle-img')
const midSection = document.querySelector('.main-content .top-content')


const midSectTitle1 = midSection.querySelector('.text-content:nth-of-type(1) h4')
const midSectTitle2 = midSection.querySelector('.text-content:nth-of-type(2) h4')

// middle section -- bottom-content
const midSectionBottom = document.querySelector('.main-content .bottom-content')
const midSectTitle3 = midSectionBottom.querySelector('.text-content:nth-of-type(1) h4')
const midSectTitle4 = midSectionBottom.querySelector('.text-content:nth-of-type(2) h4')
const midSectTitle5 = midSectionBottom.querySelector('.text-content:nth-of-type(3) h4')

midSectTitle1.textContent = siteContent['main-content']['features-h4']
midSectTitle2.textContent = siteContent['main-content']['about-h4']
midSectTitle3.textContent = siteContent['main-content']['services-h4']
midSectTitle4.textContent = siteContent['main-content']['product-h4']
midSectTitle5.textContent = siteContent['main-content']['vision-h4']

// adding p to each title
const midSectPara1 = midSection.querySelector('.text-content:nth-of-type(1) p')
const midSectPara2 = midSection.querySelector('.text-content:nth-of-type(2) p')
const midSectPara3 = midSectionBottom.querySelector('.text-content:nth-of-type(1) p')
const midSectPara4 = midSectionBottom.querySelector('.text-content:nth-of-type(2) p')
const midSectPara5 = midSectionBottom.querySelector('.text-content:nth-of-type(3) p')

midSectPara1.textContent = siteContent['main-content']['features-content']
midSectPara2.textContent = siteContent['main-content']['about-content']
midSectPara3.textContent = siteContent['main-content']['services-content']
midSectPara4.textContent = siteContent['main-content']['product-content']
midSectPara5.textContent = siteContent['main-content']['vision-content']

          // middle page image
const midSectImage = midSectImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// contact information
const contactInfo = document.querySelector('.contact')

const contactTitle = contactInfo.querySelector('h4')
const contactAddress = contactInfo.querySelector('p:nth-of-type(1)')
const contactPhone = contactInfo.querySelector('p:nth-of-type(2)')
const contactEmail = contactInfo.querySelector('p:nth-of-type(3)')

contactTitle.textContent = siteContent['contact']['contact-h4']
contactAddress.textContent = siteContent['contact']['address']
contactPhone.textContent = siteContent['contact']['phone']
contactEmail.textContent = siteContent['contact']['email']

// footer section
const footerSection = document.querySelector('footer')

const footerCopy = footerSection.querySelector('p')
footerCopy.textContent = siteContent['footer']['copyright']

// adding new content
// const blogLink = document.createElement('a')  // blog link 
// blogLink.textContent = 'Blog'
// blogLink.href = '#'

// const nav = document.querySelector('nav') // adding it to the nav
// nav.appendChild(blogLink)

// const socialLink = document.createElement('a') // social link
// socialLink.textContent = 'Social'
// socialLink.href = '#'

// const navNew = document.querySelector('nav') // adding it to the nav
// navNew.appendChild(socialLink)

// changing nav link color
Array.from(navBar).forEach(links => {
  links.style.color = 'green';
})






// const getTitle = document.querySelector('title')
// getTitle.textContent = 'Great Idea'
