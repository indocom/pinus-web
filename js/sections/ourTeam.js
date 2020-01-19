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
    name: 'Amelinda Gusrianti Harahap',
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
    name: 'Kezia Putri',
    imageURL: 'assets/stars.jpg',
    role: 'OA Director',
    fbURL: '#',
    instagramURL: '#',
    telegramURL: '#',
    linkedinURL: '#'
  }
]

myHtml = ''

for (var i = 0; i < topFourData.length; i++) {
  myHtml += `
    <div class="col s10 m6 offset-s1 l3">
      <div class="card ayellow team">
        <div class="card-image">
          <img src="` + topFourData[i].imageURL + `" alt="" />
        </div>
        <div class="details">
          <h4>` + topFourData[i].name + `<br /><span>` + topFourData[i].role + `</span></h4>
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
    </div>
  `
}

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
        imageURL: 'assets/stars.jpg',
        role: 'Director',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Jeff Ivanos Gana',
        imageURL: 'assets/stars.jpg',
        role: 'Director',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Aldrich Williams',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Archangel Quinterra',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Jovita Suryawinata',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Kathy Fresilia Ijaya',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Kenisha Alicia',
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
        imageURL: 'assets/stars.jpg',
        role: 'Director',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Audrey Felicio Anwar',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Bennett Clement',
        imageURL: 'assets/stars.jpg',
        role: 'Member',
        fbURL: '#',
        instagramURL: '#',
        telegramURL: '#',
        linkedinURL: '#'
      },
      {
        name: 'Kevin William',
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

for (var i = 0; i < divisionsData.length; i++) {
  divInfo = divisionsData[i]

  myHtml += `
    <div class="col s12" id="` + divInfo.id + `">
      <p class="flow-text indigo-text text-darken-4">` + divInfo.name + `</p>
      <p>` + divInfo.description + `</p>
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

  myHtml += `
      </div>
    </div>
  `
}

document.getElementById('ourDivisionsSection').innerHTML = myHtml
