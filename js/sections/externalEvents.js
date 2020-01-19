var externalEventsData = [
  {
    id: 'popi',
    title: 'Pekan Olahraga Pelajar Indonesia (POPI)',
    imageURL: 'assets/placeholder.jpg',
    link: 'https://www.facebook.com/pinusPOPI/',
    readMore: `
      Pekan Olahraga Pelajar Indonesia (POPI) is an annual sports charity
      event between Indonesian swtudents’ association from different
      universities and Junior Colleges around Singapore. The proceeds from
      the event partly goes to the Misi Kami Peduli (Mission: We Care) team,
      which organises an Overseas Community Involvement Programme in
      Indonesia.
    `,
    shortDesc: `
      Pekan Olahraga Pelajar Indonesia (POPI) is an annual sports ...
    `
  },
  {
    id: 'nuansacp',
    title: 'NUANSA Cultural Productions',
    imageURL: 'assets/placeholder.jpg',
    link: 'https://www.nuansacp.com/',
    readMore: `
      NUANSA is a cultural production group based in the National University
      of Singapore. Through contemporary musical theatre, we attempt to
      showcase the beauty and diversity of Indonesian cultures. We
      consistently endeavor to bring the audience through an immersive
      journey by ensuring the cultural authenticity and artistic integrity
      of our shows and events. Since our inception in 2008, we have grown
      from strength to strength: from a small independent Indonesian
      performance group to one of the biggest student productions in
      Singapore, featuring a large and diverse community from different
      nationalities.
    `,
    shortDesc: `
      NUANSA is a cultural production group based in the National
      University of Singapore. Through ...
    `
  },
  {
    id: 'mkp',
    title: 'Misi Kami Peduli',
    imageURL: 'assets/placeholder.jpg',
    link: 'https://www.misikamipeduli.org/',
    readMore: `
      Misi Kami Peduli (MKP) or Mission: We Care is a community service
      project which aims to empower underprivileged Indonesian communities.
      Misi Kami Peduli's projects focus on three key pillars: Education,
      Community Empowerment and Technology to alleviate the socio-economic
      challenges in the local communities.
    `,
    shortDesc: `
      Misi Kami Peduli (MKP) or Mission: We Care is a community
      service project which aims to empower underprivileged Indonesian ...
    `
  }
]

var sectionWrapper = document.getElementById('externalEventsSection');
var readMoreWrapper = document.getElementById('externalEventsReadMore');

var readMoreHTML = '';
var sectionHTML = '';

for (var i = 0; i < externalEventsData.length; ++i) {
  readMoreHTML += `
    <div id="` + externalEventsData[i].id + `" class="modal">
      <div class="modal-content">
        <h4>` + externalEventsData[i].title + `</h4>
        <p>` + externalEventsData[i].readMore + `</p>
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
          <img src="` + externalEventsData[i].imageURL + `" alt="" />
        </div>
        <div class="card-content">
          <span class="card-title">
            <a style="color: black" href="` + externalEventsData[i].link + `">
              <strong>` + externalEventsData[i].title + `</strong>
            </a>
          </span>
          <p class="light">` + externalEventsData[i].shortDesc + `</p>
        </div>
        <div class="card-action">
          <a href="" class="white-text modal-trigger" data-target="` + externalEventsData[i].id + `">Read More</a>
        </div>
      </div>
    </div>
  `
} 

sectionWrapper.innerHTML = sectionHTML
readMoreWrapper.innerHTML = readMoreHTML
