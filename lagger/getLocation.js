async function getLocation() {
    try {
      console.log(1123123);
      if ('geolocation' in navigator) {
        const permissionStatus = await navigator.permissions.query({
          name: 'geolocation',
        });
  
        if (permissionStatus.state === 'denied') {
          text.innerText = 'Permission Denied';
        } else if (permissionStatus.state === 'prompt') {
          text.innerText = 'prompt';
          navigator.geolocation.getCurrentPosition(
            () => {},
            () => {}
          );
        } else if (permissionStatus.state === 'granted') {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
  
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const accuracy = position.coords.accuracy;
  
          const locationInfo = `Latitude: ${latitude}<br>Longitude: ${longitude}<br>Accuracy: ${accuracy} meters`;
  
          text.innerHTML = locationInfo;
         } else {
          console.error('Geolocation permission denied.');
        }
      } else {
        console.error('Geolocation is not supported by your browser.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      throw new Error(error);
    }
  }

