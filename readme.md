# Test Yourself

Website Url: [https://jevpr.github.io/Test-Yourself/](https://jevpr.github.io/Test-Yourself/)

## Table of Contents

### 1. [Project Overview](#project-overview)

- [Purpose](#purpose)
- [Audience](#audience)

### 2. [Design](#design)

- [Colour Palette](#colour-palette)
- [Balsamiq Wireframes](#balsamiq-wireframes)

### 3. [Features](#features)

- [Header and Footer](#header-and-footer)
- [Landing Page](#landing-page)
- [Profiles](#profiles)
- [About and Contact](about-and-contact)
- [Under Construction](#under-construction)
- [Features left to implement](#features-left-to-implement)

### 4. [Testing](#testing)

- [Responsive](#responsivity)
- [Browser Friendly](#browser-friendly)
- [Accessible](#accessible)
- [Validator Testing](#validator-testing)
- [Unfixed Bugs](#unfixed-bugs)

### 5. [GitHub and Deployment](#github-and-deployment)

### 6. [Credits](#credits)

- [Media](#media)
- [Content](#content)

## Project Overview

### Purpose:


Test Yourself is an easy-to-use quiz-building website. With it, users can build their own quizzes by creating questions, and assigning right and wrong answers. 

Once the quiz is built, they can then present this quiz to anyone they want to test. After the quiz is taken, Test Yourself gives a mark, a percentage, and detailed feedback on each of the questions. 

I wanted the site to look clean, be clear and informative, and be easy to use.

### Audience

My target audience was teachers and students. Especially, I wanted to create a tool that could be used in a classroom as part of a lesson. 

- The site needed an <em>accessible style</em> that would be appropriate for all users. I took inspiration from the [BBC Bitesize website](https://www.bbc.co.uk/bitesize/topics/zx24xg8/articles/zprj7ty#zhrkjfr) layouts and [Government Website](https://www.gov.uk/).
- Layout, colours, and formatting needed to <em>foster focus and ease of use</em>.

## Design

### Colour Palette

When considering color palettes, I wanted something which was education-adjacent, but not cold - something which encouraged engagement and focus. For that reason, I started with a middle-green (#12AF26).

For an accent colour, I chose orange (#FFAD0A). I wanted to avoid the typical green-red pairing for right-wrong for two reasons: 
1. Accessibility for those with red-green color blindness. 
2. To avoid pairing the negative associations of 'red' with getting answers wrong. Every aspect of the quiz design was considered with positive learning in mind. 

So, I chose the [following colour palette](https://coolors.co/12af26-dafbde-ffad0a-ffcf70-ffffff-000000):

![The website's colour palette- green, light green, orange, light orange, white, black](<assets/images/readmeImages/colourSchemeTestYourself.png>)

The shade and brightness of each colour was chosen to ensure a range of brightness and hue. The colour palette passed accessibility checks on lighthouse: 

![A picture showing an 100/100 score on Lighthouse for accessibility](<assets/images/readmeImages/accessibilityLighthouse.png>)

### Balsamiq Wireframes

The following picture shows some of my initial mobile-first website design:

![An overview of the website's initial layout - a mobile sized page for landing page](<assets/images/readmeImages/balsamiqOne.png>)

![An overview of the website's initial layout - with mobile sized pages for quiz building page](<assets/images/readmeImages/balsamiqTwo.png>)

<br>
<br>

## Features

### Header and Footer

The only site-wide navigation for Test Yourself is in the logo, which when clicked will take you to the home page. This is placed on the right hand side of the header, so right-handed mobile users can easily reach it with their thumb. 

![A picture of the header, with 'Test Yourself' text as a logo on the right hand side](<assets/images/readmeImages/header.png>)

For now, the site operates with linear progression - from quiz creation to result delivery. As the project grows, this will change and a navigation bar will be added. 

In the footer, there is a link to my GitHub. 

![A picture of the header, with 'Jasmine Price 2024' text on the right hand side](<assets/images/readmeImages/footer.png>)


***
### Landing Page

The Landing page uses minimal text and a simple layout to make the purpose of the site clear. 



![Landing Page responsive](<assets/images/readmeimages/Landing Page.png>)

***

### Profiles

This was the most challenging page to make resopnsive, as it features a timeline detailing the history of each profilee.

For each type of screen: mobile, tablet, laptop and desktop, the timeline morphs to take on a different layout. This was done using flexbox.

![Profile pages responsive](assets/images/readmeimages/Profile.png)
![Timeline pages responsive](assets/images/readmeimages/Timeline.png)

### About and Contact

The About and Contact pages both take on a similar masonry layout for larger screen sizes, or a columnar layout for mobile.

The 'About' page gives users information about the website's creation. Calls to Action are present throughout to keep the page engaging, and text blocks are kept short and spaced. There are internal links to direct users to other parts of the site.

The 'Contact' page features a submission form, and internal links to direct users to other parts of the site. Within the form, users can get in contact with the site developers.

![About page responsive](assets/images/readmeimages/About.png)
![Contact page responsive](assets/images/readmeimages/Contact.png)

### Under Construction

There is an under construction layout for profiles that are still being developed.

![under construction page](<assets/images/readmeimages/Under Construction.png>)

## Features Left to Implement

<b>Nav Bar edits:</b> In future updates, I will play with having the logo in the top right hand corner - so it's more accesible for mobile users.

<b>Form edits:</b> I would like the form to also take story submissions from users, so they can share their experiences. These submissions would then be posted on a Forum page on the website.

<b>Under construction edits:</b> I would like to create a random fact generator for the Under Construction page. This would guide traffic back into the website with fun facts that linked to completed profiles.

## Testing

The project was tested by several users, to ensure all features work as intended. The site has proven easy to use, and is straightforward for those wanting to learn more about the history of women in tech.

### Responsive

The website is fully responsive for phones, tablets, laptops and desktops. Here, I have tested out the site's responsivity via <em>Am I responsive?</em> website:

![](assets/images/readmeimages/AmIResponsive.png)

For tests, I used [Am I Responsive?](https://ui.dev/amiresponsive?url=https://jevpr.github.io/Project-1/).

### Browser Friendly

The site has been tested for the following browsers: Chrome, Firefox, Safari, Edge, Vivaldi, Brave, and Tor Browser.

For tests, I used [Browserling.com](https://www.browserling.com/browse/win10/safari5.1.5/https://jevpr.github.io/Project-1/).

### Accessible

I checked accessibility by running my site through the Lighthouse tool on Google Dev tools.

![](assets/images/readmeimages/Lighthouse.png)

### Validator Testing

HTML
No errors were returned when passing through the official [W3C Nu HTML Checker](https://validator.w3.org/nu/).

CSS
No errors were found when passing through the official validator - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator). The document validates as CSS level 3 + SVG.

### Unfixed Bugs

This project has no unfixed bugs.

## GitHub and Deployment

This website was linked with GitHub by <em>initalizing a respository</em> via Visual Studio Code. This created a new responsitory on my GitHub, where I could commit and sync changes I made on my local computer.

During this process, I had to type some commands into the console:

```
git init -b main

git config --global user.name "your-github-name"

git config --global user.email "your-email"
```

I deployed the website using GitHub's in-built deployment feature, accessed through Settings > Pages for my Project 1 Respository.

Live Link: [https://jevpr.github.io/Project-1/](https://jevpr.github.io/Project-1/)

## Credits

### Media

- I created the Logo image and timeline arrow in Microsoft Paint.
- Timeline Images were screenshots of icons from [Font Awesome](https://kit.fontawesome.com/d764441fbc.js).
- Images of Ada Lovelace, Katherine Johnson, and Radia Perlman are public and were taken from WikiMedia Commons:

  - <em>Ada Lovelace</em>: [Here](https://commons.wikimedia.org/wiki/File:Ada_Lovelace_in_1852.jpg)
  - <em>Katherine Johnson</em>: [Here](https://commons.wikimedia.org/wiki/File:Katherine_Johnson_1983.jpg)
  - <em>Radia Perlman</em>: [Here](https://commons.wikimedia.org/wiki/File:Radia_Perlman.png)

### Content

- Written content on the Landing, About, Contact, and construction pages is my own.
- Written content on Ada Lovelace's profile was adapted and composed from the following sources:

1. [Ada: A Life and Legacy, Dorothy Stein](https://monoskop.org/images/e/e7/Stein_Dorothy_Ada_A_Life_and_a_Legacy.pdf)
2. [Ada Lovelace, NYTimes](https://www.nytimes.com/interactive/2018/obituaries/overlooked-ada-lovelace.html)
3. [Ada Lovelace, Britannica](https://www.britannica.com/biography/Ada-Lovelace)
4. [Ada Lovelace, Wikipedia](https://en.wikipedia.org/wiki/Ada_Lovelace)
5. [Ada Lovelace, findingada.com](https://findingada.com/about/who-was-ada/)
6. [Untangling the Tale of Ada Lovelace, Stephen Wolfram](https://writings.stephenwolfram.com/2015/12/untangling-the-tale-of-ada-lovelace/)
7. [Ada Lovelace: King, Countess, Genius, Nottingham City of Literature](https://nottinghamcityofliterature.com/blog/ada-lovelace-king-countess-genius/)

### [Back to the top.](#builtbywomen_)
