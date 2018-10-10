$.ajax({
 type: 'GET',
 url: 'https://api.punkapi.com/v2/beers',
 timeout: 3000,
 success: function(data){
   console.log(data);
   $('#target-ajax').append(data.length)
   for(i=0;i<data.length;i++)
   {
     let beer = data[i];
     // console.log(beer);
     $('#target-ajax').append('<li class="list-group-item">'+beer.name+'</li>')
   }
 },
 error: function(){
   $('#zone').html('Cette requête AJAX n\'a pas abouti');
 }
});
