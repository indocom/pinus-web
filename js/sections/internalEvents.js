var internalEventsData = [
  {
    id: 'pinus-ori',
    title: 'PINUS Orientation',
    imageURL: 'assets/placeholder.jpg',
    link: '#',
    readMore: `
      Feeling homesick? Fret not, PINUS Orientation welcomes all Indonesian 
      freshmen. Through many fun activities planned by the committee, you will 
      definitely make new friends. Soon, you’ll find that they are your home 
      away from home.
    `,
    shortDesc: `
      Feeling homesick? Fret not, PINUS Orientation welcomes all Indonesian 
      freshmen. Through ...
    `
  },
  {
    id: 'senior-app-night',
    title: 'Senior Appreciation Night',
    imageURL: 'assets/placeholder.jpg',
    link: '#',
    readMore: `
      Senior Appreciation Night (SAN) is an annual dinner & dance event for 
      graduating PINUS members. Apart from being a platform to congratulate 
      the graduating seniors, SAN is also an opportunity for bonding between 
      Indonesian freshmen, seniors, as well as alumni in NUS.
    `,
    shortDesc: `
      Senior Appreciation Night (SAN) is an annual dinner & dance event for 
      graduating ...
    `
  },
  {
    id: 'nusantaraku',
    title: 'Nusantaraku & BBQ',
    imageURL: 'assets/placeholder.jpg',
    link: '#',
    readMore: `
      PINUS Nusantaraku & BBQ aims to provide a common space for PINUS freshies 
      to bond with their batch and with the seniors by having fun together through 
      performance and games (Nusantaraku) and Food Party in the spirit of 
      independence day.
    `,
    shortDesc: `
      PINUS Nusantaraku & BBQ aims to provide a common space for PINUS freshies 
      to bond ...
    `
  }
]

var sectionWrapper = document.getElementById('internalEventsSection');
var readMoreWrapper = document.getElementById('internalEventsReadMore');

var readMoreHTML = '';
var sectionHTML = '';

for (var i = 0; i < internalEventsData.length; ++i) {
  readMoreHTML += `
    <div id="` + internalEventsData[i].id + `" class="modal">
      <div class="modal-content">
        <h4>` + internalEventsData[i].title + `</h4>
        <p>` + internalEventsData[i].readMore + `</p>
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
          <img src="` + internalEventsData[i].imageURL + `" alt="" />
        </div>
        <div class="card-content">
          <span class="card-title">
            <a style="color: black" href="` + internalEventsData[i].link + `">
              <strong>` + internalEventsData[i].title + `</strong>
            </a>
          </span>
          <p class="light">` + internalEventsData[i].shortDesc + `</p>
        </div>
        <div class="card-action">
          <a href="" class="white-text modal-trigger" data-target="` + internalEventsData[i].id + `">Read More</a>
        </div>
      </div>
    </div>
  `
} 

sectionWrapper.innerHTML = sectionHTML
readMoreWrapper.innerHTML = readMoreHTML
