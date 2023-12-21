function wrapPromise(cb) {
    return new Promise((resolve, reject) => cb(resolve, reject));
  }
  
  /**
   * 用户授权。申请持久存储.
   */
  function grantPersist() {
    return wrapPromise((resolve, reject) => {
      if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persist().then(granted => {
          // granted: true/false
          resolve(granted);
        });
      } else {
        reject('navigator.storage.persist: the browser is not supported');
      }
    });
  }
  
  /**
   * 查看存储模式
   */
  function checkPersisted() {
    return wrapPromise((resolve, reject) => {
      if (navigator.storage && navigator.storage.persisted) {
        navigator.storage.persisted().then(result => resolve(result));
      } else {
        reject('navigator.storage.persisted is not support');
      }
    });
  }
  
  /**
   * 获取可使用磁盘空间和已使用的空间的信息.
   */
  function estimateSpace() {
    return new Promise((resolve, reject) => {
      if (navigator.storage && navigator.storage.estimate) {
        navigator.storage.estimate().then(estimate => {
          // 原始的单位是byte. 转成MB
          const ut = 1024 * 1024;
          resolve({
            total: estimate.quota / ut,
            usage: estimate.usage / ut
          });
        });
      } else {
        reject('navigator.storage.estimate: the browser is not supported');
      }
    });
  }