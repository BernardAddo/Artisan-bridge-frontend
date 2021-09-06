export const fetchTopRatedArtisans = async () => {
  const fetchfunc =async () => {
    fetch("https://artisan-bridge-data.herokuapp.com/top_rated_artisans")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Could not fetch data");
        }
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
  };

  const topArtisans = await fetchfunc();
  console.log(topArtisans)
  return topArtisans;
};
