const callbacks = [];
let store = {
  navText: ""
};

function notifyAll() {
  callbacks.forEach((cb, i) => {
    callbacks[i](store);
  });
}
export const subscribe = cb => {
  callbacks.push(cb);
};

export const setState = state => {
  store = state;
  notifyAll();
};