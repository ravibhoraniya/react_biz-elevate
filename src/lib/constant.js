import {_} from 'underscore';
import RCheckbox from '../reusable-component/checkbox';

export const SIDE_BAR_MENU = [
  {
    title: "DASHBOARD",
    menu: [
      {
        title: "Overview",
        path: "#abc",
        step: null,
        icon: "images/icon/icon_dashboard.svg"
      },
      {
        title: "Campaigns",
        path: "/campaigns",
        step: 0,
        icon: "images/icon/Group 270.svg"
      },
      {
        title: "Adsets",
        path: '#a',
        step: 1,
        icon: "images/icon/chart (1).svg"
      },
      {
        title: "Ad Creatives",
        path: "#abc",
        step: 2,
        icon: "images/icon/puzzle.svg"
      },
      {
        title: "Bidding",
        path: "#abc",
        step: null,
        icon: "images/icon/Group 324.svg"
      }
    ]
  },
  {
    title: "ANALYTICS",
    menu: [
      {
        title: "Insights",
        path: "#abc",
        icon: "images/icon/Path 646.svg"
      },
      {
        title: "Audience Breakdown",
        path: "#abc",
        icon: "images/icon/Group 272.svg"
      },
      {
        title: "Cohort Analysis",
        path: "#abc",
        icon: "images/icon/Path 661.svg"
      },
      {
        title: "Funnel Analysis",
        path: "#abc",
        icon: "images/icon/filter.svg"
      },
      {
        title: "Reporting",
        path: "#abc",
        icon: "images/icon/Path 662.svg"
      }
    ]
  },
  {
    title: "Settings",
    menu: [
      {
        title: "User Profile",
        path: "#abc",
        icon: "images/icon/user (2).svg"
      },
      {
        title: "Accounts",
        path: "#abc",
        icon: "images/icon/group.svg"
      },
      {
        title: "Affiliates",
        path: "#abc",
        icon: "images/icon/add-user.svg"
      },
      {
        title: "Billings",
        path: "#abc",
        icon: "images/icon/invoice.svg"
      },
      {
        title: "Support",
        path: "#abc",
        icon: "images/icon/support.svg"
      }
    ]
  }
];

export const CAMPAIGNS = {
  OBJECTIVES: [
    {
      title: "Awareness",
      menu: ["BRAND AWARENESS", "REACH"]
    },
    {
      title: "Consideration",
      menu: [
        "TRAFIC",
        "ENGAGEMENT",
        "APP INSTALLS",
        "VIDEO VIEWS",
        "LEAD GENERATION",
        "MESSAGES"
      ]
    },
    {
      title: "Conversion",
      menu: ["CONVERSIONS", "CATALOG SALES", "STORE TRAFFIC"]
    }
  ],
  AD_CATEGORY: [
    {
      col: "col-5",
      img: "/assets/icons/home/home.png",
      title: "HOUSING",
      subTitle:
        "Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities."
    },
    {
      col: "col-5",
      img: "/assets/icons/portfolio/portfolio.png",
      title: "EMPLOYMENT",
      subTitle:
        "Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities."
    },
    { col: "col-2" },
    {
      col: "col-5",
      img: "/assets/icons/credit-card/credit-card (2).png",
      title: "CREDIT",
      subTitle:
        "Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities."
    },
    {
      col: "col-5",
      img: "/assets/icons/supermarket/supermarket.png",
      title: "BUSINESS",
      subTitle:
        "Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities."
    },
    { col: "col-2" }
  ],
  timeline: [
    {name: 'Campaign type', href: '#campaignType'},
    {name: 'Special Ad Category', href: '#specialAdCategory'},
    {name: 'Objective', href: '#marketingObjective'},
    {name: 'Budget Optimization', href: '#budgetOptimization'},
  ]
};

export const ADSETS = {
  ADSET_TYPE: [
    {type: 'new', title: 'Create new adsets', img: '/assets/icons/create-adsets/new-adsets.png'},
    {type: 'existing', title: 'Use existing adsets', img: '/assets/icons/existing-adsets/existing-adsets.png'},
  ],
  PLACEMENT_TYPE: [
    {type: 'auto', title: 'Automatic Placements (Recommended)'},
    {type: 'manual', title: 'Edit Placements'},
  ],
  PLATFORMS: ['Facebook', 'Instagram', 'Audience Network', 'Messanger'],
  PLACEMENTS: [
    {label: 'Feed', subLabel: 'Get high visibility for your business with ads in feeds'},
    {label: 'Story', subLabel: 'Tell a rich, visual story with immersive, fullscreen vertical ads'},
    {label: 'InStream Video', subLabel: 'Quickly capture people\'s attention while they\'re watching videos'},
    {label: 'Search', subLabel: 'Get visibility for your business as people search on Facebook'},
    {label: 'Messages', subLabel: 'Send offers or updates to people who are already connected to your business'},
    {label: 'In-Article', subLabel: 'Engage with people reading content from publishers'},
    {label: 'Apps and Sizes', subLabel: 'Expand your reach with ads in external apps and websites'},
  ],
  gender:[{ name: "All", id: 0 },{name: 'Male', id: 1},{name: 'Female', id: 2}],
  age: _.range(18,66),
  DEVICES: [
    { name: 'All Devices', value: 'all' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'Desktop', value: 'desktop' }
  ],
  timeline: [
    {name: 'Page', href: '#page'},
    {name: 'Audience', href: '#audience'},
    {name: 'Placements', href: '#placements'},
    {name: 'Devices & Systems', href: '#devicesSystems'},
    {name: 'Ad Delivery', href: '#adDelivery'},
    {name: 'Schedule', href: '#schedule'},
  ]
}

export const ADS = {
  FORMAT: [
    {type: 'carousel', title: 'Carousel', subTitle: 'Two or more Images or Videos', img: '/assets/icons/carousel/carousel.png'},
    {type: 'single', title: 'Single Image or Video', subTitle: 'One image or video, or a slideshow with multiple images', img: '/assets/icons/video-player/video-player.png'},
  ],
  timeline: [
    {name: 'Headline', href: '#headline'},
    {name: 'Identity', href: '#identity'},
    {name: 'Format', href: '#format'},
    {name: 'Tracking', href: '#tracking'},
  ],
  primaryText: {label: 'Primary Text', placeholder: 'Tell your people what your ad is about', toolTip: 'The primary text for your ad appears in all placements, though the position varies. You can use @ to tag Facebook profiles or Pages. We recommend 125 characters or less.'},
  checkboxes: [
    {label: 'Automatically show the best performing cards first'},
    {label: 'Add a card at the end with your Page profile picture.'},
    {label: 'Add a map card showing your nearest stores.'},
  ]
}

export let TABLE = {
  tableHead: ['CAMPAIGN NAME', 'BUDGET', 'RESULT', 'REACH', 'IMPRESSIONS', 'COST PER RESULT', 'AMOUNT SPENT', 'ENDS', 'PAGE LIKES', 'LINK CLICKS'],
  adsetTableHead: ['ADSET NAME', 'BUDGET', 'RESULT', 'REACH', 'IMPRESSIONS', 'COST PER RESULT', 'AMOUNT SPENT', 'ENDS', 'PAGE LIKES', 'LINK CLICKS'],
  adsTableHead: ['ADS NAME', 'BUDGET', 'RESULT', 'REACH', 'IMPRESSIONS', 'COST PER RESULT', 'AMOUNT SPENT', 'ENDS', 'PAGE LIKES', 'LINK CLICKS', 'QUALITY RANKING', 'ENGAGEMENT RANKING', 'CONVERSION RATE RANKING', 'FREQUENCY'],
  state: {
    'Conversions - Dropshippers': false,
    'Lead Gen - Digital Uprisers':false
  },
  lists: [
    {
      col1: {
        campaignName: 'Conversions - Dropshippers',
        delivery: 'Active',
        graph: '#abc',
        chart: '#abc',
        edit: '#abc',
        duplicate: '#abc'
      },
      col2: '$2200',
      col3: '2290',
      col4: '13,065',
      col5: '35,375',
      col6: 'Rs. 792',
      col7: '3,69,256',
      col8: 'Ongoing',
      col9: '2256',
      col10: '19'
    },
    {
      col1: {
        campaignName: 'Lead Gen - Digital Uprisers',
        delivery: 'Pause',
        graph: '#abc',
        chart: '#abc',
        edit: '#abc',
        duplicate: '#abc'
      },
      col2: '$2200',
      col3: '2290',
      col4: '13,065',
      col5: '35,375',
      col6: 'Rs. 792',
      col7: '3,69,256',
      col8: 'Ongoing',
      col9: '2256',
      col10: '19'
    },
  ]
}
