export const xhRequest = url => new Promise(
  ((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      if (this.status === 200) {
        // Success
        resolve(JSON.parse(this.response))
      } else {
        // Something went wrong
        reject(new Error(this.statusText))
      }
    }
    xhr.onerror = function () {
      reject(new Error(
        `XMLHttpRequest Error: ${this.statusText}`,
      ))
    }
    xhr.open('GET', url)
    xhr.send()
  }),
)
