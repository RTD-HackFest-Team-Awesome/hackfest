const express = require('express');
const router = express.Router();

const foodbanks = {
   "html_attributions" : [],
   "next_page_token" : "CoQC_gAAAHx0ZvKtNQwxXU4-ZprFRlbfigp0UZZ7wnNlGtXDCXUxllL0qKaRLQ1I7_IiHhy6eDShrA6SBoSFZ-75Xsh9Dm5WTJjlp2uf8RphsKtA6IpuxGhCyklpyb1yvvnFFchylDTwWDMFSoSc9EL6gGnljDrbki21HBvL7x7xEWtPT-uSeao-UPbbjMxRcQ4bt1fNEnC2TauXLT3Z4xEH_fhQ3oBDX8u5lw0_Rm8P0eUUqsMfcI_SAdKavy5XbDKirFWiEM360pEA9siiQGZZeX4PMRIsQeGb6TFxhJFZPp7r4lLH-qeH-keuq4OD99qDrtjALBNDw2Eu0QkZRQKxZCanVwISEIF8PI4QnsOlnmne3zrQBvwaFKiGC6BP_TZsEjy3J5-FfaA7NaSz",
   "results" : [
      {
         "geometry" : {
            "location" : {
               "lat" : 39.777766,
               "lng" : -104.863542
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.77914944999999,
                  "lng" : -104.863535
               },
               "southwest" : {
                  "lat" : 39.77730485,
                  "lng" : -104.863563
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "15a09e6bd1ac193189b663a8a2d0b271fa8f48c0",
         "name" : "Food Bank of the Rockies",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2988,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/104528731779835716509/photos\"\u003eKii Misha Johnson\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAACmSD16l1ArZ6fWsApmdG577S_47LC7v_ERADvRWLP0LIOKMkDwEZ9F74IlB0FQmHKRrfr00FqFpUrPzqLrW6NthPSB_GldLB_s6VBWGlf9rt5MUQgAKBY8Sc9i1R1qOWtsD3prhhw6GKo20FU3aDoYrxJLoYpdrUFu8Em1aRMPPEhAE-KQ2je_UpwReXSO0C2sjGhSHcEskAQQi_OtBWLud6Nkp5WpgEw",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJOwOlzz57bIcRM0ypsrzC49M",
         "rating" : 4.7,
         "reference" : "CnRsAAAAQBwfoEEE5kDBaF22ECY1kDQQ8Apf5hkg46fu4I3HP3GJpDJ1YWoih8uo1xk_mHVpIp4g_IiEqkSRLmikyt3yB6XeRysBVUCxLVPxQFkJskZ594ejlElbQiYqO_HhfcD8dh8MqECTZz2S1h0LSjPebhIQEclcpuC6aP6CRGNbcRLUORoUf-xs9hx3QE4YFXDGzaF9EgIy7Ck",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "10700 East 45th Avenue, Denver"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.7717012,
               "lng" : -104.8499224
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.77170225,
                  "lng" : -104.849028
               },
               "southwest" : {
                  "lat" : 39.77170085,
                  "lng" : -104.8526056
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "5d972dd18c823836e1d4d8eafbc5e091a15ea105",
         "name" : "Food Bank of the Rockies",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJSZD7W0l7bIcRYJ6jne2smRI",
         "reference" : "CnRrAAAAVQLvTCU3ZzGysRfiBsE5tB_MI0qpN_BTVmjEtkY_cI2QNNWNyX78ZjZtKXliHsmUVM2kJ71HZmjg16CcJClh4F2zF7An4BdRJDs8kh_yV3v2aZxuUqrrOM0WUiEDJMs1_rni8UztY-D2zejOzuM7DxIQYLB2CWZ_8zLbt9dC3nrI5RoU61Q40E_jYev0O8aFFgpM4IZ27OM",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "3900 Nome Street, Denver"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.7930953,
               "lng" : -104.9859552
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.7931067,
                  "lng" : -104.9857599
               },
               "southwest" : {
                  "lat" : 39.7930915,
                  "lng" : -104.9865411
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "7d29d55f4e03ed80567e292cc3f731f426844734",
         "name" : "Rose of Sharon Food Bank",
         "place_id" : "ChIJeytxsEx4bIcRakSsnvWUkVc",
         "reference" : "CnRrAAAA3rvrqaFdKL8-UGqJMFywTpK303y1S6hnkSPzVpZeWVgsb-qwu8CxjRIC_pUkkD-K7TaYW6A6i1ZPb-iTotd-Rvy1Sz1AgGAyu0oB30sWmZje0W35vXskmwoHrSy_PCdNmWJvVIw6tTqyatKj2e5ZGxIQjkUZTGjU7f44arug36A6nRoUZZl7Vix3-Jp7hHyifkTiJTQ4R3o",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "5306 Lincoln Street, Denver"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.9089384,
               "lng" : -105.073252
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.91035424999999,
                  "lng" : -105.07324945
               },
               "southwest" : {
                  "lat" : 39.90846644999999,
                  "lng" : -105.07325965
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "ad6740b7f1e24eb0205c9d5121c48df52a8290bd",
         "name" : "North Denver Cares Food Pantry",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJET57-EmKa4cR4RFgzjubia8",
         "reference" : "CoQBcgAAALcq0K1HbTXXX17OIjslq27ipNkqWuAojpXXRaqSMcg2di7xqNK5kp2qqWEMWTjzDrmNRAS7r3JCf6rFcM5PtJ9IV4XvrIkqfe4hHb72EgKNiHbl_K1UHnQMYl5Y1pwV33kShCrH72usNWc1Xe9KxLF6wU0dbFd5MuJrKyffZGhNEhAPYNLj6bdb5Gt2fpTU06pdGhRA1Fe5mmFQDkLgyJQ-4SC9oQQI5A",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "6900 West 117th Avenue, Broomfield"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.8007356,
               "lng" : -105.0930597
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.80100325000001,
                  "lng" : -105.0929901
               },
               "southwest" : {
                  "lat" : 39.79993265,
                  "lng" : -105.0930829
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "9a11c6bb08b038a53bd0a107e832249f2e69db4e",
         "name" : "Arvada Community Food Bank",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJWRLhZSaGa4cRHLbM2mqwoi4",
         "rating" : 4.5,
         "reference" : "CnRtAAAARNiyFr0HY9ELSHbfcBOA04k6D5aewGJwjJysMNMtEExEia4yJIdoVdeOt5A9X68jWw-fnKbTV0IiKbNWy2N6hqMd_4_wX3B-7C0EnPSAX8y663LcXa2dyIbok9GhRfGvVkOjJ0w8qAE3yDzZ7pgGcxIQULt_DRuOyweNVYSv60WptBoUN8NBfUs9AT4a2JH9uiHzPKqdeIM",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "8555 West 57th Avenue, Arvada"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 40.08197140000001,
               "lng" : -104.8101013
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 40.08197355,
                  "lng" : -104.80989845
               },
               "southwest" : {
                  "lat" : 40.08196495,
                  "lng" : -104.81070985
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "0bfda5c9024fb8ce89efb7088e477a7023a25a29",
         "name" : "Weld Food Bank CSFP Distribution site",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJZ-313ycSbIcRoFCeFyjF34o",
         "reference" : "CoQBeQAAAEOFJPyH7Ei55hm-GPkcErTkibL76oSZnHutA-r0cC8Zflq-fspgAkvPmKOUc2eTQFu3309-1se0PaavSJXJSOsCTl1dowdb24RyF1lJqrTp14VUE5AfZ8PLPrMHjEIupk0TIEhMH5Z31MeGi5FdCwTL9ml2O4u96arbVAa2VW7HEhCG1an0HqbpZk0KT6KkDD_NGhRTKEjO8jK2CzIDcHZOaobKivK0lg",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "220 Denver Avenue, Fort Lupton"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.7690832,
               "lng" : -105.0682312
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.76908365000001,
                  "lng" : -105.06780955
               },
               "southwest" : {
                  "lat" : 39.76908304999999,
                  "lng" : -105.06837175
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "c37a73d044f64cf2617eaf875366f055e3558dfc",
         "name" : "Helping Hands For the Homeless",
         "place_id" : "ChIJhxtrbaiHa4cR3BK7G5ZDy-g",
         "reference" : "CoQBcgAAADcn3WkqjkZY4fONo6Io0jIlvRaokga8KrEoDkoI7AmPEOoITej9ZyAm09ZTKxpDDziBPSzbtyLw1ScbYea6qWA_fh9izOLLbh0J32568dzcAi4VAhMdfQ0NESJbbgH4UGJTBLtjW067-P6hBGZ0V6IRHczGe4wbdWhXTrks-RXhEhCJA_jljQBC3kxQ4ysf0omdGhS3GoAR13JT4rP-6kMK7qjxNqjy4w",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "3785 Marshall Street # B, Wheat Ridge"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.5250788,
               "lng" : -104.767522
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.52529669999999,
                  "lng" : -104.7674431
               },
               "southwest" : {
                  "lat" : 39.5244251,
                  "lng" : -104.7677587
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "667262cbbeb1a828a47f4284a2757a3e967ca54e",
         "name" : "Parker Task Force Food Bank",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 300,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/108127078266674165640/photos\"\u003eParker Task Force Food Bank\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAKeSRJNhbGfUgmbZsx0M9fAn-oWg7_TFKINoPQ0ZBnQvvoE381ub3qziIWfRubznKZKtMNjf5rPxxMtNnq3o30txHnPz9ZNRtQBJ81_gJtBfMX_VUjhjh689WGI5Zi31GLp-3ujnFes83kalZ44hbYW4MX42AOLUGlEKvjW0ET0BEhB1k9qB_8vYiqHBt06D0KhjGhTPUFr38rWKf5I6S81M5hpFpRUK6Q",
               "width" : 299
            }
         ],
         "place_id" : "ChIJF0XyVPqRbIcRhKZcp5HF9JE",
         "rating" : 4.4,
         "reference" : "CnRvAAAAsJkjcMMPSjtqd8CM7__i2SsVWWwSs79zbW_1p9p9vMr7aNQwnTd2ULyn66xt2dL0LfG3_Mb5sewMzZJ18LejZLEzYCR5D7zyEFf0oY16iKBJH_Wlrd67RxT78w-4bZ3uoJeg31ySCmfdRfgCkkR6BBIQxnqlbtgiWBCMGH3Bg6b91hoUTEd8edVUAuShIbMUgjZUl1rZIWA",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "19105 Longs Way, Parker"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.8585512,
               "lng" : -104.9577152
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.85855435,
                  "lng" : -104.9570291
               },
               "southwest" : {
                  "lat" : 39.85854175000001,
                  "lng" : -104.9597735
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "5765e36aa61caadafb23c1abb790045a0a29cf62",
         "name" : "Thornton Community Food Bank",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJ8_eV0iF3bIcRN_NS29y21OI",
         "reference" : "CnRwAAAAIs8f-4Y94jMKBecf3V2YEdSaZTyEfHdX55K9LdQY8IT7TAo18weOCBzqyBV6NnZxBdfbuI4K0WMO_50CfpUIuQimWRGlBigowPM2uSVsUy9GyoZtjPTaAiAh3dRdxCtt323GI8ZuEEWMCnsSAMoF6RIQxV6Kg958ljkB8YBqEf8mLRoULi9-LgJwGs8O3eJICHo90NfdDik",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "8990 York Street, Denver"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.984665,
               "lng" : -104.815738
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.9846657,
                  "lng" : -104.81514145
               },
               "southwest" : {
                  "lat" : 39.9846629,
                  "lng" : -104.81593685
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "266b59dba4d470f519c02ec1d89c7d81e1b887c9",
         "name" : "St Augustine Food Pantry",
         "place_id" : "ChIJIT79LDxtbIcRgzxxXVZbVKQ",
         "reference" : "CnRsAAAAE0AF7ZJ3nOOwTkNPnwvGrA3CzggSkd17n3q3104x3e2c4ekhRil8jKbAiUa19KzPRu80v9oaHzRS1dOrXNa3diV19xsCat-rc1-9ReVr2ZhFZO1DFebFbXJed5VC5NzerariXFGSkdjRPBhJiS4qdRIQV_y0rICMB1khHmdKHQ1_oBoUpGHKaE2ejT3SesOAaBgTsC0hXYk",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "129 South 6th Avenue, Brighton"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.6699099,
               "lng" : -104.9879539
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.66991655,
                  "lng" : -104.98753465
               },
               "southwest" : {
                  "lat" : 39.66988995,
                  "lng" : -104.98809365
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "698d2efed729ad62277800602809189eb446599e",
         "name" : "CitySquare Denver",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJf8JPf9R_bIcR-k_hm5BcuUo",
         "rating" : 4.3,
         "reference" : "CnRkAAAAnAPwnyvppOXotfI6PVw-NeqwKCqjpOO3jWUh7atHdXlSw274A9hQ1vMVsM52z4v0mUJpgI23SSvKZg1aU_WfYXbKfXAn8KQ2fg-co3dHyik-nS6NqI1G0TbWbVK35QjmcrZ6uixKYjtfPoYR1JhH0BIQMg8_hw4GQZkQdSG9a4N3qRoU1mQVSdU8TV7s60PhFpimKKfYsac",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "2575 South Broadway, Denver"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.7659486,
               "lng" : -104.9669401
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.7659531,
                  "lng" : -104.9668116
               },
               "southwest" : {
                  "lat" : 39.76594710000001,
                  "lng" : -104.9673256
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "4c3908596fad6e966a23761f0f53d2d4c306a3ee",
         "name" : "Acts Resource Center",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 1536,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/100739813280835937529/photos\"\u003eActs Resource Center\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAABDC6chapU6vlCz-eXuUIMRGekAOub6-hpuBXJDB4UEix5VCzxDd_IbQjiF8X0K8ZqnkTeeJxCx_3QGUcZDLDPJ2404vTICAc7Ck7tBzMiVvtoqEgDJR0UA7YyRdaEVMbBTrtF4tGz8Qn9lh0OZNMdMs_ztOTkb3oKbiPjnll9BtEhBWdb7AdShLtoW2muHINDduGhTel4HhNzKU4wZIS-t-4uFfMMMBpA",
               "width" : 2048
            }
         ],
         "place_id" : "ChIJI98gTr14bIcRYgdX44upu1s",
         "reference" : "CnRnAAAACEPqWvtpShH91eVKXMQAPaXOp6bnFiHEKJVe8_9VPJVNESFt4QjB5IMXUu4RREnaPBdTNnMM2anWhgO25cB426dutVmjmqghdRQk9QWQIlQAZ-4Ba71BPf4XO0zt3AQPnNOqhLJpa0SsK5FBSke7MhIQ-bCRK6DBghNHafE0fgZS9hoULSQAZ9sHhQWd0CSYq1K1_h120jQ",
         "scope" : "GOOGLE",
         "types" : [ "food", "store", "point_of_interest", "establishment" ],
         "vicinity" : "3508 Gilpin Street, Denver"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.7812074,
               "lng" : -104.8485519
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.78121165,
                  "lng" : -104.846367
               },
               "southwest" : {
                  "lat" : 39.78119465,
                  "lng" : -104.8492802
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "06ba561300a942366d8f942556284ba48e71bf0d",
         "name" : "Montbello Cooperative Ministries",
         "place_id" : "ChIJyxpOmDR7bIcR9XiPBOptdA0",
         "reference" : "CoQBcwAAABCvTSiF3qbNj64pGi8VHka8h5YWShkx1V-HGxAboLPodt-8J982x5hmb3YsoL0E2_VzFojdVWMCgyVsZ_TlOyNmd10WPU7TvxH-oQi2jjiNKuVjUBj_VrcgctDzDiROyl6Ht3dcX7Hz8c3WJb0Lx7dm_a9l7Aumrda3SSmyDiw0EhARD98xp42AxzalA4u16c8pGhTANOk8gt39gteJoho7ki-hrfxb_w",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "4685 Peoria Street, Denver"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 40.02870789999999,
               "lng" : -105.2545787
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 40.02939474999999,
                  "lng" : -105.25451375
               },
               "southwest" : {
                  "lat" : 40.02847894999999,
                  "lng" : -105.25477355
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "c4b74e7781f7a8cd2fd6fe70dd5341b5a0cb08d4",
         "name" : "Harvest of Hope Pantry",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 906,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/101744868589597138405/photos\"\u003eHarvest of Hope Pantry\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAACgclDm8FLtdl3fCtLmc8Nb5amiTGUZf9z3J4W1-e5XStsfuwvrzV0CKHuOYsutDMVchkSdXD7xd_L3YWR6y9icK0Hu0ZM-sXJeGVR2DQuuIDXPsnOvUInu_6_iW8w-1dXbUtBQxBAFtHGepL8JTfR4b3_TCh_41Ufs049OrPXwgEhDfWrRB8WbGn2LjtUaexihcGhR8NrrvFedDL5R19jvgiOG2HR2cVw",
               "width" : 600
            }
         ],
         "place_id" : "ChIJW8Q7_nnua4cRtknnsKNrTV4",
         "reference" : "CnRpAAAAUITQCXcuFtSCiwRP5d0i6UJHZNfm97ixddTQTeyUC9H7ZVwv_jHs_YnwSWOuqVALg5mDB370KwmM9C_jPzyl24IYMAyYwGANr2t9ve_-SbJ2D80UviOWMplwjofRPb9EQ4kScUSG5pSZDR-WfeQGjRIQgDJa48flaOpfrVG9O714choUW17T0HKQEcrIIBUzL_wv7k9impQ",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "2960 Valmont Road, Boulder"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.82781199999999,
               "lng" : -105.031694
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.82806839999999,
                  "lng" : -105.0316929
               },
               "southwest" : {
                  "lat" : 39.8270428,
                  "lng" : -105.0316973
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "2198b005c7aab43fcdaee8399c55d46e732fd379",
         "name" : "Growing Home",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJJRpPJOJ3bIcRv8sgn-7r6_Y",
         "rating" : 4.4,
         "reference" : "CmRgAAAAxhw-k2QHgK_NiR_x0e2JrsXVCJ2lE8MJFsa-csGFSjiun11h2mCL-itzY9sMCSNoK3ARgqyb7wfRM1OmZ4G7ScDr4w03te3HOpz_UlhqD3jicWGayG6pWuBMJtwafTmFEhDH7iHndhziCl89IBh60YwuGhR6lxbwUw2QkKioD0GQOxN4pnjAeA",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "3489 West 72nd Avenue #110, Westminster"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.960222,
               "lng" : -105.119656
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.9603819,
                  "lng" : -105.1195654
               },
               "southwest" : {
                  "lat" : 39.9601687,
                  "lng" : -105.1199278
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "c5b3360893050a52df7a136ad948e7b2587988d1",
         "name" : "Community Food Share",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2988,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/102965412792109170247/photos\"\u003eCommunity Food Share\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAHMXi01bc0KXisf0rlfqQqC0Foakkxyvhn4BG8jx7LS_jGVvlq4TAD1OYjC7wJgk--FM1h5HndU7taHe-Cr5rluxk1rjd1ZVA5pwXiIdXqBED7KaXB8WoULg-BeMWAIcdv_tRTTWBPS6jmd9nGa9RiDrnnpoXfASNhP6MZe2rddAEhDre9kZx7uD4G7aZ0puC0HoGhSOh2ZrY9qblsd66nLOTEpWD0hWvQ",
               "width" : 5312
            }
         ],
         "place_id" : "ChIJFU85yV7wa4cR8BDHZuZ1yB0",
         "reference" : "CnRnAAAAKz2Aw0OErUctR8EywZ4tSqGAuVDBi70xV-Ed4KAqVPdBzKqFRD9UjkqZ42dkWlLXIZUkIwnsULY6OKBVTV9MoNa4T7p4B8K-e5iiTNCbQqHYeMDdGid1fOoLaRt1ncjBm3H75XlC9lo73bZ01bSSXxIQuUxrM0MmKeLYkL4tYTGApBoUJZjSgDQPNkQO8u4UaAX-tVWWyIg",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "650 South Taylor Avenue, Louisville"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.9040329,
               "lng" : -104.9786192
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.90403375,
                  "lng" : -104.9784064
               },
               "southwest" : {
                  "lat" : 39.90403035,
                  "lng" : -104.9792576
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "151ab9e30b3981e24e8131a499c158eecc978f83",
         "name" : "The Immaculate Heart of Mary Stewardship Center",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "place_id" : "ChIJZWQxail0bIcRwYJ0lCuyWCM",
         "reference" : "CpQBgwAAAA6xq1bV5NKXHvPA8b1MNqXXRUd6hcDs7WTeVM2CFDEm9P2llxhu6m9W7K1HI9MS-Y-1tGYYr-zmTmCPX-MYRW4i-X5SNM3mujJ1Go_YdSEZBNT59K6L8SGvqzYrRonSAprV3M23FdRfyS0vDva9480LzeMKati5EBofypaAPMGVbyxpp1PiRhToOuHA47FImxIQY0kxLj4PRmPpH3Ys6jmFbxoUGEbg2TnIkkrs4N6axBCmtvragF8",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "11426 Pearl Street, Northglenn"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.74093269999999,
               "lng" : -104.8798013
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.7409393,
                  "lng" : -104.8797338
               },
               "southwest" : {
                  "lat" : 39.74093049999998,
                  "lng" : -104.8800038
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "42c098cf4c43cf622ebdca8e3f5166515dacbe55",
         "name" : "Restoration Outreach Programs",
         "photos" : [
            {
               "height" : 1836,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/114823286625978789505/photos\"\u003eRajesh Chhetri\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAKH2_Ly9A9qrlnCWFzdJpZVbkmDhp3iSOxq_FbZGKneGSg1tb6UrOUjKL0FnU3KHidX2kswmkfrxKjawdiEpow6kpOoMuV9B-oxmALKpNy9QQoiQJao6FNEoSA21PoxBg9VFQI6G57cVykC1PuiNqa6SVGlTpxh5BBEX3PzZ6TQjEhANAE5YF81-Objrvrd9WaKuGhRiTESl1EDxM7S1DMkO10qjcub1CA",
               "width" : 3264
            }
         ],
         "place_id" : "ChIJ46PVF5B8bIcRyH6rn6-xb_w",
         "rating" : 4.6,
         "reference" : "CoQBcQAAADH7AXK2UdHeLxddSEuTVBeEV1ZbA9PttOAyY0hD5qfoYpPQlAd1h4NmNFt0wVLfAzCJyHqjk5quPhwJrOShrWnV761LuYKcJgSyxHBUqPyigEt9HVlmHOOA6s1JKmHY7X74jLdLa5YuwZWFxgqSQ6moqy1HrSTzN-D6fUx58dtaEhDXQkmfueMEpGN0opv9HDhQGhR-GvCEW94Of7lhVfGpwoU64Ky6sA",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "1540 Boston Street, Aurora"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 39.6759121,
               "lng" : -105.0826144
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 39.67655935,
                  "lng" : -105.0822928
               },
               "southwest" : {
                  "lat" : 39.67569635,
                  "lng" : -105.0827216
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
         "id" : "086ee76691c242a5a387b8e13037d5a593b92851",
         "name" : "Westwoods Community Church",
         "photos" : [
            {
               "height" : 1536,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/110687740232628244126/photos\"\u003eWestwoods Community Church\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAJhazkiKg2jGl8obMB3rO30JqW2tkd97PEnNRgd2w_laSpV9SBXJ2sJLcyvDfqSGtYMmzyDHy9RGW42McpTqN33zgk4XRJ86qAp0-iuLAEAJTLmHZTczlVZhYKl2TijoVkOfROtjQAj4kOdF85AV9M_ScZwHVHVlpxlLrIWa4ylMEhA1AE4Fpx4HZEm_4rQJZbyDGhR9nNf9bXXvvmMe0RqJ6tOgoIMu8A",
               "width" : 2048
            }
         ],
         "place_id" : "ChIJPSLYc62Ba4cRRDgIuPrW8g4",
         "rating" : 4.6,
         "reference" : "CnRtAAAAgw_tTYFXGbSBY8NKDKJuy3hQOMp3wfkKMsLLoSzSVq7bAEfDjbrFQ9ujYdM-F6j_-r2hmzrwzf3SuzfoimeET1l7Wsq3rvclpfXLDPcPGyfd0J3CZSqY7WwOFXrr3EklNPMtH9sIijjui0R7nrAt_RIQpeE5vfkabWlVgvwIAcIrLxoUi_qIeYQcrMpihGdsZkUySjQXwsc",
         "scope" : "GOOGLE",
         "types" : [
            "church",
            "place_of_worship",
            "food",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "7700 West Woodard Drive, Lakewood"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 40.003319,
               "lng" : -105.106411
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 40.00331929999999,
                  "lng" : -105.1063515
               },
               "southwest" : {
                  "lat" : 40.0033185,
                  "lng" : -105.1065159
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "18d92817a2134a8b8122c2597f92121c79f7425a",
         "name" : "Sister Carmen Community Center",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 1085,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/100830794169821880456/photos\"\u003eSister Carmen Community Center\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBcwAAAKXqZUAK9vpfPRBa4yPKv0rvyZsHbBNqUDfc9aF7NwmM0tO-_yuYOOGypi2wL55Mnv8k0Nawu3WuIC4EJtNKZg_GYF9GV-ai_s8IN63kUhAIH97uuhcu8xA1KQIQ6s94gFyWcIc-TdwUF2Fo8Ytu6l2AXpKgNGmGF7jqDGerp03BEhB4-c2QmZMRwBzEZljxYWJQGhQOKJYnNfgCTHA_jcgPlqaFG72HJQ",
               "width" : 2048
            }
         ],
         "place_id" : "ChIJ6fgCdfT0a4cRj51iX_gDvQw",
         "rating" : 5,
         "reference" : "CoQBcQAAAK9hRQQfVq4h-v_GeT3NZ5VSsh4tjnOM_562PLvHX30IXkG8bZjW2gDzsZY16HV3AlexDg8jkh9ldi-qSF_YM5N_WDa32YAqzDY-ZNuS_8YnBT05ZFRMCRPFwsZBbeENFiOuuv0pokWfJw24C6SSpSlFPj8sxce9STbL6vXKa0JOEhCQC_7VQ9PhoBNdwr14XIxJGhQpa4WjT5Vumxp5bf_PeBNdpG_QPg",
         "scope" : "GOOGLE",
         "types" : [ "food", "point_of_interest", "establishment" ],
         "vicinity" : "655 Aspen Ridge Drive, Lafayette"
      }
   ],
   "status" : "OK"
};

router.get('/', (req, res) => {
  res.json(foodbanks);
});

module.exports = router;
