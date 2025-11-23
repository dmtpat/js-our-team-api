const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let allTeamsCard = "";

teamMembers.forEach(element => {
  allTeamsCard +=
    `<div class="column card rounded-0 ms-0 ps-0  bg-black text-white" style="width: calc(100% / 3 - 2rem);">
                    <div class="row ms-0 g-0">
                        <div class="col-4">
                          <img src=${element.img} class="img-fluid" alt="${element.name}">
                        </div>
                        <div class="col-8 ">
                            <div class="card-body pe-0">
                                <h5 class="card-title fw-bolder">${element.name}</h5>
                                <p class="card-text">${element.role}</p>
                                <a class="link-offset-2 link-underline link-underline-opacity-0" href="mailto:${element.email}">
                                  ${element.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
  
});
document.getElementById("cards-container").innerHTML = allTeamsCard;

