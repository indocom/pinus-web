var topFourData = [
  {
    name: 'Nadhira Salsabila',
    imageURL: 'assets/stars.jpg',
    role: 'President',
    fbURL: '#',
    instagramURL: '#',
    telegramURL: '#',
    linkedinURL: '#'
  },
  {
    name: 'Amelinda G. Harahap',
    imageURL: 'assets/stars.jpg',
    role: 'Vice President',
    fbURL: '#',
    instagramURL: '#',
    telegramURL: '#',
    linkedinURL: '#'
  },
  {
    name: 'Michael Gunawan',
    imageURL: 'assets/stars.jpg',
    role: 'Finance Director',
    fbURL: '#',
    instagramURL: '#',
    telegramURL: '#',
    linkedinURL: '#'
  },
  {
    name: 'Kezia <br> Putri',
    imageURL: 'assets/stars.jpg',
    role: 'O.A. Director',
    fbURL: '#',
    instagramURL: '#',
    telegramURL: '#',
    linkedinURL: '#'
  }
]

myHtml = ''

for (var i = 0; i < topFourData.length; i++) {
  myHtml += `
    <div class="top-four__card">
      <div class="top-four__image">
        <img src="` + topFourData[i].imageURL + `" alt="" />
      </div>
      <div class="top-four__details">
        <h5>` + topFourData[i].name + `</h5>
        <h6>` + topFourData[i].role + `</h6>
        <ul>
          <li>
            <a href="` + topFourData[i].fbURL + `"
              ><i class="fab fa-facebook-f" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="` + topFourData[i].instagramURL + `"
              ><i class="fab fa-instagram" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="` + topFourData[i].telegramURL + `"
              ><i class="fab fa-telegram-plane" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="` + topFourData[i].linkedinURL + `"
              ><i class="fab fa-linkedin-in" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  `
}

myHtml = `
    <div class="top-four__container">
  `  + myHtml + `
    </div>
`;

document.getElementById('topFourSection').innerHTML = myHtml

var divisionsData = [
  {
    id: 'pna',
    name: 'Public and Alumni Relations',
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel
      quia harum eos voluptatem inventore sint at architecto! Dolor eos ut
      hic laboriosam sapiente, sequi reiciendis quibusdam sed enim porro!
    
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
      accusamus. In aliquam inventore totam unde quis, accusantium
      voluptate quibusdam neque pariatur? Praesentium eius omnis ipsum
      dolores repellat atque assumenda dolorum!
    `,
    members: [
      {
        name: 'Aldo',
        imageURL: 'assets/images/teams/pna/aldo.jpg',
        role: 'Director',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Jeff Ivanos Gana',
        imageURL: 'assets/images/teams/pna/jeff.jpg',
        role: 'Director',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Aldrich Williams',
        imageURL: 'assets/images/teams/pna/aldrich.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Archangel Quinterra',
        imageURL: 'assets/images/teams/pna/angel.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Jovita Suryawinata',
        imageURL: 'assets/images/teams/pna/jovita.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Kathy Fresilia Ijaya',
        imageURL: 'assets/images/teams/pna/kathy.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Kenisha Alicia',
        imageURL: 'assets/images/teams/pna/alice.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      }
    ]
  },
  {
    id: 'it',
    name: 'Technology',
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel
      quia harum eos voluptatem inventore sint at architecto! Dolor eos ut
      hic laboriosam sapiente, sequi reiciendis quibusdam sed enim porro!
    
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
      accusamus. In aliquam inventore totam unde quis, accusantium
      voluptate quibusdam neque pariatur? Praesentium eius omnis ipsum
      dolores repellat atque assumenda dolorum!
    `,
    members: [
      {
        name: 'Steven Wijaya',
        imageURL: 'assets/images/teams/tech/steven.jpg',
        role: 'Director',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Audrey Felicio Anwar',
        imageURL: 'assets/images/teams/tech/audrey.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Bennett Clement',
        imageURL: 'assets/images/teams/tech/bennett.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Kevin William',
        imageURL: 'assets/images/teams/tech/kevin.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      }
    ]
  },
  {
    id: 'pubs',
    name: 'Publicity',
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel
      quia harum eos voluptatem inventore sint at architecto! Dolor eos ut
      hic laboriosam sapiente, sequi reiciendis quibusdam sed enim porro!
    
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
      accusamus. In aliquam inventore totam unde quis, accusantium
      voluptate quibusdam neque pariatur? Praesentium eius omnis ipsum
      dolores repellat atque assumenda dolorum!
    `,
    members: [
      {
        name: 'Dipasukha Edbert',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Erin May Gunawan',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Felix Halim',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      }
    ]
  },
  {
    id: 'welfare',
    name: 'Welfare',
    description: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel
      quia harum eos voluptatem inventore sint at architecto! Dolor eos ut
      hic laboriosam sapiente, sequi reiciendis quibusdam sed enim porro!
    
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
      accusamus. In aliquam inventore totam unde quis, accusantium
      voluptate quibusdam neque pariatur? Praesentium eius omnis ipsum
      dolores repellat atque assumenda dolorum!
    `,
    members: [
      {
        name: 'Hokiewan',
        imageURL: 'assets/stars.jpg',
        role: 'Director',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Nathanael Septianto',
        imageURL: 'assets/stars.jpg',
        role: 'Director',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Agatha Felice',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Albert Reinardo',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Alicia Rachel',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Alvin Gunawan',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Christian Drake Martin',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Cindy Aurelia Ursia',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      }
    ]
  }
]

myHtml = '';

myHtml += `    
  <div class="teams container">
    <div class="teams-overview teams-slides">
  `;

for (var i = 0; i < divisionsData.length; i++) {
  divInfo = divisionsData[i]

  myHtml += `
    <div class="teams-overview__container" id="teams-overview">
      <div class="teams-overview__card">
        <div class="teams-overview__content">
          <img src="./assets/placeholderBg.jpg" alt="">
          <p>` + divInfo.id + `</p>
          <div class="teams-overview__button"><a href="#` + divInfo.id + `"/> Discover More <i class="fas fa-arrow-alt-circle-right"></i></a></div>
        </div>
      </div>
    </div>
  `
}

myHtml += '</div>';

for (var i = 0; i < divisionsData.length; i++) {
  divInfo = divisionsData[i]
  divBefore = i >= 1 ? divisionsData[i - 1] : null;
  divAfter = i < divisionsData.length - 1 ? divisionsData[i + 1] : null;

  myHtml += `
    <div class="col s12 per-team teams-slides" id="` + divInfo.id + `">
      <h4 class="center">` + divInfo.name + `</h4>
      <div class="row">
  `

  for (var j = 0; j < divInfo.members.length; j++) {
    myHtml += `
      <div class="col s10 m6 offset-s1 l3">
        <div class="card ayellow team">
          <div class="card-image">
            <img src="` + divInfo.members[j].imageURL + `" alt="" />
          </div>
          <div class="details">
            <h4>` + divInfo.members[j].name + `<br /><span>` + divInfo.members[j].role + `</span></h4>
            <ul>
              <li>
                <a href="` + divInfo.members[j].fbURL + `"
                  ><i class="fab fa-facebook-f" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="` + divInfo.members[j].instagramURL + `"
                  ><i class="fab fa-instagram" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="` + divInfo.members[j].telegramURL + `"
                  ><i class="fab fa-telegram-plane" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="` + divInfo.members[j].linkedinURL + `"
                  ><i class="fab fa-linkedin-in" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `
  }

  myHtml += `</div>`;

  if(divBefore !== null) {    
    myHtml += `<div class="teams-overview__button"><a href="#` + divBefore.id + `"/><i class="fas fa-arrow-alt-circle-right" style="transform: rotate(180deg)"></i> Previous </a></div>`
  } else {
    myHtml += `<div class="teams-overview__button"><a href="#teams-overview"/><i class="fas fa-arrow-alt-circle-right" style="transform: rotate(180deg)"></i> Previous </a></div>`
  }

  myHtml += `<div class="teams-overview__button"><a href="#teams-overview"/> Home </a></div>`

  if(divAfter !== null) {    
    myHtml += `<div class="teams-overview__button"><a href="#` + divAfter.id + `"/> Next <i class="fas fa-arrow-alt-circle-right"></i></a></div>`
  } 
      
  myHtml += `</div>`;
}

myHtml += `
  </div>
</div>
`
document.getElementById('ourDivisionsSection').innerHTML = myHtml
