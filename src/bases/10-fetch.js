const apiKey    = 'K0AnOkRc6PPQJ4M87um9Eds2C8BtohND';
const endp      = 'https://api.giphy.com/v1/gifs/random?' + new URLSearchParams({
    api_key: apiKey,
    tag: 'taylor swift'
});

fetch(endp)
.then(res => res.json())
.then(({data}) => 
{
    const img       = document.createElement('img');
    img.src         = data.images.original.url;

    document.body.append(img);
});