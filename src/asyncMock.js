        const products = [
            {
            "id":1,
            "name": "Motherboard ASUS",
            "description": "Motherboard ASUS Prime Z390-A LGA 1151 ATX para procesadores Intel de 8ª y 9ª generación.",
            "img": "https://statics.qloud.ar/gaming-point-06-2021/221_11-03-2024-05-03-33-asus-prime-z390-p_foto0g.jpg",
            "price": 199.99,
            "category": "Motherboard",
            "stock": 15
            },
            {
            "id":2,
            "name": "Motherboard MSI",
            "description": "Motherboard MSI MPG Z490 Gaming Edge WiFi ATX LGA 1200 para procesadores Intel de 10ª generación.",
            "img": "https://media.ldlc.com/r1600/ld/products/00/05/66/76/LD0005667679_2.jpg",
            "price": 209.99,
            "category": "Motherboard",
            "stock": 12
            },
            {
            "id":3,
            "name": "Tarjeta gráfica NVIDIA",
            "description": "Tarjeta gráfica NVIDIA GeForce RTX 3080 con 10GB GDDR6X, ideal para juegos de alta demanda gráfica.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNeSP5sDDNp8aUJVxGsNZeZPDotPdC1cOggQ&s",
            "price": 699.99,
            "category": "Tarjeta_gráfica",
            "stock": 8
            },
            {
            "id":4,
            "name": "Tarjeta gráfica AMD",
            "description": "Tarjeta gráfica AMD Radeon RX 6800 XT con 16GB GDDR6, excelente para juegos y aplicaciones gráficas intensivas.",
            "img": "https://microglobalpromos.com.ar/2022/img/032022/GV-R68XTAORUS-M-16GD_1.jpg",
            "price": 649.99,
            "category": "Tarjeta_gráfica",
            "stock": 6
            },
            {
            "id":5,
            "name": "Memoria RAM Corsair",
            "description": "Memoria RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz, ideal para mejorar el rendimiento del sistema.",
            "img": "https://m.media-amazon.com/images/I/715WSvAUlcL._AC_UF894,1000_QL80_.jpg",
            "price": 89.99,
            "category": "Memorias_RAM",
            "stock": 10
            },
            {
            "id":6,
            "name": "Memoria RAM Kingston",
            "description": "Memoria RAM Kingston HyperX Fury 16GB (2x8GB) DDR4 2666MHz, perfecta para juegos y multitarea.",
            "img": "https://acdn.mitiendanube.com/stores/001/397/378/products/d_769065-mlu70015261008_062023-f-dcf8a3b7c76b2c61c417147808618139-1024-1024.jpg",
            "price": 79.99,
            "category": "Memorias_RAM",
            "stock": 18
            },
            {
            "id":7,
            "name": "Disco duro SSD Samsung",
            "description": "Disco duro SSD Samsung 970 EVO Plus 1TB NVMe M.2, para una velocidad de lectura y escritura ultra rápida.",
            "img": "https://http2.mlstatic.com/D_NQ_NP_921369-MLU72603476865_102023-O.webp",
            "price": 149.99,
            "category": "Almacenamiento",
            "stock": 14
            },
            {
            "id":8,
            "name": "Disco duro SSD Crucial",
            "description": "Disco duro SSD Crucial MX500 1TB 3D NAND SATA, con alta velocidad de transferencia y gran capacidad.",
            "img": "https://tienda.starware.com.ar/wp-content/uploads/2021/03/disco-solido-ssd-crucial-mx500-500gb-25-sata-6-25p-3d-nand-2309-3691.jpg",
            "price": 129.99,
            "category": "Almacenamiento",
            "stock": 9
            },
            {
            "id":9,
            "name": "Fuente de poder EVGA",
            "description": "Fuente de poder EVGA 600 W1, 80+ WHITE 600W, para una entrega de energía fiable y eficiente.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSanvTI_bo1-ALDKX4F5_QgbMS0eAQWZhIYSA&s",
            "price": 49.99,
            "category": "Fuente_de_poder",
            "stock": 16
            },
            {
            "id":10,
            "name": "Fuente de poder Corsair",
            "description": "Fuente de poder Corsair RM850x, 80+ GOLD 850W, con cables totalmente modulares para una fácil instalación.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPKv5ZmmhbkdCSWA8EFNNPnw6QZwyFgFULg&s",
            "price": 129.99,
            "category": "Fuente_de_poder",
            "stock": 7
            }
        ];

        export const getProducts = ()=> {
            return new Promise ((res) => {
                setTimeout (() => {
                    res(products);
                },1000);
            });
        };
        export const getProductsByCategory =(categoryId)=> {
            return new Promise ((res)=> {
                setTimeout(() => {
                    if(!categoryId) res(products)
                    res(products.filter((prod)=>prod.category === categoryId))
                },1000);
        });
        };
        export const getProductsById = (productId)=>{
            return new Promise((res)=> {
                setTimeout(()=> {
                    const idParse = parseInt(productId)
                    res(products.find((prod)=> prod.id === idParse))
                },1000 );
            });
        };