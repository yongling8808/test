
this.addEventListener('message', function (event) {
  console.log(event.data);
  self.clients.matchAll()
    .then(function (clients) {
        if (clients && clients.length) {
            clients.forEach(function (client) {
                client.postMessage(navigator.userAgent);
            })
        }
    })
});