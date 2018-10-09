$(function(){
  const apiUrl="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
  const apiKey = "8MtEQFC7eYBE28FxUJXwHWGt0RymYHqjuv1z2gls";
  const $gallery = $('.gallery');
  const $loadMore = $('.gallery-load-more')

  let counter = 1;

  function loadPhotos(nr){
    $.ajax({
      url: apiUrl,
      dataType: 'json',
      data:{
        sol: 1000,
        api_key : apiKey,
        page : nr
      }
    }).done(function(result){
      console.log(result);
      for (const el of result.photos){
       const $li = $(`
         <li class="gallery-element">
           <a href="${el.img_src}" class="gallery-link" style="background-image:url(${el.img_src})">
            </a>
         </li>
         `)
         $gallery.append($li);
       }
    });
  }

  loadPhotos(counter);

  $loadMore.on('click', function(){
    counter++;
    loadPhotos(counter);
  });

});
