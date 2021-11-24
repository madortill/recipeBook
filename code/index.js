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
                    ingredients : [],
                    preparation : [],
                },
                "סלט-קולסלאו" : {
                    pic: `kolslowSalad`,
                    description: ``,
                    ingredients : [],
                    preparation : [],
                },
                "1סלט-מלפפונים-ובצל" : {
                    pic: `cucamberSalad`,
                    description: ``,
                    ingredients : [],
                    preparation : [],
                },
                "2סלט-מלפפונים-ובצל" : {
                    pic: `cucamberSalad`,
                    description: ``,
                    ingredients : [],
                    preparation : [],
                },
                "3סלט-מלפפונים-ובצל" : {
                    pic: `cucamberSalad`,
                    description: ``,
                    ingredients : [],
                    preparation : [],
                },
            }, 
            starters : { // תת נושא
                "סלט-טחינה" : {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [],
                    preparation : [],
                },
            }, 
            sides : { // תת נושא
                "סלט-טחינה" : {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [],
                    preparation : [],
                },
            }, 
            vegan : { // תת נושא
                "סלט-טחינה" : {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [],
                    preparation : [],
                },
            }, 
            mainCourse : { // תת נושא
                "סלט-טחינה" : {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [],
                    preparation : [],
                },
            }, 
            baking : { // תת נושא
                "סלט-טחינה" : {
                    pic: `tahinaSalad`,
                    description: ``,
                    ingredients : [],
                    preparation : [],
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

    if (bMenuPage) {
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