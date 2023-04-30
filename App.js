import React from "react"
import ReactDOM from "react-dom/client";

/**
 * - Header 
 *  - logo
 *  - nav -items 
 * - Body
 *  - search
 *  - restro container 
 *    - restro card
 *      - image 
 *      - restro name  
 *      - cusine  
 *      - star
 *  - Footer
 *      - copy right   
 */


const Header = () => {
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/premium-vector/food-delivery-with-hand-logo-design_73539-613.jpg" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}

const resList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "602353",
        "name": "Mandi Croods",
        "uuid": "24cfbdbc-821e-4e2d-8825-f00a24fac95a",
        "city": "38",
        "area": "Gurunanak Colony",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "seovp9x56jfa4t6qu2qt",
        "cuisines": [
          "Arabian",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "mandi-croods-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar-3",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "D.NO 54-20-1B,1ST FLOOR,SURYA PRAKESH SQUARE,GURUNANAK COLONY ROAD,PATAMATA,VIJAYAWADA,vijayawada(urban)krishna,andhra pradesh-520010",
        "locality": "Patamata",
        "parentId": 12917,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6346295~p=1~eid=00000187-d131-d697-1527-e5ac00890161",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "602353",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "74011",
        "name": "Dolphins family restaurnat",
        "uuid": "83510485-29b8-4636-9064-942b0b219a5d",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "lnnqnw14nplf6hvfta1i",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Chinese",
          "Thalis",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "dolphins-family-restaurnat-opposite-maris-stella-college-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "59-14-4, Opposite Maris Stella College, Beside IDBI Bank, Ramachandra Nagar, Ring Road, Shri Ramachandra Nagar",
        "locality": "Ramachandra Nagar",
        "parentId": 13980,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "74011",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "70516",
        "name": "Paradise Biryani",
        "uuid": "9629927e-dcb2-40e0-8bc7-8d6f4960b649",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "kz766lop0wvrcyeth5db",
        "cuisines": [
          "Biryani",
          "Kebabs",
          "North Indian",
          "Hyderabadi"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "paradise-biryani-near-benz-circle-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Sy.NO.120/3, WARD No.11, Sai Nagar, Patamata, Vijayawada (Urban), District - Krishna, Andhra Pradesh -520010. Near Benz Circle",
        "locality": "Sriram Nagar",
        "parentId": 700,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "15% off",
          "shortDescriptionList": [
            {
              "meta": "15% off | Use PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "15% off | Use code PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "15% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "15% off | Use code PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "70516",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "70488",
        "name": "Baskin Robbins",
        "uuid": "7b3645c0-b392-4b3d-bb55-b50bdd8bc28b",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "126ea26268daed2437a1f243cb315ea8",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "baskin-robbins-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "40-5-19/2, Tille Road, Labbipet, Vijayawada",
        "locality": "Tille Road",
        "parentId": 5588,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6567044~p=4~eid=00000187-d131-d697-1527-e5ad00890411",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "70488",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "178378",
        "name": "Tandoori Hub",
        "uuid": "86708d53-26e7-4afe-8324-aaec7b2d06a5",
        "city": "38",
        "area": "Gurunanak Colony",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "brlbwyzoq49acejaqixc",
        "cuisines": [
          "Tandoor",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "tandoori-hub-governorpet",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Guru Nanak Colony Road, Kanaka Durga Gazetted Officers Colony, Guru Nanak Colony, Vijayawada, Andhra Pradesh 520008",
        "locality": "Guru Nanak Colony",
        "parentId": 13614,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "178378",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "236572",
        "name": "Srinivasa Fast Foods",
        "uuid": "c79c4c2e-6b48-4728-a9e7-ec3f630864d8",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "uxh321ykb0tqkexpgcgr",
        "cuisines": [
          "South Indian",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "srinivasa-fast-foods-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "D No 21-10/5-55,Teachers colony 3rd line,Muthyalampadu.Vijayawada 520011",
        "locality": "Teachers Colony",
        "parentId": 194940,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "236572",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "68792",
        "name": "Barkaas Arabic Restaurant",
        "uuid": "30073870-b528-4b35-9d0e-5f468d645473",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "cq0hb0uzfxemcasa4alp",
        "cuisines": [
          "Arabian"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "barkaas-arabic-restaurant-tikkle-road-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "cherry's bulding 2nd floor,Near Siddhartha Public School Moghalrajupuram, Labbipet, Vijayawada",
        "locality": "Moghalrajupuram",
        "parentId": 12564,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6544990~p=7~eid=00000187-d131-d697-1527-e5ae00890745",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "68792",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "71350",
        "name": "Sweet Magic Mithai Shop",
        "uuid": "486fa039-37e6-4bae-bed2-c32ae0d4dd88",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "p2k9r9zkeqcjhohsgrfu",
        "cuisines": [
          "South Indian",
          "Indian",
          "Biryani",
          "Desserts",
          "Sweets",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "slaString": "35 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "sweet-magic-mithai-shop-opp-dv-manor-governorpet",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "M. G.ROAD Opp.D .V.MANOR.. Chandramouli Puram, Chandra Mouli Puram, Sriram Nagar",
        "locality": "Mg Road",
        "parentId": 199307,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "71350",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "70500",
        "name": "Burger King",
        "uuid": "77a6def3-2be0-4884-a277-264b005a01a7",
        "city": "38",
        "area": "Christurajupuram",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "28fb13049b4e55297bb3f703cde63c35",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
          "restaurant": "burger-king-m-g-road-labbipet-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Unit No. 3F-4 , Third Floor, PVP Square, M G Road, Labbipet, Vijayawada, Andhra Pradesh 520010",
        "locality": "PVP Square mall",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "Get every item under 129",
          "shortDescriptionList": [
            {
              "meta": "Get every item under 129",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Get every item under 129",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            {
              "meta": "",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Get every item under 129",
              "discountType": "FinalPrice",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "70500",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 1.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "218628",
        "name": "The Good Bowl",
        "uuid": "fe41b9c8-ca28-4b38-b01f-67e78be8bcbc",
        "city": "38",
        "area": "Auto Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ap6oearzjfta0wzrlxce",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Biryani",
          "Chinese",
          "Beverages",
          "Desserts",
          "Jain",
          "Indian",
          "Hyderabadi",
          "Mughlai"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "the-good-bowl-jawahar-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Plot No: XIVD 5 and 6 1st Floor, Jawahar Auto Nagar, Vijayawada 520007",
        "locality": "Jawahar",
        "parentId": 7918,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3800,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3800,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3800",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6564435~p=10~eid=00000187-d131-d697-1527-e5af00890a7e",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "218628",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "561825",
        "name": "Subbayya Gari Hotel",
        "uuid": "881b904e-8553-4b15-b8bf-96346428532c",
        "city": "38",
        "area": "Governorpet",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "gcvx1h3utabwzxfbagxg",
        "cuisines": [
          "South Indian",
          "Andhra",
          "Sweets",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "subbayya-gari-hotel-governorpet-governorpet",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "29-2-48, Opposite Continental Park Hotel, Ram Mandir Road, Vijayawada 520002",
        "locality": "Ram Mandir Road",
        "parentId": 12343,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "561825",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "341011",
        "name": "Harika Royal Restaurant",
        "uuid": "75fa2f22-c704-4657-8669-243a8abae6e5",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "qfx3qmtsrz7dota2n6ze",
        "cuisines": [
          "Biryani",
          "South Indian",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "harika-royal-restaurant-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Sidhartha Nagar, Labbipeta, Vijayawada, Andhra Pradesh 520010",
        "locality": "Sidhartha Nagar",
        "parentId": 93911,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "341011",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "418171",
        "name": "The Shakes Factory",
        "uuid": "ab904d87-5c29-471e-9632-dc9d72d89f23",
        "city": "38",
        "area": "Gurunanak Colony",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "iilzuwozsxajwgiloppo",
        "cuisines": [
          "Beverages",
          "Ice Cream",
          "Juices"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 2.200000047683716,
        "slugs": {
          "restaurant": "the-shakes-factory-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Do no 58-5-28, Dhanaya Gari street, patamata Vijayawada (urban) krishna",
        "locality": "Dhanaya Gari Street\n",
        "parentId": 213756,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6345971~p=13~eid=00000187-d131-d697-1527-e5b000890d54",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "418171",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 2.200000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "68400",
        "name": "Southern Spice",
        "uuid": "98855361-6abd-425e-8f8a-e4c5e73fc596",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "tkeklzoxiyzwpun6w7j9",
        "cuisines": [
          "Biryani",
          "North Indian",
          "South Indian",
          "Tandoor",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "southern-spice-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Beside BSNL Office, Moghulrajupuram, Labbipet, Vijayawada",
        "locality": "Moghulrajupuram",
        "parentId": 1347,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "68400",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "68802",
        "name": "Cool blog",
        "uuid": "17b650a4-152f-4263-a4ed-a29017d1b5d4",
        "city": "38",
        "area": "Christurajupuram",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "enyg4uryqk7qm5f4bpeg",
        "cuisines": [
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "cool-blog-guranak-colony-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Opposite PB Siddhartha College, Revenue Colony Park, Siddhartha Nagar, Labbipet, Vijayawada",
        "locality": "Siddhartha nagar",
        "parentId": 5270,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "30% off",
          "shortDescriptionList": [
            {
              "meta": "30% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹75 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "30% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹75 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "68802",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    }
  ];

const RestaurantCard = (props) => {
    const {resData} = props;
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId} = resData?.data;
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo"
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-container">
                {resList.map((res) => <RestaurantCard key={res.data.id} resData={res} />)}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(<AppLayout />)