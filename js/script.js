axios.get('https://boolean-teachers.github.io/mock/api/members/').then((response)=>{

  let allTeamsCard = "";
  console.log(response.data);
  response.data.forEach(element => {
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

});