self.addEventListener('install', e=>{
    const imagenes = caches.open('Boveda').then(cache=>{
        cache.add("/"),
        cache.add("img/logo.png"),
        cache.add('stylosindex.css'),
        cache.add('personajes.html'),
        cache.add('stylosPersonajes.css'),
        cache.add('index.html'),
        cache.add('app.js'),
        cache.add('sw.js'),
        cache.add("manifest.json"),
        cache.add("img/icono1.png"),       
        cache.add("img/pilar1.jpg"),        
        cache.add("img/pilar2.jpg"),    
        cache.add("img/pilar3.jpg"),      
        cache.add("img/nezuko.png"),
        cache.add("img/pilar5.jpg"),
        cache.add("img/pilar6.jpg"),        
        cache.add("img/pilar7.jpg"),    
        cache.add("img/pilar8.jpg"),      
        cache.add("img/pilar9.jpg"),
        cache.add("img/gif_pilar1.gif"),
        cache.add("img/gif_pilar2.gif")
        cache.add("img/gif_pilar3.gif")
        cache.add("img/gif_pilar4.gif")
        cache.add("img/gif_pilar5.gif")
        cache.add("img/gif_pilar6.gif")
        cache.add("img/gif_pilar7.gif")
        cache.add("img/gif_pilar8.gif")
        cache.add("img/gif_pilar9.gif")
    })
    e.waitUntil(imagenes);
})

self.addEventListener('fetch', e => {
    const respuesta = fetch (e.request).then ((newResp) =>{
        caches.open('Boveda 1').then((cache)=>{
            cache.put(e.request,newResp);
        });
        return newResp.clone();
    }).catch(err =>{
        return caches.match(e.request);
    })
    e.respondWith(respuesta);
})
