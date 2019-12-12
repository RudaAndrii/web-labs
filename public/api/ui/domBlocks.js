export function getNews({newsTitle, newsBody}) {
    return `
                <div class="col-md-4">
                  <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src="/static/images/tyler-joseph.jpg" alt="Card image cap">
                    <div class="card-body">
                       <p class="card-text">${newsTitle}</p>
                      <p class="card-text">${newsBody}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>

`
}

export function getAppeal({appealTitle, appealUsername, appealBody}) {
    return `
        <li>
          <div class="list-group-item list-group-item-action flex-column align-items-start mt-3">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">${appealTitle}</h5>
                <small>by ${appealUsername}</small>
            </div>
            <div style="word-wrap: break-word;"><p class="mb-3 w-100">${appealBody}</p></div>
            <small>Donec id elit non mi porta.</small>
          </div>
      </li>   
    `
}