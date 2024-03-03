
   const form = document.getElementById('album-form');
   const albumTitleInput = document.getElementById('album-title');
   const albumDescriptionInput = document.getElementById('album-description');
   const albumArtSelect = document.getElementById('album-art');


   albumTitleInput.addEventListener('input', (event) =>{
      if (event.currentTarget.value.length > 15){
         event.target.classList.add('is-invalid');
      }else{
         event.target.classList.remove('is-invalid');
      }
   });

   albumDescriptionInput.addEventListener('input', (event) =>{
      if (event.currentTarget.value.length > 30){
         event.target.classList.add('is-invalid');
      }else{
         event.target.classList.remove('is-invalid');
      }
   });


   form.addEventListener('submit', (event) => {
       event.preventDefault();
      
       const albumTitle = albumTitleInput
       const albumDescription = albumDescriptionInput
       const selectedAlbumArt = albumArtSelect
      
       if (albumTitle.value === '') {
           albumTitleInput.classList.add('is-invalid');
       }else{
         albumTitleInput.classList.remove('is-invalid');
       }

       if (albumDescription.value === '') {
           albumDescriptionInput.classList.add('is-invalid');
       }else{
         albumDescriptionInput.classList.remove('is-invalid');
       } 
   
      if (selectedAlbumArt.value === '') {
         albumArtSelect.classList.add('is-invalid')
         return;
      }else{
         albumArtSelect.classList.remove('is-invalid');
           }

           renderTemplate();
   });


   function renderTemplate() {
      const template = `
          <div class="col">
              <div class="card shadow-sm">
                  <img class="bd-placeholder-img card-img-top" src="img/${albumArtSelect.value}">
                  <div class="card-body">
                      <h5 class="card-title">${albumDescriptionInput.value}</h5>
                      <p class="card-text">${albumTitleInput.value}</p>
                  </div>
              </div>
          </div>
      `;
      document.getElementById('all-albums-list').insertAdjacentHTML('beforeend', template);
  }
  

















