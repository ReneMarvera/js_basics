// Retornará una Promise
const getImage = async () => 
{
    try
    {
        const apiKey    = 'K0AnOkRc6PPQJ4M87um9Eds2C8BtohND';
        const endp      = 'https://api.giphy.com/v1/gifs/random?' + new URLSearchParams(
        {
            api_key: apiKey,
            tag: 'taylor swift'
        });

        const res       = await fetch(endp);    // Retorna un Response no una Promise
        const {data}    = await res.json();     // Retorna un Response no una Promise

        const imgUrl    = data.images.original.url;

        const img   = document.createElement('img');
        img.src     = imgUrl;
        document.body.appendChild(img);
        
    }
    catch(error)
    {
        console.error(error);
        const imgUrl    = 'https://giphy.com/gifs/chicken-bro-H54feNXf6i4eAQubud'
        const img       = document.createElement('img');
        img.src         = imgUrl;
        document.body.appendChild(img);
        
    }
    
}