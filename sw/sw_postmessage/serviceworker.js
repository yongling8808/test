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
         
 
this.addEventListener('fetch', function(event)  { 
     
   
  console.log('serviceworker thread onfetch function');
  console.log('this comes frome server!');
  //console.log('Handling fetch event for '+ event.request.url);
  event.respondWith(
        caches.open(OFFLINE_CACHE).then(function(cache) {
          //console.log('load from cache:'+ event.request.url);
          return cache.match(event.request.url);
        })
    ); 
  console.log('Handling fetch event end!'); 
}); 

this.addEventListener('message', function (event) {
  console.log(event.data);
  self.clients.matchAll()
    .then(function (clients) {
        if (clients && clients.length) {
            clients.forEach(function (client) {
                client.postMessage('sw have recieved a message from you!');
            })
        }
    })
});