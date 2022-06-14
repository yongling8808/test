 const OFFLINE_CACHE = 'v5'; 
   
  
this.addEventListener('install', function(event) {
	
	  var urlsToPrefetch = [
    'index.html',
    'snowTroopers.jpg',
    'app.js',
  	];

event.waitUntil(
    caches.open(OFFLINE_CACHE).then(function(cache) {
      return cache.addAll(urlsToPrefetch);
    })
  );
          
          
});
         
      
this.addEventListener('activate', function(event) {
});
   
this.addEventListener('fetch', function(event)  { 
     
   
  console.log('serviceworker thread onfetch function');
  console.log('this comes frome server!');
  //console.log('Handling fetch event for '+ event.request.url);
  event.respondWith(
        caches.open(OFFLINE_CACHE).then(function(cache) {
          //console.log('load from cache:'+ event.request.url);
          return cache.match(event.request.url);
        }).then(function(response) {
          console.log('return response:'+response.status)
          return response;
        }).catch(function() {
          console.log('match catch...');
          return;
        })
    ); 
  console.log('Handling fetch event end!'); 
}); 

   