# Community Garden

## Purpose

This website is based on the Resume Walkthrough Project provided by Code Institute, with minor changes. My goal in building it was to become familiar with Bootstrap, before moving on to building my own projects using Bootstrap. Bootstrap has been used in combination with other CSS in order to create a site that looks original. 

The purpose of the Resume website is to:
* clearly communicate skills and job history.
* provide multiple methods of contact.
* showcase personality and skill through the website itself. 
* provide an option to download the individual's CV.
* provide links to the individual's social media and Github pages. 

The website is targeted at potential employers and recruiters, as well as fellow developers who would like to collaborate on a project. 

## User Stories 

* As a recruiter or employer, I want to know what makes this individual special so I can decide whether they are a good fit for my company.
* As a recruiter, I want to know this individual's work history and skills so that I know whether they might be suitably qualified and skilled for a job. 
* As a visiting developer, I want to know how to send a proposal so that we can build together.
* As a recruiter or employer, I want to know how to contact this individual so that I can schedule an interview or get more information.
* As a recruiter or employer, I want to know where to download their CV so that I share their information with others I work with.  

## Features

### Navigation Bar

* The navigation bar is large, colorful and in a prominent location on each page. 
* It contains links to the Home page, Resume page, Contact page and a Download CV button. 

### Name, Job Title and Profile Photo

* The individual's name and job title form the main heading on each page.
* A large professional photo appears at the top of each page.
* The design is intended to mimic the style and arrangement of information on a typical CV.

### Footer

* The same footer appears at the bottom of each page.
* It contains a short 'About' summary, a 'CV Download' button, and links to social media pages.

### 'Personal Information' and 'About Me' Sections

* The Home page displays both Personal Information and About Me sections. 
* The Personal Information section shows the person's name, address and phone number.
* The About Me section contains texts that answer the questions 'What do I do?', 'How do I do it?' and 'Why Hire Me?'

### Work History Timeline

* The Resume page contains a Work History Timeline.
* The timeline shows key places of employment, job titles and dates of work, up to the present.

### Skills Section

* The Resume page contains a Skills sections.
* This section lists various programming languages.
* The level of skill attained in each language is shown using a Progress Bar. 

### Contact Form

* The Contact page contains a form allowing input of a site visitor's email address and a project proposal.
* Visitors are invited to suggest projects to collaborate on. 

## Option to Download PDF of CV

* Visitors can download a PDF of the individual's CV simply by clicking on the 'Download' button in the main nav bar on each page.
* There is also a download button in the footer of each page.
* Clicking 'Download' opens a PDF in a new tab in the visitor's browser.

## Typography and Color Schemes 

### Typography

* Montserrat is used for headings and Merriweather for body text. 

### Color Scheme

* Green is used as the base color and background color for the navigation and footer sections, and appears in all of the images. Green was chosen due to its association with nature and gardens, fitting the theme of the website. 
* Orange is used as an accent color and for call-to-action buttons as it provides a strong contrast with green.
* All background and foreground color combinations on the website meet WCAG AA color contrast requirements. Color contrast was checked using [Web AIM](https://webaim.org/resources/contrastchecker/).

## Wireframes

### Page 1 of 3: The Home Page 

![The home page.](docs/home-page.png) 

### Page 2 of 3: Our Story

![Our Story on page 2.](docs/page2-new-our-story.png) 

### Page 3 of 3: Contact Us

![Contact Us on page 3.](docs/page3-contact-us.png)

### Subscribe Confirmation Page

![Subscribe confirmation page.](docs/confirmation-page.png)

### Pages 1 and 3 on a smaller mobile phone screen 

![The home page and Contact Us pages on a small phone screen.](docs/mobile-view-homepg-contact.png)

## Technology

* HTML was used to structure the pages and add features.
* CSS was used to style the pages and features.
* Github was used to store and to share the repository.
* Gitpod was used to edit the code.
* Balsamiq was used to create wireframes during the planning phase.
* Chrome DevTools was used to check responsiveness and for debugging.
* Font Awesome was used to source icons.
* Google Maps is used to provide an interactive map showing the location of the garden.

## Testing

### Code Validation

* The HTML code was validated using the [W3C Markup Validation Service](https://validator.w3.org/). No errors were found.
* The CSS code was validated using the [W3C CSS Validation Service](https://validator.w3.org/). No errors were found.

<p>
<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>

### Test Cases 

#### The Home Page

1. Open the home page. The user is shown the hero image and main heading. The user notices that there is more text below the hero image. 
2. Scroll down. The user is shown the What We Do section.
3. Read the What We Do section. The user notices that there is an image below. 
4. Scroll down. The user is shown the What We Do image.
5. Look at the image. The user notices that there is more text below.
6. Scroll down. The user is shown the Who We Are section text.
4. Read the Who We Are section. The user notices that there are social media icons in the footer.
5. Hover the mouse over the Facebook icon. A 'Visit our Facebook page' message appears.
6. Click on the Facebook icon. The user is directed to the Facebook page.

![Hero image on Home page](docs/homepg1.png)
![What We Do section](docs/home-pg-2.png)
![Who We Are section](docs/home-pg-3.png)

#### Our Story

1. Open the home page. The user notices the 'Our Story' button in the navigation bar.
2. Click on 'Our Story'. The user is directed to the Our Story page.
3. Read the heading and opening text. The user notices that there is an image below. 
4. Scroll down. The user is shown an image.
4. Look at the image. The user notices that there is more text below. 
5. Scroll down. The user is shown the next part of the article text.
5. Read the text. The user notices that there is another image below. 
6. Scroll down. The user is shown the second article image.
6. Look at the image. The user notices the social media icons at the bottom of the page.

![Hero image on Home page](docs/homepg1.png)
![Our Story page heading](docs/story-pg-1.png)
![Our Story article part 1](docs/story-pg-2.png)
![Our Story article part 2](docs/story-pg-3.png)

#### Contact Us

1. Open the home page. The user notices the Contact Us button in the navigation bar.
2. Click on the Contact Us button. The user is directed to the Contact page.
2. Read the subscribe section heading. The user notices the subscribe form.
3. Enter your first name and click subscribe. A message appears asking the user to enter their last name.
4. Enter your last name and click subscribe. A message appears asking the user to enter their email address.
5. Enter your email address and click subscribe. The user is directed to the Confirmation page.

![Hero image on home page](docs/new-home-pg.png) 
![Subscribe form on Contact page](docs/new-contact-pg.png)
![Enter email address in Subscribe form](docs/new-contact-pg-3.png) 
![Confirmation page](docs/new-confirm-pg.png)

### Fixed Bugs

* The list items in the What We Do section appeared on top of the fixed navigation bar when they reached the top of the page instead of disappearing under it. This was fixed by adding a z-index style declaration (with high positive value) to the CSS code applied to the navigation bar.

* A white space appeared under the footer bar on the Contact and Confirmation pages when viewing the website on the iPad Pro emulator in Chrome DevTools. This was fixed by increasing the size of the iframe map so that it occupied more vertical space. 

### Supported Screens and Browsers

* A mobile-first approach was taken for design. Media queries were used to accommodate screen widths from 280px up to 1200px. 
* The website was tested on the following devices using the emulator in Chrome DevTools: Google Pixel 5, iPhone 12 Pro, Samsung Galaxy S8, Samsung Galaxy A51, Samsung Galaxy S20 Ultra, iPad, iPad Air, Galaxy Fold, iPad Pro.
* It has not been tested on browsers other than Chrome. 

## Deployment

### Via Gitpod

To open up the site in Gitpod, follow the following steps:

1. Go to http://github.com.
2. Open up the 'SiobhanP1/community-garden' repository.
3. Click 'Gitpod' to open up a workspace in Gitpod.
4. Enter the command `python3 -m http.server` in the terminal to open a port.
5. A small box will appear. 
6. Click 'Open in browser' to open the site in a new tab. 

### Via Github Pages

The site was deployed to Github Pages by following the steps below.

1. Open up the 'SiobhanP1/community-garden' repository in Github.
2. Click 'Settings'.
3. Click 'Pages' (located in the sidebar under Code and Automation).
4. Select 'Deploy from Branch' from the Source drop-down menu.
5. Select 'Main' from the Branch drop-down menu.
6. Click 'Save'.
7. Wait a minute then refresh the page to see the site link.

The live link is https://siobhanp1.github.io/community-garden/.

## Credits

### Images

* The hero image of [tomatoes](https://unsplash.com/photos/4LiUI-Y2mI8) on the home page was taken from [Unsplash](http://www.unsplash.com). 
* 
