

export const loadClient = (discoveryURI) => {
  window.gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_SHEETS_API_KEY);
  return window.gapi.client.load(discoveryURI)
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
