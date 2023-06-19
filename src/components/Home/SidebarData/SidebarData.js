import {logo,dashoard,order,wallet,settings,growth,integration,finance,courier,weight,help} from '../..'
import {Scale,MonitorWeight,Lock,Block,FolderOpen,Loop,CurrencyRupee,RateReview, EdgesensorLow,Comment,Receipt,Sell,EditNote,NotificationsActive,RssFeed,Calculate,HistoryToggleOff,Update,Commit,Money,FilterFrames,Add,CropSquare,LocalConvenienceStore,AddShoppingCart,AccountBalanceWallet} from '@mui/icons-material';

export const sideItems = [
    {
        id:1,
         path:'/',
        title:"Home",
        logo:logo,
    },
    {
        id:2,
         path:'/dashboard',
        title:"Dashboard",
        logo:dashoard
    },
    {
        id:3,
         path:'/order',
        title:"Order",
        logo:order
    },
    {
        id:4,
         path:'/wallet',
        title:"Wallet",
        logo:wallet
    },
    {
        id:5,
         path:'/tools',
        title:"Tools",
        logo:settings
    },
    {
        id:6,
         path:'/growth',
        title:"Growth",
        logo:growth
    },
    {
        id:7,
         path:'/integration',
        title:"Integration",
        logo:integration
    },
    {
        id:8,
         path:'/finance',
        title:"Finance",
        logo:finance
    },
    {
        id:9,
         path:'/ndr',
        title:"NDR",
        logo:courier
    },
    {
        id:10,
         path:'/courier',
        title:"Courier",
        logo:courier
    },
    {
        id:11,
         path:'/weight',
        title:"Weight",
        logo:weight
    },
    {
        id:12,
         path:'/help',
        title:"Help Desk",
        logo:help
    },
    {
        id:13,
         path:'/settings',
        title:"Settings",
        logo:settings
    }
]

export const hoverMenu = [
    [],
    [    {
        id:1.1,
        path:'/performanceoverview',
        title:'Performance Overview',
        logo:<Commit />
         },
        {
        id:1.2,
        path:'/revenue',
        title:'Revenue',
        logo:<Money/>
         },
        {
        id:1.3,
        path:'/orderstatus',
        title:'Order Status',
        logo:<FilterFrames/>
        }
    ],
    [    {
        id:2.1,
        path:'/createshipment',
        title:'Create Shipment',
        logo:<Add/>
         },
        {
        id:2.2,
        path:'/allshipment',
        title:'All Shipment',
        logo:<CropSquare/>
         },
        {
        id:2.3,
        path:'/storeorder',
        title:'Store Order',
        logo:<LocalConvenienceStore/>
        },
        {
        id:2.4,
        path:'/channelorder',
        title:'Channel Order',
        logo:<AddShoppingCart/>
        }
    ],
        [    {
        id:3.1,
        path:'/recharge',
        title:'Recharge',
        logo:<AccountBalanceWallet/>
         },
        {
        id:3.2,
        path:'/deductionhistory',
        title:'Deduction History',
        logo:<Update/>
         },
        {
        id:3.3,
        path:'/transactionhistory',
        title:'Transaction History',
        logo:<HistoryToggleOff/>
        },
    ],
            [    {
        id:4.1,
        path:'/shipmentcalculator',
        title:'Shipment Calculator',
        logo:<Calculate/>
         },
        {
        id:4.2,
        path:'/serviceablepincode',
        title:'Serviceable Pincode',
        logo:<RssFeed/>
         },
    ],
            [    {
        id:5.1,
        path:'/parsalconnet',
        title:'Parsal Connet',
        logo:<NotificationsActive/>
         },
        {
        id:5.2,
        path:'/parsalplus',
        title:'Parsal Plus',
        logo:<EditNote/>
         },
        {
        id:5.3,
        path:'/brandedtrackingpage',
        title:'Branded-tracking-Page',
        logo:<Sell/>
        },
    ],
            [],

            [    {
        id:7.1,
        path:'/invoice',
        title:'Invoice',
        logo:<Receipt/>
         },
        {
        id:7.2,
        path:'/codremittance',
        title:'COD Remittance',
        logo:<Comment/>
         },
        {
        id:7.3,
        path:'/ratecard',
        title:'Ratecard',
        logo:< EdgesensorLow/>
        },
        {
        id:7.4,
        path:'/performainvoice',
        title:'Performa Invoice',
        logo:<RateReview/>
        },
          {
        id:7.5,
        path:'/lostdamagedsettlement',
        title:'Lost/Damaged settlement',
        logo:<RssFeed/>
        },
          {
        id:7.6,
        path:'/adjustmentdate',
        title:'Adjustment Date',
        logo:<CurrencyRupee/>
        },
        
    ],
            [    {
        id:8.1,
        path:'/ndroverview',
        title:'NDR Overview',
        logo:<Receipt/>
         },
        {
        id:8.2,
        path:'/pendingactions',
        title:'Pending Actions',
        logo:<Loop/>
         },
        {
        id:8.3,
        path:'/initiatedndr',
        title:'Initiated NDR',
        logo:<FolderOpen/>
        },
        {
        id:8.4,
        path:'/closedndr',
        title:'Closed NDR',
        logo:<Block/>
        }
    ],
            [    {
        id:9.1,
        path:'/allcouriers',
        title:'All Couriers',
        logo:<Receipt/>
         },
        {
        id:9.2,
        path:'/courierpriority',
        title:'Courier Priority',
        logo:<Lock/>
         },
        {
        id:9.3,
        path:'/shipmentcalculator',
        title:'Shipment Calculator',
        logo:<Calculate/>
        }
    ],
            [    {
        id:10.1,
        path:'/weightdiscrepancy',
        title:'Weight Discrepancy',
        logo:<MonitorWeight/>
         },
        {
        id:10.2,
        path:'/weightdispute',
        title:'Weight Dispute',
        logo:<Scale/>
         }
    ],
            [ ],
            [ ],
]