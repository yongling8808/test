self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.showNotification('Webpush Test!', {
      body: 'hello world',
    })
  );
});