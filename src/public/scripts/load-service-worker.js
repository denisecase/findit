    // If service workers are supported by user browser
    // AFter all content has loaded, register the service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./scripts/service-worker.js')
      })
    }