$(() => {

////////////////////////////////////////////////////home
const $display = $(`<div>`)
.addClass(`display`)
.appendTo(`body`)
.append("<img id='koi' src='https://i.imgur.com/G2zszwC.jpg'/>")
.append("<img id='stairs' src='https://i.imgur.com/DFEqb8Z.jpg'/>")

//////////////////////
const $page1 = $(`<div>`)
.addClass(`page1`)
.appendTo($display)

const $welcome = $(`<h1>`)
.addClass(`home`)
.html(`Hey there!`)
.attr('id', 'head')
.appendTo($page1)

const $paragraph = $(`<p>`)
.addClass(`home`)
.html(`Welcome to my website! This is a site to tell you all about me and my achievements.`)
.attr('id', 'info')
.appendTo($page1)
//////////////////////

//////////////////////

//////////////////////
const $page2 = $(`<div>`)
.addClass(`page2`)
.appendTo($display)

const $breifEmployment = $(`<h2>`)
.html(`Current Position:`)
.addClass(`hlist`)
.attr('id', 'head')
.appendTo($page2)

const $breif2Employment = $(`<p>`)
.html(`Full-time Student under General Assembly.`)
.addClass(`hlist`)
.attr('id', 'info')
.appendTo($breifEmployment)

const $breifHobbies = $(`<h2>`)
.html(`Current Hobbies:`)
.addClass(`hlist`)
.attr('id', 'head')
.appendTo($page2)

const $breif2Hobbies = $(`<p>`)
.html(`I have a massive interest for video games! I play quite a few, as they do build skills I believe to be helpful to a work-life balance.`)
.addClass(`hlist`)
.attr('id', 'info')
.appendTo($breifHobbies)

const showHome = () => {
$page1.show(`slow`)
$page2.show(`slow`)
$('#koi').show(`slow`)
$('#stairs').show(`slow`)
}
const hideHome = () => {
$page1.hide()
$page2.hide()
$('#koi').hide()
$('#stairs').hide()
}

const home = () => {
    $resume.hide()
    $skills.hide()
    hideAboutMe()
    showHome()
}
/////////////////////////////////////////////////////////////////////////
//////////////////////////////////about me
////////////////////////////////////////////////////design later/////////////////////////////////

const $work = $(`<ul>`)
.addClass(`work`)
.attr(`id`, `aboutlist`)
.appendTo($display)

const $Employments = $(`<ul>`)
.addClass(`aboutMe`)
.html(`Full-time Student`)
.attr('id', 'info')
.appendTo($work)
////////////////////////////////////////////////////////////////////////
const $currentEmployment = $(`<h2>`)
.addClass(`aboutMe`)
.html(`Current Employment & Projects:`)
.attr('id', 'head')
.appendTo($Employments)

const $current2Employment = $(`<li>`)
.addClass(`aboutMe`)
.html(`This Website`)
.attr('id', 'info')
.appendTo($currentEmployment)

const $current3Employment = $(`<li>`)
.addClass(`aboutMe`)
.html(`Video Game Designs`)
.attr('id', 'info')
.appendTo($currentEmployment)

////////////////////////////////////////////////////////////////////////
const $hobby = $(`<div>`)
.addClass(`hobby`)
.attr(`id`, `aboutlist`)
.appendTo($display)

const $currentHobbies = $(`<h2>`)
.addClass(`aboutMe`)
.html(`Current Hobbies:`)
.attr('id', 'head')
.appendTo($hobby)

/////////////////////////////////////////////////////////////////////

const $current2Hobbies = $(`<ul>`)
.addClass(`aboutMe`)
.html(`I have a massive interest for video games! <br>I play quite a few, as they do build skills I believe to be helpful to a work-life balance.`)
.attr('id', 'info')
.appendTo($currentHobbies)

const $hobbylist1 = $(`<li>`)
.html(`I have a massive interest for video games! <br>I play quite a few, as they do build skills I believe to be helpful to a work-life balance.`)
.addClass(`aboutMe`)
.attr('id', 'info')
.appendTo($current2Hobbies)

const $hobbylist2 = $(`<li>`)
.html(`I have a massive interest for video games! <br>I play quite a few, as they do build skills I believe to be helpful to a work-life balance.`)
.addClass(`aboutMe`)
.attr('id', 'info')
.appendTo($current2Hobbies)

///////////////////////////////////////////////////////////////

const $current3Hobbies = $(`<ul>`)
.addClass(`aboutMe`)
.html(`I have a massive interest for video games! <br>I play quite a few, as they do build skills I believe to be helpful to a work-life balance.`)
.attr('id', 'info')
.appendTo($currentHobbies)

const $hobbylist3 = $(`<li>`)
.html(`I have a massive interest for video games! <br>I play quite a few, as they do build skills I believe to be helpful to a work-life balance.`)
.addClass(`aboutMe`)
.attr('id', 'info')
.appendTo($current2Hobbies)

const $hobbylist4 = $(`<li>`)
.html(`I have a massive interest for video games! <br>I play quite a few, as they do build skills I believe to be helpful to a work-life balance.`)
.addClass(`aboutMe`)
.attr('id', 'info')
.appendTo($current2Hobbies)

const hideAboutMe = () => {
$work.hide()
$hobby.hide()
}

const showAboutMe = () => {
  $work.show(`slow`)
  $hobby.show(`slow`)
}

const aboutMe = () => {
    $resume.hide()
    $skills.hide()
    hideHome()
    showAboutMe()
}

/////////////////////////////////////////////////////////////////////////
//////////////////////////////////resume
const $resume = $(`<div>`)
.addClass(`resume`)
.appendTo($display)

const $resumeUl = $(`<ul>`)
.addClass(`resume`)
.attr(`id`, `aboutlist`)
.appendTo($resume)
//////////////////////
const $skills = $(`<div>`)
.addClass(`resume`)
.addClass(`skillList`)
.attr('id', 'skills-list')
.appendTo($display)

const $skillsNote = $(`<ul>`)
.addClass(`resume`)
.html(`Skills to Note:`)
.attr('id', 'head')
.attr('id', 'skills-list')
.appendTo($skills)

const $skillsList = $(`<li>`)
.addClass(`resume`)
.html(`Great work ethics`)
.attr('id', 'subhead')
.appendTo($skillsNote)

const $skillsList1 = $(`<li>`)
.addClass(`resume`)
.html(`Team player`)
.attr('id', 'subhead')
.appendTo($skillsNote)

const $skillsList2 = $(`<li>`)
.addClass(`resume`)
.html(`Respectful to Others`)
.attr('id', 'subhead')
.appendTo($skillsNote)

const $skillsList3 = $(`<li>`)
.addClass(`resume`)
.html(`Dependable`)
.attr('id', 'subhead')
.appendTo($skillsNote)

const $skillsList4 = $(`<li>`)
.addClass(`resume`)
.html(`Values Efficiency`)
.attr('id', 'subhead')
.appendTo($skillsNote)

const $skillsList5 = $(`<li>`)
.addClass(`resume`)
.html(`Cool headed`)
.attr('id', 'subhead')
.appendTo($skillsNote)

const $skillsList6 = $(`<li>`)
.addClass(`resume`)
.html(`Personable`)
.attr('id', 'subhead')
.appendTo($skillsNote)

const $skillsList7 = $(`<li>`)
.addClass(`resume`)
.html(`Great under Pressure`)
.attr('id', 'subhead')
.appendTo($skillsNote)

//////////////////////

const $titleEmployment = $(`<li>`)
.addClass(`resume`)
.html(`Work Experiences:`)
.attr('id', 'head')
.appendTo($resumeUl)
//////////////////////
const $pastEmployment = $(`<li>`)
.addClass(`resume`)
.html(`CCSD Food Services (2019 - 2021):`)
.attr('id', 'subhead')
.appendTo($titleEmployment)

const $infoEmployment = $(`<li>`)
.addClass(`resume`)
.html(`I prepared, maintained, and supplied food for my local high school under strict USDA guidelines during school hours.`)
.attr('id', 'info')
.appendTo($pastEmployment)
//////////////////////

const $past2Employment = $(`<li>`)
.addClass(`resume`)
.html(`Rover Petsitter (2019 - 2021):`)
.attr('id', 'subhead')
.appendTo($titleEmployment)

const $info2Employment = $(`<li>`)
.addClass(`resume`)
.html(`Self-employment service that is used to care for pets while owners are out of town. <br> This allowed me to experience working with normal and exotic pets as well as pets with special needs.`)
.attr('id', 'info')
.appendTo($past2Employment)
//////////////////////

const $past3Employment = $(`<li>`)
.addClass(`resume`)
.html(`PAWS Atlanta (2022 - 2022):`)
.attr('id', 'subhead')
.appendTo($titleEmployment)

const $info3Employment = $(`<li>`)
.addClass(`resume`)
.html(`Local animal shelter that cares for and trains surrendered animals for a new home. <br> This allowed me to use time management skills and extreme problem-solving abilities to get out of serious situations while dealing with animals.`)
.attr('id', 'info')
.appendTo($past3Employment)
//////////////////////

const $past4Employment = $(`<li>`)
.addClass(`resume`)
.html(`Girl Scouts of Southern Nevada <br> (2010 - 2020):`)
.attr('id', 'subhead')
.appendTo($titleEmployment)

const $info4Employment = $(`<li>`)
.addClass(`resume`)
.html(`I spent several seasons marketing and selling girl scout cookies and becomming one of their top sellers on my own. <br> I rose rank as a Girl Scout Ambassador and has earned national awards (Bronze and Silver).`)
.attr('id', 'info')
.appendTo($past4Employment)
//////////////////////

const $titleEducation = $(`<li>`)
.addClass(`resume`)
.html(`Education:`)
.attr('id', 'head')
.prependTo($resumeUl)
//////////////////////

const $pastEducation = $(`<li>`)
.addClass(`resume`)
.html(`Highschool:`)
.attr('id', 'subhead')
.appendTo($titleEducation)

const $infoEducation = $(`<li>`)
.addClass(`resume`)
.html(`I have attended and obtained my high school diploma from Northwest Career and Technical Academy. <br> I have earned a Gold award for being an exemplary student. `)
.attr('id', 'info')
.appendTo($pastEducation)
//////////////////////

const $past2Education = $(`<li>`)
.addClass(`resume`)
.html(`College:`)
.attr('id', 'subhead')
.appendTo($titleEducation)

const $info2Education = $(`<li>`)
.addClass(`resume`)
.html(`I briefly attended Colorado State University, but quickly decided to change career paths. <br> I originally went to study Zoology. `)
.attr('id', 'info')
.appendTo($past2Education)

//////////////////////

const $past3Education = $(`<li>`)
.addClass(`resume`)
.html(`Recent Education:`)
.attr('id', 'subhead')
.appendTo($titleEducation)

const $info3Education = $(`<li>`)
.addClass(`resume`)
.html(`I am now studying Software Engineering through a bootcamp offered by General Assembly. <br> With this, I hope to become a Junior Developer and grow my skills over time.`)
.attr('id', 'info')
.appendTo($past3Education)

$resume.hide()
$skills.hide()



const myResume = () => {
  hideHome()
  hideAboutMe()
  $resume.show(`slow`)
  $skills.show(`slow`)
}


/////////////////////////////////////////////////////////////////////////
//////////////////////////////////my projects
const $projects = $(`<div>`)
.addClass(`projects`)
.appendTo($display)

const $dropDown = $(`<div>`)
.attr('id', 'dropmenu')
.appendTo($(`#four`))

const $mySelect = $('#myProjects')
.appendTo($dropDown)



$('#one').on('click', home);
$('#two').on('click', aboutMe);
$('#three').on('click', myResume);
$('#four').on('click', myProjects);
$('#five').on('click', contactMe);


})
