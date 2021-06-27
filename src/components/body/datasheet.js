
import mobilePic from '../../assets/plan/mobile/image-hero-blackcup.jpg'
import tabletPic from '../../assets/plan/tablet/image-hero-blackcup.jpg'
import desktopPic from '../../assets/plan/desktop/image-hero-blackcup.jpg'


export const picArray = [
    {type: "DESKTOP", pic: desktopPic },
    {type: "TABLET", pic:  tabletPic},
    {type: "MOBILE", pic: mobilePic },
]

export const coffeePreferenceData = [ 
    {headline:"Capsule", description: "Compatible with Nespresso systems and similar brewers", value:"Capsule", active: false},
    {headline:"Filter", description: "For pour over or drip methods like Aeropress, Chemex, and V60", value:"Filter", active: false},
    {headline:"Espresso", description: "Dense and finely ground beans for an intense, flavorful experience", value:"Espresso", active: false},
]

export const coffeeTypeData = [ 
    {headline:"Single Origin", description: "Distinct, high quality coffee from a specific family-owned farm", value:"Single Origin",active: false},
    {headline:"Decaf", description: "Just like regular coffee, except the caffeine has been removed", value:"Decaf", active: false},
    {headline:"Blended", description: "Combination of two or three dark roasted beans of organic coffees", value: "Blended", active: false},
]

export const coffeeAmountData = [ 
    {headline:"250g", description: "Perfect for the solo drinker. Yields about 12 delicious cups.", value:"250g", active: false},
    {headline:"500g", description: "Perfect option for a couple. Yields about 40 delectable cups.",value:"500g", active: false},
    {headline:"1000g", description: "Perfect for offices and events. Yields about 90 delightful cups.", value:"1000g", active: false},
]

export const coffeeGrindData = [ 
    {headline:"Wholebean", description: "Best choice if you cherish the full sensory experience", value:"Wholebean", active: false},
    {headline:"Filter", description: "For drip or pour-over coffee methods such as V60 or Aeropress", value:"Filter", active: false},
    {headline:"Cafetiére", description: "Course ground beans specially suited for french press coffee", value:"Cafetiére", active: false},
]

export const coffeeIntervalData = [ 
    {headline:"Every week", description: "$7.20 per shipment. Includes free first-class shipping.", value:"every week", active: false},
    {headline:"Every 2 weeks", description: "$9.60 per shipment. Includes free priority shipping.", value:"every 2 weeks", active: false},
    {headline:"Every month", description: "$12.00 per shipment. Includes free priority shipping.", value: "every month", active: false},
]