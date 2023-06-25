(
  function () {
    // 接受与发送消息
    self.addEventListener('message', e => { // 接收到消息
      console.log('worker 线程收到的消息：', e.data);
      self.postMessage('向主线程发送消息'); // 向主线程发送消息
    });


    // 监听错误
    self.addEventListener('error', err => {
      console.log(err.message);
    });
    self.addEventListener('messageerror', err => {
      console.log(err.message);
    });


    // 关闭 worker 线程
    // self.close(); // 直接执行close方法就ok了
  }
)()