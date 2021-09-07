export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8Ke7YNhUxL9x1GcYtGhneEXEl73u16K4&q=${ encodeURI( category ) }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium.url
        }
    });

    return gifs;
}