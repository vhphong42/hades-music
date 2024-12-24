import images from '../assets';
import Button from '../components/Button';
import {
    Ads,
    Block,
    Category,
    Chart,
    Dieukhoan,
    Discover,
    Following,
    Heart,
    IconsVIP,
    Info,
    LogOut,
    More,
    Mv,
    NewSong,
    Phone,
    Private,
    Quality,
    Radio,
    Star,
    ThemeMusic,
    Upload,
} from '../components/Icons';

// MENU action and button
export const MENU_ACTIONS_RIGHT = [
    {
        icon: Heart,
        title: 'Thêm vào thư viện',
        type: 'like',
    },
    {
        icon: More,
        title: 'Thêm',
        type: 'more',
    },
];
export const MENU_USER_HEADER = [

    
    {
        title: 'Đăng Xuất',
        icon: LogOut,
        type: 'logout',
        spederate: true,
    },
];
export const MENU_SETTING_HEADER = [
    // {
    //     title: 'Danh sách chặn',
    //     icon: Block,
    // },
    {
        title: 'Chất lượng nhạc',
        icon: Quality,
                children: {
            data: [
                {
                    title: 'SQ•128',
                    content: 'Giảm sử dụng dữ liệu cho các kết nối chậm hơn',
                },
                {
                    title: 'HQ•320',
                    content: 'Kết hợp tốt trong việc sử dụng dữ liệu và âm thanh',
                },
            ],
        }, 
    },
    {
        title: 'Liên hệ',
        icon: Phone,
        to: 'https://www.facebook.com/profile.php?id=100091686190125', // Thêm thuộc tính 'to'

    },
    // {
    //     title: 'Giao diện',
    //     icon: ThemeMusic,
    //        children: {
    //         data: [
    //             {
    //                 title: 'Luôn phát toàn màn hình',
    //             },
    //             {
    //                 title: 'Hiệu ứng',
    //             },
    //         ],
    //     }, 
    // },
    {
        title: 'Giới thiệu',
        icon: Info,
        children: {
            data: [
                {
                    title: '  HADES MUSIC ',              
                },
                {
                    title: '  Chủ quản: Võ Hồng Phong     ',              
                },
                {
                    title: '   Địa chỉ : 84TBG, phường 5,     ',              
                },
                {
                    title: '  Gò vấp, TPHCM.    ',              
                },
            ],
        }, 
    },
    

    // {
    //     title: 'Thỏa thuận sử dụng',
    //     icon: Dieukhoan,
    //     textblur: true,
    // },
];

// handle Action render
export const renderFeatureRight = (onHandle) => {
    const result = MENU_ACTIONS_RIGHT.map((item, index) => {
        return (
            <Button
                Icons={item.icon}
                key={index}
                extraTitle={item.title}
                circle_hide
                sizes="medium"
                onHandle={() => onHandle(item)}
            />
        );
    });
    return result;
};
export const SIDEBAR_MENU = [
    {
        title: 'Cá nhân',
        icon: Private,
        to: '/my-player',
    },
    {
        title: 'Khám Phá',
        icon: Discover,
        to: '/',
    },
    // {
    //     title: '#zingchart',
    //     icon: Chart,
    //     to: '/zing-chart',
    // }, 
    {
        title: 'Radio',
        icon: Radio,
        to: '/radio',
    },
    /*  {
        title: 'Theo Dõi',
        icon: Following,
        to: '/following',
    }, */
    {
        title: 'Nhạc Mới',
        icon: NewSong,
        spederate: true,
        to: '/new-songs',
    },
    /*  {
        title: 'Thể Loại',
        icon: Category,
        to: '/category',
    }, */
    {
        title: 'Top 100',
        icon: Star,
        to: '/top-100-song',
    },
    //  {
    //     title: 'MV',
    //     icon: Mv,
    //     to: '/the-loai-video',
    // }, 
];
export const BANNER_SLIDERS = [
    {
        banner: images.bannerSlider[0],
        to: 'new-songs',
    },
    {
        banner: images.bannerSlider[1],
        to: '/  ',
    },
    {
        banner: images.bannerSlider[2],
        to: '/top-trending?_filter=kpop',
    },
    {
        banner: images.bannerSlider[3],
        to: '/',
    },
];

// select national trending
export const KPOP_NATIONAL = 'kpop';
export const VPOP_NATIONAL = 'vpop';
export const USUK_NATIONAL = 'usuk';
export const ALL_NATIONAL = 'all';
export const LOBAl = 'lobal';
export const BUTTON_RENDER_SELECT_NATIONAL = [
    {
        title: 'TẤT CẢ',

        type: ALL_NATIONAL,
    },
    {
        title: 'VIỆT NAM',

        type: VPOP_NATIONAL,
    },
    {
        title: 'HÀN QUỐC',

        type: KPOP_NATIONAL,
    },
    {
        title: 'ÂU MỸ',

        type: USUK_NATIONAL,
    },
    {
        title: 'QUỐC TẾ',
        type: LOBAl,
    },
];
// Banner Singer Popular
export const BANNER_SINGER_POPULAR = [
    {
        src: require('../assets/images/BannerSinger/banner-g5-squad.jpg'),
        name_singer: 'G5 Squad',
        slug_banner_singer_popular: 'g5r-squad',
        title: 'Những Bài Hát Hay Nhất Của G5R',
    },
    {
        src: require('../assets/images/BannerSinger/banner-ho-quang-hieu.jpg'),
        name_singer: 'Hồ Quang Hiếu',
        slug_banner_singer_popular: 'ho-quang-hieu',
        title: 'Những Bài Hát Hay Nhất Của Hồ Quang Hiếu',
    },
    {
        src: require('../assets/images/BannerSinger/banner-jack-97.jpg'),
        name_singer: 'Jack 97',
        slug_banner_singer_popular: 'jack',
        title: 'Những Bài Hát Hay Nhất Của Jack',
    },
    {
        src: require('../assets/images/BannerSinger/banner-phan-manh-quynh.jpg'),
        name_singer: 'Phan Mạnh Quỳnh',
        slug_banner_singer_popular: 'phan-manh-quynh',
        title: 'Những Bài Hát Hay Nhất Của Phan Mạnh Quỳnh',
    },
    {
        src: require('../assets/images/BannerSinger/banner-son-tung-mtp.jpg'),
        name_singer: 'Sơn Tùng MTP',
        slug_banner_singer_popular: 'son-tung-m-tp',
        title: 'Những Bài Hát Hay Nhất Của Sơn Tùng MTP',
    },
];

export const BANNER_ALBUM_HOT = [
    {
        src: require('../assets/images/BannerAlbumHot/banner-album-hot-nhac-edm.jpg'),
        slug_banner_album_hot: 'edm',
        title: 'Đỉnh Cao EDM',
        name_data: [
            {
                name_singer: 'Alan Walker',
                slug_name_singer: 'alan-walker-torine',
            },
            {
                name_singer: 'DXRK ダーク',
                slug_name_singer: 'dxrk-ダーク',
            },
        ],
    },
    {
        src: require('../assets/images/BannerAlbumHot/banner-album-hot-nhac-han.jpg'),
        slug_banner_album_hot: 'nhac-han',
        title: 'Những Bài Hát Hay Nhất HÀN "XẺNG"',
        name_data: [
            {
                slug_name_singer: 'bts',
                name_singer: 'BTS',
            },
            {
                slug_name_singer: 'blackpink',
                name_singer: 'BlackPink',
            },
            {
                slug_name_singer: 'treasure',
                name_singer: 'TREASURE',
            },
        ],
    },
    {
        src: require('../assets/images/BannerAlbumHot/banner-album-hot-nhac-pop-au-my.jpg'),
        slug_banner_album_hot: 'pop-au-my',
        title: 'Đỉnh Cao Nhạc Pop, Nghe Như Không Nghe !!!',
        name_data: [
            {
                slug_name_singer: 'sasha-alex-sloan',
                name_singer: 'Sasha Alex',
            },
            {
                slug_name_singer: 'the-kid-laroi-justin-bieber',
                name_singer: 'Justin Bieber',
            },
        ],
    },
    {
        src: require('../assets/images/BannerAlbumHot/banner-album-hot-nhac-tre.jpg'),
        slug_banner_album_hot: 'nhac-tre',
        title: 'Nhạc Trẻ Gây Nghiện',
        name_data: [
            {
                slug_name_singer: 'nal',
                name_singer: 'Nal',
            },
            {
                slug_name_singer: 'khai-dang',
                name_singer: 'Khải Đăng',
            },
        ],
    },
    {
        src: require('../assets/images/BannerAlbumHot/banner-album-hot-rap-viet.jpg'),
        slug_banner_album_hot: 'rap',
        title: 'Cháy Hết Mình Với Những Bản Rap Hay Nhất Mọi Thời Đại',
        name_data: [
            {
                slug_name_singer: 'kidz',
                name_singer: 'KIDZ',
            },
            {
                slug_name_singer: 'b-ray-x-masew-ft-amee',
                name_singer: 'Bray',
            },
        ],
    },
];

// List Theme
export const MENU_THEME_LIST = {
    artist: [
        {
            title: 'Sáng',
            cardArtist: require('../assets/images/LisTheme/card_artist/card_theme_ganyu.jpg'),
            properties: {
                backgroundImg: require('../assets/images/LisTheme/img-background_ganyu.jpg'),
                colorPrimary: '#1A3570',
                textHover: '#4C7CFF',
                layoutBg: 'tranparent',
                layoutHeaderBg: 'rgba(179, 216, 219, 0.8)',
                playerBg: '#A3D5DC',
                primaryBg: '#D1EDF0',
                textPrimary: '#32323d',
                textSecondary: '#333333b0',
                purplePrimary: '#1966B2',
                newSongLayout: 'tranparent',
                borderPlayer: 'rgba(0,0,0,0.15)',
                backgrondSize: 'cover',
                sidebarPoup: '#cce0e0',
            },
        },
        {
            title: 'Mặc định',
            cardArtist:
                    require('../assets/images/LisTheme/card_artist/ddinppj-cadec65d-36c6-4705-82fb-612a9f6a8e36.jpg'),
            properties: {
                backgroundImg: require('../assets/images/LisTheme/card_artist/ddinppj-cadec65d-36c6-4705-82fb-612a9f6a8e36.jpg'),
                colorPrimary: '#170f23',
                textHover: '#c273ed',
                sidebarBg: 'tranparent',
                layoutHeaderBg: 'rgba(23, 15, 35, 0.666)',
                playerBg: '#130c1c',
                primaryBg: '#34224f',
                textPrimary: '#fff',
                textSecondary: 'hsla(0, 0%, 100%, 0.5)',
                purplePrimary: '#9b4de0',
                
                borderPlayer: 'hsla(0,0%,100%,0.1)',
                
            },
        },
        {
            title: 'Nâu',
            cardArtist: require('../assets/images/LisTheme/card_artist/anh-mo-ta.png'),
            properties: {
                backgroundImg: require('../assets/images/LisTheme/card_artist/anh-mo-ta.png'),
                colorPrimary: '#D08011',
                
                textHover: '#F59D22',
                playerBg: '#4C473E',
                layoutHeaderBg: '#767269cc',
                layoutBg: 'tranparentent',
                primaryBg: '#605C52',
                textPrimary: '#FFFF',
                textSecondary: 'hsla(0,0%,100%,0.5)',
                purplePrimary: '#D08011',
                newSongLayout: 'tranparent',
                borderPlayer: 'rgba(0,0,0,0.05)',
                sidebarPoup: '#604a45',
            },
        },

    ],
};
