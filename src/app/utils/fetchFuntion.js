export async function getListings(){
  // if (typeof window !== 'undefined') {
  // if(localStorage.getItem("listings") === null){
  const url = 'https://redfin-com-data.p.rapidapi.com/property/search?location=Austin';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_KEY,
      'X-RapidAPI-Host': 'redfin-com-data.p.rapidapi.com',
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // localStorage.setItem("listings", result);
    return result.data.homes;
  } catch (error) {
    console.error(error);
  }
// } else {
//   return localStorage.getItem("listings");
// }
  }
// }
