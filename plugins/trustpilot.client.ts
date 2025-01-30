import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    (function(w, d, s, r, n) {
      w.TrustpilotObject = n
      w[n] = w[n] || function() {
        (w[n].q = w[n].q || []).push(arguments)
      }
      const a = d.createElement(s)
      a.async = 1
      a.src = r
      a.type = 'text/java' + s
      const f = d.getElementsByTagName(s)[0]
      f.parentNode?.insertBefore(a, f)
    })(window, document, 'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp')

    // Register Trustpilot after loading the script
    window.tp('register', 'qh8qPLWvKmhKvdEC')
  }
})