import React, { useState, useEffect } from 'react';


let info1 = { name: '', value: '', imageSrc: '' };
let info2 = { name: '', value: '', imageSrc: '' };
let data;


function Choice() {
    

    //onStart();
    useEffect(() => {
        console.log('j');
        onStart();
        setImg1(info1.imageSrc);
        setImg2(info2.imageSrc);
    }, []);

    const [img1, setImg1] = useState(info1.imageSrc);
    const [img2, setImg2] = useState(info2.imageSrc);
    const [score, setScore] = useState(0);

    

    function onStart() {
        console.log('start');
        data = [
            {
                name: 'More efficient vehicle',
                value: 2.2,
                imageSrc:
                    'https://cd-blog-images-prod.s3.us-west-2.amazonaws.com/uploads/2022/4/625ddc3ce23f9.jpeg',
            },
            {
                name: 'Purchase compressed natural gas vehicle',
                value: 2.3,
                imageSrc:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/FillingUpCNG.jpg/1280px-FillingUpCNG.jpg',
            },
            {
                name: 'Purchase electric vehicle',
                value: 6.9,
                imageSrc:
                    'https://tesla-cdn.thron.com/delivery/public/image/tesla/3863f3e5-546a-4b22-bcbc-1f8ee0479744/bvlatuR/std/1200x628/MX-Social',
            },
            {
                name: 'Purchase hybrid vehilce',
                value: 3.2,
                imageSrc:
                    'https://upload.wikimedia.org/wikipedia/commons/f/fa/2016_Toyota_Prius_%28ZVW50L%29_Hybrid_liftback_%282016-04-02%29_01.jpg',
            },
            {
                name: 'Telecommute to work',
                value: 1.0,
                imageSrc:
                    'https://www.usnews.com/dims4/USNEWS/081e0c3/2147483647/crop/2121x1415%2B0%2B1/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fcd%2F7a%2F9752b1cb4b3ba4730d9e1d1d4ad8%2F210614-workingfromhome-stock.jpg',
            },
            {
                name: 'Ride my bike',
                value: 0.5,
                imageSrc:
                    'https://www.icebike.org/wp-content/uploads/2015/07/advantages-91976592-e1438024723397.jpg',
            },
            {
                name: 'Take public transportation',
                value: 0.4,
                imageSrc:
                    'https://upload.wikimedia.org/wikipedia/commons/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg',
            },
            {
                name: 'Practice eco driving',
                value: 1.0,
                imageSrc:
                    'https://thepep.unece.org/sites/default/files/inline-images/EcoDriving%20picture%20for%20website.png',
            },
            {
                name: 'Maintain my vehicles',
                value: 0.8,
                imageSrc:
                    'https://img.autobytel.com/car-reviews/autobytel/133830-vehicle-repair-vs-vehicle-maintenance/AdobeStock_325122884.jpeg',
            },
            {
                name: 'Carpool to work',
                value: 0.9,
                imageSrc:
                    'https://assets.entrepreneur.com/content/3x2/2000/20160308205658-ridesharing-car-taxis-drive.jpeg',
            },
            {
                name: 'Stop travelling by plane',
                value: 1.5,
                imageSrc:
                    'https://image.cnbcfm.com/api/v1/image/106537227-1589463911434gettyimages-890234318.jpeg?v=1589463982&w=1600&h=900',
            },
            {
                name: 'Switch from incandescent bulbs to CFLs or LEDs',
                value: 0.3,
                imageSrc:
                    'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2016/12/iStock-495670965.jpg',
            },
            {
                name: 'Turn off lights',
                value: 0.2,
                imageSrc:
                    'https://yourteenmag.com/wp-content/uploads/2018/07/Depositphotos_9053892_l-2015.jpg',
            },
            {
                name: 'Switch from T12 Lights to T8 Lights',
                value: 0.1,
                imageSrc:
                    'https://images.homedepot.ca/productimages/p_1001654147.jpg?product-images=l',
            },
            {
                name: 'Purchase tankless water heater',
                value: 0.0,
                imageSrc:
                    'https://www.familyhandyman.com/wp-content/uploads/2018/07/rheem-tankless-water-heater.jpg',
            },
            {
                name: 'Reduce winter household thermostat by 8 degrees F',
                value: 0.5,
                imageSrc:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/first-day-of-winter-solstice-2021-1638278570.jpg',
            },
            {
                name: 'Increase summer household thermostat by 4 degrees F',
                value: 0.2,
                imageSrc:
                    'https://i.ytimg.com/vi/lG2UBwv9YiY/maxresdefault.jpg',
            },
            {
                name: 'Purchase high efficiency cooling',
                value: 0.0,
                imageSrc:
                    'http://cdn.shopify.com/s/files/1/0066/7595/5769/products/1-newair-portable-air-conditioner-ac-14100e-hero.jpg?v=1570223340',
            },
            {
                name: 'Purchase high efficiency heating',
                value: 0.0,
                imageSrc:
                    'https://m.media-amazon.com/images/I/814UeYmkQRL._AC_SL1500_.jpg',
            },
            {
                name: 'Replace refrigerator with Energy Star refrigerator',
                value: 0.1,
                imageSrc:
                    'https://www.ikea.com/ca/en/images/products/vaelgrundad-bottom-freezer-refrigerator-stainless-steel__0956611_pe804788_s5.jpg',
            },
            {
                name: 'Replace printers with Energy Star printers',
                value: 0.0,
                imageSrc:
                    'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477031_sd.jpg',
            },
            {
                name: 'Replace copiers with Energy Star copiers',
                value: 0.1,
                imageSrc:
                    'https://www.fisherstech.com/wp-content/uploads/2019/11/copiers.jpg',
            },
            {
                name: 'Replace computers with Energy Star computers',
                value: 0.0,
                imageSrc:
                    'https://www.efficiencyvermont.com/Media/Default/images/products/electronics/computers-monitors/laptop-energy-star.jpg?width=1120&quality=80',
            },
            {
                name: 'Use rechargeable batteries',
                value: 0.2,
                imageSrc:
                    'https://canada.newark.com/productimages/large/en_GB/BT05184-40.jpg',
            },
            {
                name: 'Manage computer energy use',
                value: 0.4,
                imageSrc:
                    'https://images.idgesg.net/images/article/2021/11/shutterstock_1959278563-23.11.21-sustainability-in-the-tech-industry-the-hidden-problem-and-how-to-tackle-it-100910470-large.jpg?auto=webp&quality=85,70',
            },
            {
                name: 'Purchase electricity from a green source',
                value: 6.5,
                imageSrc:
                    'https://www.innovationnewsnetwork.com/wp-content/uploads/2020/08/Hydropower.jpg',
            },
            {
                name: 'Install photovoltaic (PV) panels',
                value: 6.5,
                imageSrc:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/1280px-Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg',
            },
            {
                name: 'Install solar water heater',
                value: 0.0,
                imageSrc:
                    'https://ensia.com/wp-content/uploads/2020/10/Feature_SolarWaterHeaters_main.jpg',
            },
            {
                name: 'Install low flow showerheads',
                value: 0.4,
                imageSrc:
                    'https://earth911.com/wp-content/uploads/2018/03/AdobeStock_136571692-e1626371373673.jpeg',
            },
            {
                name: 'Install low flow faucets',
                value: 0.0,
                imageSrc:
                    'https://hgtvhome.sndimg.com/content/dam/images/hgrm/fullset/2011/6/23/49/kitchen_faucet_brizo_Venuto.jpg.rend.hgtvcom.1280.960.suffix/1409188801694.jpeg',
            },
            {
                name: 'Install low flow toilets',
                value: 0.0,
                imageSrc:
                    'https://elemental.green/wp-content/uploads/2021/02/Nano_Dual_Angle.jpg',
            },
            {
                name: 'Line dry clothing',
                value: 0.4,
                imageSrc:
                    'https://www.farmersalmanac.com/wp-content/uploads/2020/11/Earthweek-tip.jpg',
            },
            {
                name: 'Install water efficient landscaping',
                value: 0.0,
                imageSrc:
                    'https://www.treehugger.com/thmb/MgeqPLhbU48fIlRB5WVjeQDCSAc=/2127x1409/filters:fill(auto,1)/GettyImages-1065437880-6bffb3280a364c5492911b545ff8ef73.jpg',
            },
            {
                name: 'Plant trees',
                value: 0.3,
                imageSrc:
                    'https://www.thespruce.com/thmb/2fz1zlPNq7cj7QkLAtKdqYrKvs0=/3704x2778/smart/filters:no_upscale()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg',
            },
            {
                name: 'Reduce my trash by 5%',
                value: 0.4,
                imageSrc:
                    'https://experiencelife.lifetime.life/wp-content/uploads/2021/02/Talking-Trash-1280x720.jpg',
            },
            {
                name: 'Print double sided',
                value: 0.3,
                imageSrc:
                    'https://content.instructables.com/ORIG/FQ9/HJMF/H82UNHGL/FQ9HJMFH82UNHGL.jpg?auto=webp&fit=bounds&frame=1&width=1024',
            },
            {
                name: 'Eat a low carbon diet',
                value: 1.7,
                imageSrc:
                    'https://www.refinery29.com/images/8998695.jpg?crop=40%3A21',
            },
            {
                name: 'Go organic',
                value: 0.2,
                imageSrc:
                    'https://htv.com.pk/wp-content/uploads/Why-Buy-Organic-Food-1.jpg',
            },
        ];

        let id1 = randomIdFromData();
        info1 = data[id1];

        data.splice(id1, 1);

        let id2 = randomIdFromData();
        info2 = data[id2];

        data.splice(id2, 1);

        //Figure out how to load onto the images
    }

    function pick(info) {
        console.log('choice');
        if (info.value == Math.max(info1.value, info2.value)) {
            console.log('win');
            alert('YOU DID IT');
            randomizeNext();
            setScore(score + 1);
            setImg1(info1.imageSrc);
            setImg2(info2.imageSrc);
        } else {
            console.log('lose');
            alert('YOU GOT IT WRONG LMFAO');

            onStart();
            setScore(0);
            setImg1(info1.imageSrc);
            setImg2(info2.imageSrc);
        }
    }

    function randomIdFromData() {
        console.log('randomId');
        return Math.floor(Math.random() * data.length);
    }

    function randomizeNext() {
        console.log(info1, info2);
        info1.name = info2.name;
        info1.value = info2.value;
        info1.imageSrc = info2.imageSrc;

        let id2 = randomIdFromData();
        info2 = data[id2];
        console.log(info1);
        console.log(info2);

        data.splice(id2, 1);
    }

    return (
        //<div style = {{backgroundImage: `url("https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg")`}}>

        //<p>hi</p>
        // </div>
        <div>
            <h1>{score}</h1>
            <img src={img1} id={'1'} onClick={() => pick(info1)}></img>
            <b></b>

            <img src={img2} id={'2'} onClick={() => pick(info2)}></img>
        </div>
    );
}

export default Choice;
