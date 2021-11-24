let PAGES = {
    // עמוד ראשי
    mainPage : {
        topNavBar : {
            backgroundColor : `#0D635F`,
            img_button_about : `about_icon.svg`, // אודות / איקס / תפריט
            div_topNavText_main : `לומדת טבחים`,
            img_bhdLogo : `בהד 6.png`,
            img_tillLogo : `till_logo_white.svg`,
        },
    },
    // עמוד אודות
    aboutPage : {
        topNavBar : {
            backgroundColor : `#0D635F`,
            img_button_menu : `3lines_white.svg`, // אודות / איקס / תפריט
            img_SearchIcon : `search_white.svg`, 
            div_topNavLine : ``,
            div_topNavText_about : `אודות`,
            img_tillLogo : `about_icon.svg`,
        },
        listeners : {
            backToMain : "showPage",
        }
    },
    // עמוד תפריט
    menuPage : {
        topNavBar : {
            backgroundColor : `#E8E8E8`,
            img_button_x : `x_nobackground.svg`, // אודות / איקס / תפריט
            img_SearchIcon : `green_search.svg`, 
            div_topNavLineGray : ``,
            img_bhdLogo : `בהד 6.png`,
            img_tillLogo : `till_logo_black.svg`,
        },
        functions : [`showMenu()`], // פונקציות שצריכות לפעול
        content : {
            recipe : ["ספר מתכונים","black_cookbook", { // תפריט נפתח
                salads : ["סלטים", "black_salads"],
                starters : ["מנות ראשונות", "black_starters"],
                sides : ["מנות ביניים", "black_sidedishes"],
                vegan : ["מנות טבעוניות", "black_vegan"],
                mainCourse : ["מנות עיקריות", "black_maincourse"],
                baking : ["קונדיטוריה", "black_baking"],
            }],
            learning : ["חומרי לימוד","black_materials", { // תפריט נפתח
                subTopic : ["שם הקטגוריה", "black_starters"],
            }],
            gallery : ["תמונות","black_gallery", { // תפריט נפתח
                subTopic : ["שם הקטגוריה", "black_starters"],
            }],
            videos : ["סרטוני הדרכה","black_videos", { // תפריט נפתח
                recipes : ["מתכונים", "black_cookbook"],
                safety : ["בטיחות", "black_protection"],
                publicHealth : [`בוה"צ`, "black_health"],
            }],
        }
    },
    // ספר מתכונים
    recipePage : { 
        topNavBar : {
            backgroundColor : `#0D635F`,
            img_button_menu : `3lines_white.svg`, // אודות / איקס / תפריט
            img_SearchIcon : `search_white.svg`, 
            div_topNavLine : ``,
            img_topNavTextIcon : `white_cookbook.svg`,
            div_topNavText_recipe : `ספר מתכונים`,
            img_bhdLogo : `בהד 6.png`,
            img_tillLogo : `till_logo_white.svg`,
        },
        bottomNavBar : { // סמלים של הקטגוריות של המתכונים
            salads : ["סלטים", "green_salads", 0],
            starters : ["מנות ראשונות", "green_starters", 0],
            sides : ["מנות ביניים", "green_sidedishes", -100],
            vegan : ["מנות טבעוניות", "green_vegan", -220],
            mainCourse : ["מנות עיקריות", "green_maincourse", -300],
            baking : ["קונדיטוריה", "green_baking", -300],
        },  
        classes : [``],// מה שצריך להראות או להסתיר
        functions : [`showTopics()`], // פונקציות שצריכות לפעול
        content : {
            salads : { // תת נושא
                "סלט-מלפפונים-ובצל" : {
                    pic: `cucamberSalad`,
                    description: `תיאור די קצר של המנה משפט בערך שאומר מה זה מלפפון ומה זה בצל נגיד.`,
                    ingredients : [
                        `מלפפון`,
                        `בצל סגול/לבן`,
                        `מלח`,
                        `פלפל`,
                        `שמן`,
                        `מיץ לימון`,
                    ],
                    preparation : [
                        `מורידים ראש וזנב, עושים 2-3 פסים למלפפון עם קולפן.`,
                        `חותכים את המלפפונים בצורה אלכסונית.`,
                        `מתבלים ומוסיפים פטרוזיליה או שמיר.`,
                    ],
                },
                "סלט-טחינה" : {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `טחינה גולמית`,
                        `מלח`,
                        `פלפל`,
                        `שום`,
                        `לימון טרי`,
                        `פטרוזיליה`,
                        `מים`,
                        `קרח`,
                    ],
                    preparation : [
                        `מרוקנים את תוכן הקופסא לקערה.`,
                        `מוסיפים 80% מהנפח מים על כמות הטחינה ומערבבים.`,
                        `מוסיפים תבלינים, לימון, שום וממשיכים לערבב.`,
                        `מוסיפים קצת קוביות קרח כדי להשלים נוזל קר לקבלת טחינה בהירה. `,
                        `מעטרים בפטרוזיליה.`,
                    ],
                },
                "סלט-קולסלאו" :  {
                    pic: `kolslowSalad`,
                    description: ``,
                    ingredients : [
                        `כרוב לבן`,
                        `גזר`,
                        `פטרוזיליה/שמיר`,
                        `מיונז`,
                        `מלח`,
                        `פלפל`,
                        `מעט חומץ/מיץ לימון`,
                    ],
                    preparation : [
                        `קוצצים את הכרוב שיפונד דק (שערות דקות) משרים במי מלח למשך 10 דקות.`,
                        `לאחר מכן רצוי לפזר מעט מלח על הכרוב ולתת לו לנוח במסננת להורדת נוזלים.`,
                        `מגרדים גזר, מוסיפים מיונז ומתבלים להשלמת הטעם.`,
                        `לבסוף מעטרים בפטרוזיליה/שמיר.`,
                    ],
                },
                "סלט-ירק" :  {
                    pic: `greenSalad`,
                    description: ``,
                    ingredients : [
                        `סלרי - 70% עלים, 30% גבעולים`,
                        `פטרוזיליה`,
                        `כוסברה`,
                        `נענע`,
                        `בוטנים/אגוזי לוז/קשיו קלוי/גרעיני חמנייה`,
                        `דלעת`,
                        `חמוציות`,
                        `חומץ`,
                        `סילאן`,
                        `שמן זית`,
                        `מלח`,
                        `פלפל`,
                    ],
                    preparation : [
                        `מנקים את הירקות ומשרים במי מלח כ-10 דק'.`,
                        `קוצצים את כל הירק אחיד ומוסיפים את סוג הפיצוחים עם החמוציות, מתבלים ומגישים.`,
                    ],
                },
                "סלט-גזר-אסיאתי" :  {
                    pic: `carrotSalad`,
                    description: `סלט גזר אסיאתי חמוץ חריף בשום`,
                    ingredients : [
                        `גזר `,
                        `שום `,
                        `פלפל חריף `,
                        `כוסברה`,
                        `לימון`,
                        `שמן זית `,
                        `מלח`,
                        `פלפל `,
                    ],
                    preparation : [
                        `חותכים את הגזר לג'וליאן (סיני).`,
                        `קוצצים פלפל חריף, כותשים שום ומוסיפים לגזר.`,
                        `סוחטים לימון ומתבלים בשמן זית, מלח, פלפל, ומעטרים בכוסברה.`,
                    ],
                },
                "סלט-קרפצ'יו-סלק" :  {
                    pic: `beetSalad`,
                    description: ``,
                    ingredients : [
                        `סלק אדום `,
                        `שמן זית`,
                        `לימון טרי`,
                        `בלסמי`,
                        `מלח גס`,
                        `פלפל גרוס `,
                        `בזיליקום/עירית/רוקט`,
                    ],
                    preparation : [
                        `פורסים פרוסות דקות של סלק עם מנדולינה או ביד דק דק.`,
                        `מסדרים על הצלחת, בוזקים שמן זית, לימון טרי, בלסמי מצומצם.`,
                        `מתבלים במלח גס ופלפל גרוס מעטרים בבזיליקום טרי.`,
                    ],
                },
                "סלט-משוויה" :  {
                    pic: `mashviaSalad`,
                    description: ``,
                    ingredients : [
                        `עגבנייה`,
                        `בצל`,
                        `פלפל חריף`,
                        `שום`,
                        `פטרוזיליה `,
                        `מלח`,
                        `פלפל`,
                        `שמן זית`,
                        `לימון`,
                    ],
                    preparation : [
                        `שורפים את העגבנייה, הבצל והפלפל החריף על האש.`,
                        `קולפים וקוצצים חיתוך גס.`,
                        `קוצצים שום, מתבלים בשמן זית, מלח ופלפל גרוס.`,
                        `מוסיפים מעט לימון מעטרים בפטרוזיליה ומגישים.`,
                    ],
                },
                "סלט-חציל-קלוי" :  {
                    pic: `eggPlantSalad`,
                    description: `סלט חציל קלוי על האש`,
                    ingredients : [
                        `חציל`,
                        `שום`,
                        `לימון`,
                        `פטרוזיליה`,
                        `מלח`,
                        `פלפל`,
                    ],
                    preparation : [
                        `שורפים חציל על אש גלויה- פותחים את החציל, מוציאים את התוכן מהקליפה וקוצצים אותו.`,
                        `מוסיפים שום קצוץ, לימון, מלח, פלפל, שמן זית.`,
                        `לעטר בפטרוזיליה ולבזוק מעל שמן זית.`,
                        `לצורת ההגשה אפשר להחזיר את החציל לקליפה השרופה`,
                    ],
                },
                "סלט-בטטה-בצ'ילי-מתוק" :  {
                    pic: `sweetPotatoSalad`,
                    description: ``,
                    ingredients : [
                        `בטטה `,
                        `שום`,
                        `בוטנים`,
                        `צ'ילי מתוק/סילאן + סויה`,
                        `מלח`,
                        `פלפל`,
                    ],
                    preparation : [
                        `חותכים בטטה לצורת צ'יפס דק ומטגנים אות עד לצבע זהוב.`,
                        `מתבלים בצ'ילי, שום, מלח ופלפל.`,
                        `אפשרות שניה להחליף את הצ'ילי המתוק לסילאן וסויה.`,
                        `מוסיפים בוטנים, אפשר לעטר גם בשומשום קלוי.`,
                    ],
                },
                "סלט-מטבוחה" :  {
                    pic: `matbochaSalad`,
                    description: ``,
                    ingredients : [
                        `עגבניות אדומות בשלות`,
                        `פלפל חריף`,
                        `שום`,
                        `כוסברה`,
                        `פפריקה`,
                        `מלח`,
                        `סוכר`,
                        `שמן `,
                    ],
                    preparation : [
                        `מבשלים את העגבניות בישול במים (טומט קונקסה) כ-10 דק' ומורידים את הקליפה.`,
                        `קוצצים את העגבניות לסיר, מוסיפים שיני שום.`,
                        `מבשלים על אש נמוכה כ2-4 שעות עם מכסה.`,
                        `מטגנים פלפל חריף, מקלפים וקוצצים לסיר.`,
                        `מערבבים שמן עם פפריקה ומוסיפים לסיר.`,
                        `משלימים מלח וסוכר, מוסיפים בגמר הבישול כוסברה קצוצה.`,
                    ],
                },
                "סלט-חמוצים" :  {
                    pic: `kimchiSalad`,
                    description: ``,
                    ingredients : [
                        `גזר`,
                        `גמבה אדומה/כתומה`,
                        `פלפל ירוק`,
                        `כרוב לבן`,
                        `פלפל חריף`,
                        `שום`,
                        `לימון`,
                        `מלח`,
                        `פלפל`,
                        `שמן`,
                    ],
                    preparation : [
                        `חותכים את הירקות לצורה הרצויה ג'וליאן או 2 ס"מ.`,
                        `סוחטים לימון לפי הצורך – 90% , חומץ 10%.`,
                        `מוסיפים שום, מלח, פלפל ושמן.`,
                    ],
                },
                "סלט-חומוס" :  {
                    pic: `homusSalad`,
                    description: ``,
                    ingredients : [
                        `גרגירי חומוס`,
                        `טחינה גולמית (על כל כוס חומוס 1/3 כוס טחינה)`,
                        `מים`,
                        `מלח`,
                        `כמון`,
                        `לימון`,
                        `סודה לשתייה`,
                    ],
                    preparation : [
                        `משרים את גרגירי החומוס בקערה עם מים למשך 12 שעות לפחות. מחליפים מים ומשרים לעוד שעה.`,
                        `מבשלים את הגרגירים בסיר עם מים וכף סודה לשתייה.`,
                        `מביאים לרתיחה, מסירים קצף בישול וממשיכים לבשל עד ריכוך מלא.`,
                        `מסננים את הגרגירים ממי הבישול.`,
                        `שמים את הגרגירים במעבד מזון, מוסיפים רבע כמות נוזל בישול וטוחנים היטב עד מרקם חלק.`,
                        `מוסיפים טחינה גולמית, מלח, מעט כמון, לימון סחוט וממשיכים לטחון עד למרקם חלק במיוחד.`,
                        `משטחים בצלחת ומעטרים בגרגירי חומוס, שמן זית, פטרוזיליה ומגוון תוספות שאוהבים.`,
                    ],
                },
            }, 
            starters : { // תת נושא
                "מרק-אפונה" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `גזר חתוך ברונאז'`,
                        `בצל בינוני חתוך ברונאז'`,
                        `גבעולי סלרי חתוכים ברונאז'`,
                        `שמן`,
                        `אפונה יבשה `,
                        `מלח`,
                        `כמון`,
                        `כורכום`,
                        `פלפל שחור`,
                        `שום`,
                        `מים`,
                    ],
                    preparation : [
                        `מאדים את הירקות בסיר ביחד עם השמן, מוסיפים 2 כוסות אפונה יבשה, מוסיפים מים עד לכיסוי התכולה.`,
                        `מבשלים כ-90 דקות על אש גבוהה ומוסיפים מים במידת הצורך.`,
                        ` כאשר האפונה רכה, טוחנים במוט בלנדר ולאחר מכן, מטבלים במלח, פלפל, כמון, כורכום ושום.`,
                        `להשלמת המנה יש לקצוץ פטרוזיליה ולהשלים לפני ההגשה.`,
                    ],
                },
                "אנטיפסטי" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `פלפל אדום`,
                        `כוס שמן זית`,
                        `פלפל ירוק`,
                        `רבע כוס חומץ בלסמי`,
                        `פלפל צהוב`,
                        `לימונים`,
                        `עגבניות`,
                        `מלח`,
                        `פלפל גרוס`,
                        `סוכר`,
                        `בטטות`,
                        `שיני שום`,
                        `חציל`,
                        `רוזמרין`,
                    ],
                    preparation : [
                        `חותכים את הירקות לצורה הרצויה (פרוסות/ירח/חצאים)`,
                        `בוזקים שמן זית ובלסמי.`,
                        `מגרדים שיני שום.`,
                        `מתבלים בפיזור מלח גס/שולחן, פלפל שחור גרוס ורוזמרין.`,
                        `אופים בתנור חם על 220 מעלות כ-15-20 דק'.`,
                    ],
                },
                "מרק-תירס" :  {
                    pic: `tahinaSalad`,
                    description: `מרק תירס אמריקאי עם שבבי קורנפלקס`,
                    ingredients : [
                        `50 גרם מחמאה`,
                        `פלפל אדום חתוך לקוביות קטנות`,
                        `כוס בצל קצוץ`,
                        `תירס`,
                        `2 ליטר נוזל עוף`,
                        `שמיר קצוץ`,
                        `כפית שום כתוש`,
                        `מלח`,
                        `פלפל`,
                        `חלב קוקוס`,
                    ],
                    preparation : [
                        `ממיסים את השומן ומאדים את הבצל, מוסיפים את השום ומערבבים.`,
                        `מוסיפים את הנוזל והתירס ומביאים לרתיחה.`,
                        `מבשלים כ- 15-20 דק' עד לריכוך התירס.`,
                        `מסננים וטוחנים במעבד מזון.`,
                        `מחזירים את הנוזל עד לקבלת סמיכות רצויה. משלימים טעם.`,
                        `מוסיפים את חלב הקוקוס.`,
                        `מקשטים את המרק (שמיר, פלפל אדום וקורנפלקס) ומגישים.`,
                    ],
                },
                "מרק-בצל" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `2 בצלים גדולים`,
                        `קמח`,
                        `יין`,
                        `50 גרם מחמאה`,
                        `מלח`,
                        `פלפל שחור`,
                    ],
                    preparation : [
                        `משחימים את הקמח, חותכים ומטגנים את הבצל עד לקבלת צבע זהוב. `,
                        `מוסיפים את הקמח והפלפל השחור. `,
                        `מורידים משקע בעזרת היין, מוסיפים נוזל וחומרי טעם.`,
                        `ניתן להגיש עם קרוטונים.`,
                    ],
                },
                "מרק-שעועית-איטלקי" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `גזר חתוך ברונאז' `,
                        `בצל בינוני חתוך ברונאז' `,
                        `גבעולי סלרי חתוכים ברונאז'`,
                        `שמן`,
                        `שעועית לבנה מבושלת`,
                        `כוס עגבניות טומט קונקסה חתוכות ברונאז'`,
                        `שיני שום`,
                        `100 גרם פסטה מבושלת אל דנטה`,
                        `מלח`,
                        `כמון`,
                        `פלפל שחור`,
                        `מים`,
                    ],
                    preparation : [
                        `מחממים שמן בסיר ומשחימים את הירקות (גזר, בצל וסלרי).`,
                        `מוסיפים מים ולאחר מכן מוסיפים את השעועית, מכסים את הסיר ולאחר 90 דק' מתבלים את המרק.`,
                        `בזמן ההגשה מוסיפים פסטה אל המרק.`,
                        `להשלמת המנה יש לקצוץ פטרוזיליה ועלי סלרי בגמר הבישול.`,
                    ],
                },
                "מרק-עדשים-איטלקי" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `עדשים ירוקות `,
                        `גזר חתוך ברונאז'`,
                        `בצל בינוני חתוך ברונאז' `,
                        `גבעולי סלרי חתוכים ברונאז' `,
                        `שמן`,
                        `שיני שום`,
                        `מלח`,
                        `פלפל שחור`,
                        `כמון`,
                        `מים`,
                        `לימון`,
                        `קורנפלור/קמח`,
                    ],
                    preparation : [
                        `מחממים שמן בסיר, מטגנים את הבצל, גזר וסלרי.`,
                        `מוסיפים מים ושום.`,
                        `לאחר מכן, מוסיפים את העדשים ומבשלים עד לריכוך.`,
                        `מטבלים ומסמיכים אם יש צורך בקורנפלור או קמח.`,
                        `להשלמת המנה יש לקצוץ פטרוזיליה ולסחוט מעט לימון.`,
                    ],
                },
                "מרק-ירקות" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `גזר שלם`,
                        `בצל בינוני חתוך ברונאז'`,
                        `גבעולי סלרי חתוכים ברונאז'`,
                        `קישוא שלם`,
                        `תפו"א שלם`,
                        `כוסברה/פטרוזיליה`,
                        `שמן`,
                        `מלח`,
                        `פלפל שחור`,
                        `כורכום`,
                        `מים`,
                    ],
                    preparation : [
                        `מטגנים את הבצל והסלרי במעט שמן, ממלאים את הסיר במים ומוסיפים את התפו"א, גזר וקישוא, מבשלים עד לריכוך מלא.`,
                        ` מוציאים את הירקות מהנוזל, מועכים אותם ומחזירים אותם לנוזל.`,
                        `מרתיחים, מטבלים ומשלימים בכוסברה/פטרוזיליה קצוצה.`,
                    ],
                },
                "מרק-סולת" :  {
                    pic: `tahinaSalad`,
                    description: `מרק סולת בשום שמיר`,
                    ingredients : [
                        `שיני שום כתושים`,
                        `צרור שמיר קצוץ`,
                        `שמן`,
                        `סולת`,
                        `מלח`,
                        `פלפל שחור`,
                        `מים`,
                    ],
                    preparation : [
                        `מחממים מים בסיר, מוסיפים את השום ולאחר מכן מוסיפים את השמיר הקצוץ, מביאים לרתיחה.`,
                        `מוסיפים את הסולת בהדרגה תוך כדי ערבוב מתבלים את המרק.`,
                    ],
                },
                "מרק-כתום" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `דלורית`,
                        `בטטה`,
                        `רבע דלעת`,
                        `גזר`,
                        `מלח`,
                        `פלפל שחור`,
                        `מרק עוף`,
                        `מים`,
                    ],
                    preparation : [
                        `מחממים מים בסיר, מוסיפים את הירקות, מביאים לרתיחה, טוחנים את הירקות עד למרקם אחיד ומתבלים את המרק.`,
                        `להשלמת המנה יש להוסיף מעט קרם קוקוס לקישוט ועידון הטעמים.`,
                    ],
                },
                "מרק-חרירה-מרוקאי" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `בצל`,
                        `סלרי`,
                        `גרגירי חומוס`,
                        `עדשים ירוקות`,
                        `אטריות`,
                        `עגבנייה`,
                        `כוסברה`,
                        `מלח`,
                        `פלפל `,
                        `קמח`,
                        `מים`,
                    ],
                    preparation : [
                        `קוצצים את הסלרי והבצל, מטגנים בסיר עם מעט שמן (אפשרי להוסיף בשר).`,
                        `מוסיפים עגבנייה קצוצה ללא קליפה וממשיכים לאדות.`,
                        `מוסיפים מים לפי הצורך של הכמות הרצויה ומרתיחים את המים.`,
                        `מוסיפים את גרגירי החומוס ונותנים להם להתבשל עד ריכוך.`,
                        `כחצי שעה לפני מוסיפים את העדשים ירוקות, מבשלים אותן ובסוף מוסיפים תיבול ומעט אטריות.`,
                        `מסמיכים את המרק עם שתי כפות קמח ע"פ הצורך.`,
                    ],
                },
                "פלפל-ממולא" :  {
                    pic: `tahinaSalad`,
                    description: `פלפל ממולא אורז ברוטב עגבניות`,
                    ingredients : [
                        `אורז`,
                        `בצל בינוני חתוך ברונאז'`,
                        `גמבה אדומה`,
                        `צרור פטרוזיליה `,
                        `כפות שמן`,
                        `שיני שום`,
                        `רסק עגבניות`,
                        `מלח`,
                        `כמון`,
                        `פלפל שחור`,
                        `מים`,
                    ],
                    preparation : [
                        `מחממים סיר שטוח ורחב עם השמן ומוסיפים את הבצל עד להזהבה.`,
                        `מוסיפים את רסק העגבניות והעגבניות המרוסקות ומערבבים.`,
                        `מוסיפים את התבלינים ומערבבים.`,
                        `לאחר מכן מוסיפים את המים הרותחים.`,
                        `שוטפים את הפלפלים ומורידים את הראש ממלאים את הפלפלים באורז.`,
                        `מסדרים בתוך הסיר בצפיפות וממשיכים בישול על אש נמוכה כ-45 דקות.`,
                    ],
                },
                "ארנצ'יני" :  {
                    pic: `tahinaSalad`,
                    description: `ריזוטו אורז ופטריות מטוגן בפירורי מאפה`,
                    ingredients : [
                        `אורז ריזוטו`,
                        `שמן`,
                        `בצל`,
                        `פטריות`,
                        `שום `,
                        `יין לבן`,
                        `ציר ירקות `,
                        `מחמאה`,
                        `פירורי מאפה`,
                    ],
                    preparation : [
                        `מאדים את הבצל עם הפטריות והשום במעט שמן, מוסיפים את האורז ומטגנים קלות.`,
                        `מוסיפים 3\1 מכמות הנוזלים ומצמצים.`,
                        `ממשיכים להוסיף 3\2 מהנוזל בכמויות קטנות תוך כדי ערבוב כאשר האורז מוכן קושרים עם קוביות מחמאה.`,
                        `מקררים ומכדררים, מצפים בפירורי מאפה ומטגנים בשמן עמוק.`,
                    ],
                },
                "טורטייה-במילוי-ירקות-מוקפצים" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `טורטיות `,
                        `בצל`,
                        `שום`,
                        `פלפל אדום`,
                        `פלפל ירוק`,
                        `פלפל צהוב `,
                        `כרוב לבן`,
                        `גזר `,
                        `נבטים`,
                        `שמן זית`,
                        `מלח`,
                        `פלפל גרוס`,
                        `טריאקי/צ'ילי מתוק/צ'ילי חריף`,
                    ],
                    preparation : [
                        `שמים בווק/מחבת מעט שמן זית ומחממים.`,
                        `מקפיצים את הירקות לפי דרגת קושי.`,
                        `מתחילים עם הגזר, פלפלים, בצל ובסוף את הירקות הדינים כגון: כרוב, נבטים ועשבי תיבול.`,
                        `ההקפצה צריכה להיות כמה דקות כדי להשאיר את הירקות קריספיים ולא מושי, לא לגמור את הירקות.`,
                        `לתבל בתבלינים ואפשרי להשתמש ברטבים לפי טעם.`,
                        `למלא בטורטייה, לגלגל ולהגיש.`,
                    ],
                },
                'אצבעות-בורקס-תפו"א-או-בטטה' :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        `בצק עלים`,
                        `תפו"א או בטטה`,
                        `מרק עוף`,
                        `מלח`,
                        `פלפל שחור`,
                        `ביצה`,
                        `שומשום`,
                    ],
                    preparation : [
                        `מרדדים בצק עלים וחותכים לצורה הנדרשת – מלבן/מרובע.`,
                        `מבשלים את התפו"א/בטטה למחית ומתבלים.`,
                        `ממלאים, מקפלים לצורה הנדרשת, מורחים ביצה, מפזרים שומשום ואופים על 180 מעלות למשך 20 דקות`,
                    ],
                },
                "דוגמא" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
                "דוגמא" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
                "דוגמא" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
                "דוגמא" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
            sides : { // תת נושא
                "סלט-טחינה" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
            vegan : { // תת נושא
                "סלט-טחינה" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
            mainCourse : { // תת נושא
                "סלט-טחינה" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
            baking : { // תת נושא
                "סלט-טחינה" :  {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [
                        ``,
                        ``,
                        ``,
                    ],
                    preparation : [
                        ``,
                        ``,
                        ``,
                    ],
                },
            }, 
        }
    },
}

// varubles
let strCurrentPage = "mainPage";
let strFormerPage = "mainPage";
let strCurrentRecipeTopic = "salads";
let bMenuPage = false;


/* loading function
--------------------------------------------------------------
Description: */
window.addEventListener(`load`, () => {
    document.querySelector(`.loader`).classList.add(`fade`);
    let arrMainPageButtons = document.querySelectorAll('.mainPageButton');
    for (let i = 0; i < arrMainPageButtons.length; i++) {
        arrMainPageButtons[i].addEventListener('click', showPage);
    };
    showNavBar();
});


/* showPage
--------------------------------------------------------------
Description:  */
const showPage = (event) => {
    // מעלים דיב קודם שומר דיב נוכחי ומראה אותו
    document.querySelector(`.${strCurrentPage}`).classList.add("hidden");
    if (event.currentTarget.classList[1] !== "x") {   // מטפל במקרה של תפריט
        if (strCurrentPage === "menuPage") {
            document.querySelector(`.${strCurrentPage}`).classList.add("hidden");
            strCurrentPage = `${event.currentTarget.classList[2]}Page`;
        } else {
            strFormerPage = strCurrentPage;
            strCurrentPage = event.currentTarget.classList[1] + "Page";
        }
    } else {
        strCurrentPage = strFormerPage;
    }
    document.querySelector(`.${strCurrentPage}`).classList.remove("hidden");
    // שם מאזינים אם צריך
    if (PAGES[strCurrentPage].listeners) {
        for (key of Object.keys(PAGES[strCurrentPage].listeners)) {
            document.querySelector(`.${key}`).addEventListener('click', eval(PAGES[strCurrentPage].listeners[key]));
        }
    }

    if (event.currentTarget.classList[0] === "menuDropDownItemContainer") {
        strCurrentRecipeTopic = event.currentTarget.classList[1];
    }
    // מראה בר תחתון
    if (PAGES[strCurrentPage].bottomNavBar) {
        document.querySelector(`.${strCurrentPage} .bottomNavBar`).innerHTML = "";
        for (let key of Object.keys(PAGES[strCurrentPage].bottomNavBar)) {
            let bottomNavBarTopic = El("div", 
            {attributes: {class: `bottomNavBarTopic ${key}`}, 
            listeners : {click : showTopics}},
            El ("img", {attributes: {class : "bottomNavBarPic" , src: `../assets/images/grapics/recipe/${PAGES[strCurrentPage].bottomNavBar[key][1]}.svg`}}),
            El ("div", {cls: "bottomNavBarText"}, PAGES[strCurrentPage].bottomNavBar[key][0])
            );
            document.querySelector(`.${strCurrentPage} .bottomNavBar`).append(bottomNavBarTopic)
        }
        document.querySelector(`.${strCurrentRecipeTopic}`).classList.add("bold");
        document.querySelector(`.bottomNavBar`).scrollLeft = PAGES[strCurrentPage].bottomNavBar[strCurrentRecipeTopic][2];
    }
    // קורא לפונקציות אם צריך
    if (PAGES[strCurrentPage].functions) {
        for (let i = 0; i < PAGES[strCurrentPage].functions.length; i++) {
            eval(PAGES[strCurrentPage].functions[i]);
        }
    }

    // מראה תפריט עליון
    showNavBar();
    if(document.querySelector(`.recipeContent`)) {
        let recipeContent = document.querySelector(`.recipeContent`);
        document.querySelector(`.recipePage`).removeChild(recipeContent);
    }
}

/* showRecipe
--------------------------------------------------------------
Description:  */
const showRecipe = (event) => {
    // שומר מתכון וקטגוריה נוכחיים
    let strCurrentRecipe = event.currentTarget.classList[1];
    if(event.currentTarget.classList[2]) {
        strCurrentRecipeTopic = event.currentTarget.classList[2];
    }
    // אם באים מחיפוש
    if (document.querySelector('.searchScreen').classList[2] === undefined) {
        document.querySelector('.searchScreen').classList.add("hidden");
        // מעלים דיב קודם שומר דיב נוכחי ומראה אותו
        document.querySelector(`.${strCurrentPage}`).classList.add("hidden");
        strCurrentPage = "recipePage";
        document.querySelector(`.${strCurrentPage}`).classList.remove("hidden");
        // מראה תפריט עליון
        showNavBar();
    }
    // עוד לא ברור עם לעשות דיספלי נון או למחוק תוכן!!!!!
    document.querySelector(`.recipesScrollContainer`).innerHTML = "";
    document.querySelector(`.bottomNavBar`).innerHTML = "";
    if(document.querySelector(`.recipeContent`)) {
        let recipeContent = document.querySelector(`.recipeContent`);
        document.querySelector(`.recipePage`).removeChild(recipeContent);
    }
    // יוצר מתכון ומכניס לדף
    let recipeContent = El("div", {cls : "recipeContent"},
        El("img", 
        {attributes: {class: `recipeContentPic`, 
        src : `../assets/images/foodImages/${strCurrentRecipeTopic}/${PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].pic}.jpeg`}}),
        El("div", {cls : "recipeContentHeadline"}, addSpace(strCurrentRecipe)),
        El("div", {cls : "recipeContentDescription"}, PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].description),
        El("div", {cls : "ingredientsContainer"},
            El("div", {cls : "recipeContentIngredientHead"}, "מצרכים"),
        ),
        El("div", {cls : "preparationsContainer"},
            El("div", {cls : "recipeContentIngredientHead"}, "אופן הכנה"),
        ),
    );
    document.querySelector(`.recipePage`).append(recipeContent);
    // מכניס מצרכים
    for (let i = 0; i < PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].ingredients.length; i++ ) {
        let ingredient = El("div", {cls : "ingredientContainer"},
        El("img",{attributes: {class: `ingredientCheckPic ingredientCheckPic${i}`, 
        src : `../assets/images/grapics/recipe/checkbox_blank.svg`},
        listeners : {click: onClickCheckBox}}),
        PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].ingredients[i]
        );
        document.querySelector(`.ingredientsContainer`).append(ingredient);
    }
    // מכניס אופן הכנה
    for (let i = 0; i < PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].preparation.length; i++ ) {
        let preparation = El("div", {cls : "preparationContainer"},
        El("img",{attributes: {class: `preparationCheckPic preparationCheckPic${i} gray`, 
        src : `../assets/images/grapics/recipe/round_checkbox.svg`},
        listeners : {click: onClickCheckBox}}),
        PAGES[strCurrentPage].content[strCurrentRecipeTopic][strCurrentRecipe].preparation[i]
        );
        document.querySelector(`.preparationsContainer`).append(preparation);
    }
}

/* showTopics
--------------------------------------------------------------
Description: change hyphen to space */
const showTopics = (event) => {
    // מוריד בולד לקטגוריה הקודמת, שומר קטגוריה נוכחית ושם עליה בולד
    document.querySelector(`.recipePage .${strCurrentRecipeTopic}`).classList.remove("bold");
    if(event) {
        strCurrentRecipeTopic = event.currentTarget.classList[1];
    } else if (bMenuPage) {
        bMenuPage = false;    
    } else {
        let arrTopic = [];
        for (let topics of Object.keys(PAGES[strCurrentPage].content)) {
            arrTopic.push(topics);
        }
        strCurrentRecipeTopic = arrTopic[0];
    }
    document.querySelector(`.recipePage .${strCurrentRecipeTopic}`).classList.add("bold");
    // מוחק מידע קודם ומכניס תמונות וטקסט בהתאם לקטגוריה
    document.querySelector(`.recipesScrollContainer`).innerHTML = "";
    for(let key of Object.keys(PAGES[strCurrentPage].content[strCurrentRecipeTopic])) {
        let recipeDisplay = El("div",
        {attributes: {class: `recipeDisplay ${key}`}, 
        listeners : {click : showRecipe}},
            El("img",
            {attributes: {class: `recipeDisplayPic`, 
            src : `../assets/images/foodImages/${strCurrentRecipeTopic}/${PAGES[strCurrentPage].content[strCurrentRecipeTopic][key].pic}.jpeg`},}),
            El("div", {cls: `recipeDisplayText`}, addSpace(key))
        )
        document.querySelector(`.recipesScrollContainer`).append(recipeDisplay)
    }
}


/* onClickCheckBox
--------------------------------------------------------------
Description:  */
const onClickCheckBox = (event) => {
    if (event.currentTarget.classList[0] === "preparationCheckPic") {
        if(event.currentTarget.classList[2] === "gray") {
            document.querySelector(`.${event.currentTarget.classList[1]}`).classList.remove("gray");
        } else {
            document.querySelector(`.${event.currentTarget.classList[1]}`).classList.add("gray");
        }
    } else {
        if (document.querySelector(`.${event.currentTarget.classList[1]}`).getAttribute("src") === `../assets/images/grapics/recipe/checkbox_v.svg`) {
            document.querySelector(`.${event.currentTarget.classList[1]}`).setAttribute("src", `../assets/images/grapics/recipe/checkbox_blank.svg`);
        } else {
            document.querySelector(`.${event.currentTarget.classList[1]}`).setAttribute("src", `../assets/images/grapics/recipe/checkbox_v.svg`);
        }
    }

}

/* showMenu
--------------------------------------------------------------
Description:  */
const showMenu = () => {
    bMenuPage = true;
    // מוחק מידע קודם ומכניס תמונות וטקסט בהתאם לקטגוריה
    document.querySelector(`.menuPage`).innerHTML = "";
    for(let key of Object.keys(PAGES.menuPage.content)) {
        let menuDisplay = El("div",{classes: [`menuContainer`, key]},
            El("div",
            {attributes: {class: `menuItem`}}, 
                El("div", {classes: [`menuItemContainer`,"container", key],
                listeners : {click : showPage}}, 
                    El("img",
                    {attributes: {class: `menuItemicon`, 
                    src : `../assets/images/grapics/menu/${PAGES.menuPage.content[key][1]}.svg`},}),
                    PAGES.menuPage.content[key][0],
                ),
                El("img",
                    {attributes: {class: `menuItemArrow ${key}`, 
                    src : `../assets/images/grapics/menu/dropdown_sideArrow.svg`},
                    listeners : {click : menuDropDown}}),
                )
        )
        document.querySelector(`.menuPage`).append(menuDisplay)
    }

}

/* menuDropDown
--------------------------------------------------------------
Description:  */
const menuDropDown = (event) => {
    let currentPage = event.currentTarget.classList[1];
    let objCurrentDropDown = PAGES.menuPage.content[event.currentTarget.classList[1]][2];
    // מראה דרופ דאון
    if (document.querySelector(`.menuPage > .${currentPage} > .menuItem`).lastChild.getAttribute("src") === "../assets/images/grapics/menu/dropdown_sideArrow.svg") {
        document.querySelector(`.menuPage > .${currentPage} > .menuItem`).lastChild.setAttribute("src", "../assets/images/grapics/menu/opened_dropdown.svg");
        for(let key of Object.keys(objCurrentDropDown)) {
            let menuDropDown = 
                El("div", {classes: [`menuDropDownItemContainer`, key, currentPage],
                listeners : {click : showPage}}, 
                    El("img",
                    {attributes: {class: `menuDropDownItemicon`, 
                    src : `../assets/images/grapics/menu/${objCurrentDropDown[key][1]}.svg`},}),
                    objCurrentDropDown[key][0],
                );
            document.querySelector(`.menuPage > .${currentPage}`).append(menuDropDown)
        }
    } else { // מעלים דרופ דאון
        document.querySelector(`.menuPage > .${currentPage} > .menuItem`).lastChild.setAttribute("src", "../assets/images/grapics/menu/dropdown_sideArrow.svg");
        let arrDropDownItems = document.querySelectorAll(`.menuPage > .${currentPage} .menuDropDownItemContainer`);
        for (let i = 0; i < arrDropDownItems.length; i++) {
            document.querySelector(`.menuPage > .${currentPage}`).removeChild(arrDropDownItems[i]);
        };
    }



}

/* onClickSearch
--------------------------------------------------------------
Description:  */
const onClickSearch = () => {
    document.querySelector('.searchScreen').classList.remove("hidden");
    document.querySelector(`.closeSearch`).addEventListener('click', () => {
        document.querySelector('.searchScreen').classList.add("hidden");
    });
    document.querySelector(`.searchBox`).addEventListener("input", onSearch);
}

/* onSearch
--------------------------------------------------------------
Description: cheack for search match and creat dropdown accordingly */
const onSearch = () => {
    document.querySelector('.dropDown').innerHTML = "";
    // עובר על כול הקטגוריות של המתכונים
    for (let keys of Object.keys(PAGES.recipePage.content)){
        // בכול קטגוריה, עובר על כול המתכונים ומחפש התאמה לחיפוש
        for (let key of Object.keys(PAGES.recipePage.content[keys])) {
            let strUserInput = document.querySelector(`.searchBox`).value;
            if(key.includes(strUserInput) && strUserInput !== ""){
                let dropDownItem = El("div", {classes : ["dropDownItem", key, keys], listeners : {click : showRecipe}}, addSpace(key))
                document.querySelector('.dropDown').append(dropDownItem);
            }
        }
    
    }
}

/* showNavBar
--------------------------------------------------------------
Description: change hyphen to space */
const showNavBar = () => {
    // מוחק מידע קודם ומכניס תפריט ניווט עליון לפי העמוד הנוכחי 
    document.querySelector(`.topNavBar`).innerHTML = "";
    for (key of Object.keys(PAGES[strCurrentPage].topNavBar)) {
        let navBarItem
        if (key.slice(0,3) === "img") {
            if (key.includes("button")) { // כפתור עליון שמאלי
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: `${key.slice(4)} ${key.slice(11)}`},
                listeners: {click : showPage}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            } else if (key === "img_SearchIcon") { // חיפוש
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: key.slice(4)},
                listeners: {click : onClickSearch}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            }else { // סמלים
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: key.slice(4)}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            }
        } else if (key.slice(0,3) === "div"){ // כותרת
            if(key.slice(4,14) === "topNavText") {
                navBarItem = El(key.slice(0,3), { classes: [key.slice(4,14), key.slice(15)], listeners : {click: showPage}}, PAGES[strCurrentPage].topNavBar[key]);
                document.querySelector(`.topNavBar`).append(navBarItem);
            } else {
                navBarItem = El(key.slice(0,3), { cls: key.slice(4)}, PAGES[strCurrentPage].topNavBar[key]);
                document.querySelector(`.topNavBar`).append(navBarItem);
            }
        } else { // צבע רקע
            document.querySelector(`.topNavBar`).style[key] = PAGES[strCurrentPage].topNavBar[key];
        }
    }
}

/* addSpace
--------------------------------------------------------------
Description: change hyphen to space */
const addSpace = (phrase) => {
    return phrase.replace(/-/g, ' ');
}


//   @template T
//   @param {keyof HTMLElementTagNameMap} tagName 
//   @param {{classes?: string[], cls?: string, id?: string, attributes: {[index: string]: string | { toString(): string }}, listeners: Listeners}} options 
//   @param  {...string | Node} children 
function El(tagName, options = {}, ...children) {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.cls) el.classList.add(options.cls);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}