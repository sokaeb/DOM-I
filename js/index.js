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

const getTitle = document.querySelector('title')
getTitle.textContent = 'Great Idea'

const navLink1 = document.querySelector('a:nth-of-type(1)')
const navLink2 = document.querySelector('a:nth-of-type(2)')
const navLink3 = document.querySelector('a:nth-of-type(3)')
const navLink4 = document.querySelector('a:nth-of-type(4)')
const navLink5 = document.querySelector('a:nth-of-type(5)')
const navLink6 = document.querySelector('a:nth-of-type(6)')

navLink1.textContent = 'Services'
navLink2.textContent = 'Product'
navLink3.textContent = 'Vision'
navLink4.textContent = 'Features'
navLink5.textContent = 'About'
navLink6.textContent = 'Contact'

const pageTitle = document.querySelector('h1')
pageTitle.innerHTML = 'DOM <br> IS <br> AWESOME' 

const getStartedButton = document.querySelector('button')
getStartedButton.textContent = 'Get Started'

const firstImage = document.querySelector('#cta-img')
firstImage.src = 'img/header-img.png'

// adding h4 titles
const allTitles = document.querySelectorAll('h4')

// console.log(allTitles)
const title1 = allTitles[0]
title1.textContent ='FEATURES'

const title2 = allTitles[1]
title2.textContent = 'ABOUT'

const title3 = allTitles[2]
title3.textContent = 'SERVICES'

const title4 = allTitles[3]
title4.textContent = 'PRODUCT'

const title5 = allTitles[4]
title5.textContent = 'VISION'

const title6 = allTitles[5]
title6.textContent = 'CONTACT'

// adding p to each title
const allParas = document.querySelectorAll('p')

const featuresPara = allParas[0]
featuresPara.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const aboutPara = allParas[1]
aboutPara.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const servicesPara = allParas[2]
servicesPara.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const productPara = allParas[3]
productPara.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const visionPara = allParas[4]
visionPara.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'


          // middle page image
const middleImage = document.querySelector('#middle-img')
middleImage.setAttribute('src', 'img/mid-page-accent.jpg')

const contactSection = document.querySelectorAll('.contact p')

const firstContactPara = contactSection[0]
firstContactPara.innerHTML = '123 Way 456 Street <br> Somewhere, USA'

const secondContactPara = contactSection[1]
secondContactPara.textContent = '1 (888) 888-8888'

const thirdContactPara = contactSection[2]
thirdContactPara.textContent = 'sales@greatidea.io'

const copyright = document.querySelector('footer p')
copyright.textContent = 'Copyright Great Idea! 2018'

// adding new content

const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'

const nav = document.querySelector('nav')
nav.appendChild(blogLink)

const socialLink = document.createElement('a')
socialLink.textContent = 'Social'
socialLink.href = '#'

const navNew = document.querySelector('nav')
nav.appendChild(socialLink)

const navLinksColor = document.querySelectorAll('a')
Array.from(navLinksColor).forEach (links => {
  links.style.color = 'green';
  links.style.fontWeight = 'bold';
})