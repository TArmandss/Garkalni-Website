// ICONS FROM REACT ICONS

import { GiMountainClimbing } from 'react-icons/gi';
import { FaHotTub } from 'react-icons/fa';
import { GiKidSlide } from 'react-icons/gi';
import { FaCar } from 'react-icons/fa';
import { GiCampfire } from 'react-icons/gi';
import { GiCastle } from 'react-icons/gi';
import { FaTents } from 'react-icons/fa6';
import { MdDirectionsBike } from 'react-icons/md';
import { LuPartyPopper } from 'react-icons/lu';

export const backgrounds = ['/assets/garkalni-gallery/bg1.jpg', '/assets/images/garkalnibg.png'];
export const GarkalniServices = [
    {
        index: 1,
        language: {
            lv: {
                name: 'LIELĀ TRASE KOKOS',
                img: process.env.PUBLIC_URL + '/assets/images/trase.png',
                description:
                    'Piedāvājam izaicināt savus spēkus piedzīvojumu trasē kokos kura ir 700m gara, ar vairākiem interesantiem šķēršļiem. Ir trīs nolaišanās punkti uz zemi ja gadījumā spēki ir izsīkuši. Trasē ir 7 nobraucieni. Augstākais trases punkts sasniedz 10m no zemes. Vēlamais augums lai ietu pa trasi ir 1,50m. Nodrošinām ar ekipējumu, ķiveri un cimdiem.',
                exceptions: 'Augums ≈  1.50m',
                icon: <GiMountainClimbing />,
                price: {
                    'Piaugušiem (18+)': '12,00',
                    'Līdz 18 gadiem': '10,00'
                }
            },
            en: {
                name: 'BIG TRACK IN THE TREES',
                img: process.env.PUBLIC_URL + '/assets/images/trase.png',
                description:
                    'We offer you a challenge to test your skills on an adventure trail in the treetops, which is 700m long and includes several interesting obstacles. There are three landing points on the ground in case you get tired. The trail has 7 descents. The highest point of the trail is 10m above the ground. The desired height to go through the trail is 1.50m. We provide equipment, helmets, and gloves.',
                exceptions: 'Height => 1.50m',
                price: {
                    'Adults (18+)': '12,00',
                    'Child (10 - 17 yr)': '10,00'
                }
            },
            rus: {
                name: 'БОЛЬШОЙ ТРАССА НА ДЕРЕВЬЯХ',
                img: process.env.PUBLIC_URL + '/assets/images/trase.png',
                description:
                    'Мы предлагаем вам испытать свои силы на приключенческом треке среди деревьев, который протяженностью 700 метров и включает в себя несколько интересных препятствий. Есть три точки посадки на землю в случае, если вы устанете. На треке 7 спусков. Самая высокая точка трека находится на высоте 10 метров над землей. Желательный рост для прохождения трека - 1,50 метра. Мы предоставляем снаряжение, шлемы и перчатки',
                exceptions: 'Pост => 1.50m',
                price: {
                    'Взрослые (18+)': '12,00',
                    'Дети (10 - 17 лет)': '10,00'
                }
            }
        }
    },
    {
        index: 2,
        language: {
            lv: {
                name: 'KUBULS UN PIRTS',
                img: process.env.PUBLIC_URL + '/assets/images/kubuls3.png',
                description: 'Piedāvājumu klāsts aug, un tagad arī ir piiejama kubuls īrē.',
                exceptions: 'Iekļauta arī piknika vieta',
                icon: <FaHotTub />,
                price: {
                    Pirts: '50,00',
                    Kubuls: '50,00'
                }
            },
            en: {
                name: 'TUB AND SAUNA',
                img: process.env.PUBLIC_URL + '/assets/images/kubuls.JPG',
                description: '',
                price: {
                    'Darba dienās': '50,00',
                    'Pirts': '50,00'
                }
            },
            rus: {
                name: 'КУБУЛ И САУНА',
                img: process.env.PUBLIC_URL + '/assets/images/kubuls.JPG',
                description: '',
                price: {
                    'Darba dienās': '50,00',
                    'Pirts': '50,00'
                }
            }
        }
    },

    {
        index: 3,
        language: {
            lv: {
                name: 'MAZĀ KOKU TRASE',
                img: process.env.PUBLIC_URL + '/assets/images/bernu-laukums.JPG',
                icon: <GiKidSlide />,

                description: '',
                price: {
                    [addLineBreaks('Bērnu trase, Smilšu kaste, Koka mājiņa, Šūpoles, Sajūtu taka')]:
                        '4,00'
                }
            },
            en: {
                name: "CHILDREN'S PLAYGROUND",
                img: process.env.PUBLIC_URL + '/assets/images/bernu-laukums.JPG',
                description: '',
                price: {
                    Adults: '10,00',
                    Child: '8,00'
                }
            },
            rus: {
                name: 'THE BIG TRACK IN THE TREES',
                img: process.env.PUBLIC_URL + '/assets/images/bernu-laukums.JPG',
                description: '',
                price: {
                    Adults: '10,00',
                    Child: '8,00'
                }
            }
        }
    },

    {
        index: 5,
        language: {
            lv: {
                name: 'BAĢIJI',
                img: process.env.PUBLIC_URL + '/assets/images/kvadracikli.JPG',
                description:
                    'Mazajiem aktīvās atpūtas cienītājiem piedāvājam bērnu trasi kas atrodas tikai 2m no zemes. Labs līdzsvara attīstītājs līdz būs iespēja kāpt augstāk.',
                icon: <FaCar />,

                price: {
                    '10 minūtes': '3,50',
                    '15 minūtes': '4,50',
                    '30 minūtes': '5,50'
                }
            },
            en: {
                name: 'KARTS',
                img: process.env.PUBLIC_URL + '/assets/images/kvadracikli.JPG',
                description: '',
                price: {
                    '10 min': '3,50',
                    '15 min': '4,50',
                    '30 min': '5,50'
                }
            },
            rus: {
                name: 'БАГИ МАШИНКИ',
                img: process.env.PUBLIC_URL + '/assets/images/kvadracikli.JPG',
                description: '',
                price: {
                    '10 минут': '3,50',
                    '15 минут': '4,50',
                    '30 минут': '5,50'
                }
            }
        }
    },
    {
        index: 6,
        language: {
            lv: {
                name: 'PIKNIKA VIETA',
                img: process.env.PUBLIC_URL + '/assets/images/piknika-vieta.JPG',
                description:
                    'Piedāvājam arī iznomāt piknika vietas svētku svinēšanai, vai vienkāršai atpūtai. Piknika vietas ir labiekārtotas ar soliņiem un galdiņiem, ugunskura vietām, un ir pieejami arī grili. Lūgums piknika vietu rezervēt laicīgi. ',
                icon: <GiCampfire />,

                price: {
                    [addLineBreaks('Piknika vieta, Mangals, Ugunskura vieta')]: '10,00'
                }
            },
            en: {
                name: 'PICNIC AND CAMPFIRE SPOT',
                img: process.env.PUBLIC_URL + '/assets/images/piknika-vieta.JPG',
                description: '',
                price: '10,00'
            },
            rus: {
                name: 'МЕСТО ДЛЯ ПИКНИКА И КОСТРА',
                img: process.env.PUBLIC_URL + '/assets/images/piknika-vieta.JPG',
                description: '',
                price: '10,00'
            }
        }
    },
    {
        index: 7,
        language: {
            lv: {
                name: 'PIEPŪŠAMĀ ATRAKCIJA',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',
                description: '',
                exceptions: 'Par pieejamību sekot līdzi Instagram un Facebook',
                icon: <GiCastle />,

                price: {
                    '15 minūtes': '2,50',
                    '30 minūtes': '3,50',
                    '60 minūtes': '4,50'
                }
            },
            en: {
                name: 'INFLATABLE ATTRACTION',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',

                description: '',
                price: ''
            },
            rus: {
                name: 'НАДУВНОЙ АТТРАКЦИОН',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',
                description: '',
                price: ''
            }
        }
    },
    {
        index: 8,
        language: {
            lv: {
                name: 'VELOSIPĒDU NOMA',
                img: process.env.PUBLIC_URL + '/assets/images/Bicycles.png',
                description:
                    'Piedāvājam arī velosipēdu nomu pa trases teritoriju, vai arī Jūsu pašu izvēlētajam maršrutam.Pieejami 10 kalnu velosipēdi. Velo ķivere un atstarojošā veste ietilpst nomas maksā.',
                icon: <MdDirectionsBike />,

                price: {
                    'Pa teritoriju': '2,00',
                    'Ārpus teritorijas (24h)': '15,00'
                }
            },
            en: {
                name: 'BIKE RENTAL',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',
                description: '',
                price: {
                    'On the territory': '2.00',
                    'Outside the territory (24)': '15.00'
                }
            },
            rus: {
                name: 'ПРОКАТ ВЕЛОСИПЕДОВ',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',
                description: '',
                price: {
                    'По территории': '2.00',
                    'За пределами территории (24h)': '15.00'
                }
            }
        }
    },
    {
        index: 9,
        language: {
            lv: {
                name: 'TELTS VIETAS NOMA',
                img: process.env.PUBLIC_URL + '/assets/images/tents.png',
                description:
                    'Mazāk prasīgiem nakšņotājiem un dabas baudītājiem piedāvājam iznomāt telšu vietas. Pieejamas arī trīs divvietīgas teltis, kuras var iznomāt. Teritorijā ir pieejams ūdens, labierīcības un elektrība. ',
                icon: <FaTents />,

                price: {
                    'Telts vietas noma (24h)': '10,00'
                }
            },
            en: {
                name: 'TENT SPOT RENTAL',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',
                description: '',
                price: '10,00'
            },
            rus: {
                name: 'АРЕНДА МЕСТА ДЛЯ ПАЛАТКИ',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',
                description: '',
                price: '10,00'
            }
        }
    },
    {
        index: 10,
        language: {
            lv: {
                name: 'BANĶEŠU ZĀLE',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',
                description:
                    'Lielākām svinībām piedāvājam mūsu banketu zāli Gorykolnu Pogrobs kurš ir restaurēts, un ir vienīgais kas palicis kopš 18.gs. kad vēl bija Gorykolna muiža. Zālē ietilpst 30-35 cilvēki. Vasaras sezonā ideāla vieta svinībām un ziemas sezonā var apkurināt. ',
                icon: <LuPartyPopper />,

                exceptions: 'tilpums ≈ 30 cilvēki',
                price: {
                    'Uz 24 stundām': '50,00'
                }
            },
            en: {
                name: 'BANKET HALL',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',
                description: '',
                price: '???'
            },
            rus: {
                name: 'БАНКЕТНЫЙ ЗАЛ',
                img: process.env.PUBLIC_URL + '/assets/images/p-atrakcija.JPG',
                description: '',
                price: '???'
            }
        }
    },
    {
        index: 11,
        language: {
            lv: {
                name: 'SAJŪTU TAKA',
                img: process.env.PUBLIC_URL + '/assets/images/sajutu-taka2.png',
                description: '',
                exceptions: 'tilpums ≈ 30 cilvēki',
                price: {
                    'Banķešu zāle': 'Bezmaksas'
                }
            }
        }
    }
];

function addLineBreaks(str) {
    return str.split(',').join('\n'); //
}
