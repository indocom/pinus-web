var publicationsData = [
  {
    id: 'pinus-ori',
    title: 'Humans of PINUS',
    imageURL: 'assets/placeholder.jpg',
    link: 'https://www.instagram.com/humansof.pinus/',
    readMore: `
      Eager to know someone but too busy to meet them? Interested in someone 
      but too shy to talk to them? Humans of PINUS shares about the Indonesian 
      Diasporas at NUS, one story at a time.
    `,
    shortDesc: `
      Eager to know someone but too busy to meet them? Interested in someone 
      but too shy ...
    `
  },
  {
    id: 'manusia-pinus',
    title: 'MANUSIA',
    imageURL: 'assets/placeholder.jpg',
    link: 'https://manusiapinus.wordpress.com/',
    readMore: `
      What makes a community? In MANUSIA, we explore what makes the Indonesian 
      community unique in NUS in the form of blog posts. As manusia means human 
      in Bahasa, MANUSIA tells the stories of Indonesian students in NUS. We are 
      particularly interested to explore how education in Singapore transforms 
      the idea of identity, community, and nationality among Indonesian students 
      in NUS.
    `,
    shortDesc: `
      What makes a community? In MANUSIA, we explore what makes the Indonesian 
      community ...
    `
  },
  {
    id: 'tanya-diaspora',
    title: 'TanyaDiaspora',
    imageURL: 'assets/placeholder.jpg',
    link: 'https://www.youtube.com/channel/UCDu42CYYcTla2qw-JSQUWfg',
    readMore: `
      Tanya Diaspora is started by a group of Indonesian diasporas who are dedicated 
      to share valuable experiences from their respective university majors with our 
      viewers (high school students, etc).  We hope that our videos can shed light on 
      multitude opportunities that arise from joining these majors.
    `,
    shortDesc: `
      Tanya Diaspora is started by a group of Indonesian diasporas who are dedicated 
      to share ...
    `
  }
]

var sectionWrapper = document.getElementById('publicationsSection');
var readMoreWrapper = document.getElementById('publicationsReadMore');

var readMoreHTML = '';
var sectionHTML = '';

for (var i = 0; i < publicationsData.length; ++i) {
  readMoreHTML += `
    <div id="` + publicationsData[i].id + `" class="modal">
      <div class="modal-content">
        <h4>` + publicationsData[i].title + `</h4>
        <p>` + publicationsData[i].readMore + `</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat"
          >Okay</a
        >
      </div>
    </div>
  `

  sectionHTML += `
    <div class="col s12 offset-s1 m6 l4">
      <div class="card ayellow">
        <div class="card-image">
          <img src="` + publicationsData[i].imageURL + `" alt="" />
        </div>
        <div class="card-content">
          <span class="card-title">
            <a style="color: black" href="` + publicationsData[i].link + `">
              <strong>` + publicationsData[i].title + `</strong>
            </a>
          </span>
          <p class="light">` + publicationsData[i].shortDesc + `</p>
        </div>
        <div class="card-action">
          <a href="" class="white-text modal-trigger" data-target="` + publicationsData[i].id + `">Read More</a>
        </div>
      </div>
    </div>
  `
} 

sectionWrapper.innerHTML = sectionHTML
readMoreWrapper.innerHTML = readMoreHTML
