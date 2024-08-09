const apiUrlBase = 'https://api.jikan.moe/v4'

       const apiFetchData = async(endpoint) => {
          try {
                const response = await fetch(`${apiUrlBase}/${endpoint}`)
                if(!response.ok)  {
                    throw new Error('No funciona')
                }
                const data = await response.json()
                    return data
            } catch (error) {
              console.error('There has been a problem with your fetch operation:', error);
              throw error;
              }
        }

        export const fetchAnimeNews = async () => {
          return await apiFetchData(`seasons/now`);
        };
        

