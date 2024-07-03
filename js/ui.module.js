export class Ui {
  displayDataGame(data) { 
    let content = ``;
    for (let i = 0; i < data.length; i++) {
      content += `
            <div class="col-md-4">
                <div class="card bg-transparent text-white p-2 mb-4">
                    <img src="${
                      data[i].thumbnail
                    }" class="card-img-top" alt="..." class="w-100">
                        <div class="card-body pb-0">
                            <div class="card-header px-0 d-flex justify-content-between align-items-baseline">
                                <h5 class="card-title">${data[i].title.split(" ",2)}</h5>
                                <span class="badge bg-blue p-2">Free</span>
                            </div>
                            <p class="card-text text-center text-secondary fw-bold px-0 py-2">${data[
                              i
                            ].short_description.split(" ", 8)}</p>
                            <div class="card-footer px-0 bg-transparent d-flex justify-content-between align-items-baseline">
                                <span class="badge bg-dark p-2">${
                                  data[i].genre
                                }</span>
                                <span class="badge bg-dark p-2">${
                                  data[i].platform
                                }</span>
                            </div>
                        </div>
                </div>
            </div>
            `;
    }
    document.getElementById("rowBody").innerHTML = content;
  }
  
  displayDetails(data) {
    const content = `
    <div class="col-md-4">
    <img src="${data.thumbnail}" class="w-100" alt="..." />
    </div>
    <div class="col-md-8 text-white">
    <h3>Title: <span class="text-blue">${data.title}</span></h3>
    <p>Category: <span class="text-secondary"> ${data.genre}</span> </p>
    <p>Platform: <span class="text-secondary"> ${data.platform}</span> </p>
    <p>Status: <span class="text-secondary"> ${data.status}</span> </p>
    <p class=" text-secondary small">${data.description}</p>
    <a class="btn btn-blue" target="_blank" href="${data.game_url}">Show Game</a>
    </div>
    `;

    document.getElementById("GameDetails").innerHTML = content;
  }
}
