let PAGES = {
    // עמוד ראשי
    mainPage : {
        topNavBar : {
            backgroundColor : `#0D635F`,
            img_button_about : `about_icon.svg`, // אודות / איקס / תפריט
            div_topNavText : `לומדת טבחים`,
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
            div_topNavText : `אודות`,
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
    },
    // ספר מתכונים
    recipePage : { 
        topNavBar : {
            backgroundColor : `#0D635F`,
            img_button_menu : `3lines_white.svg`, // אודות / איקס / תפריט
            img_SearchIcon : `search_white.svg`, 
            div_topNavLine : ``,
            img_topNavTextIcon : `white_cookbook.svg`,
            div_topNavText : `ספר מתכונים`,
            img_bhdLogo : `בהד 6.png`,
            img_tillLogo : `till_logo_white.svg`,
        },
        bottomNavBar : [], // סמלים של הקטגוריות של המתכונים 
        classes : [``],// מה שצריך להראות או להסתיר
        functions : [``], // פונקציות שצריכות לפעול
        subTopic : { // תת נושא
            picDisplay : [``], // תצוגה של תמונות
            recipes : {
                "מאכל" : {
                    ingredients : [],
                    preparation : [],
                },
                "1מאכל" : {
                    ingredients : [],
                    preparation : [],
                },
                "2מאכל" : {
                    ingredients : [],
                    preparation : [],
                },
            },
        },
    },
}

// varubles
let strCurrentPage = "mainPage";
let strFormerPage = "mainPage";


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
Description: change hyphen to space */
const showPage = (event) => {
    document.querySelector(`.${strCurrentPage}`).classList.add("hidden");
    if (event.currentTarget.classList[1] !== "x") {   
        strFormerPage = strCurrentPage;
        strCurrentPage = event.currentTarget.classList[1] + "Page";
    } else {
        strCurrentPage = strFormerPage;
    }

    document.querySelector(`.${strCurrentPage}`).classList.remove("hidden");
    if (PAGES[strCurrentPage].listeners) {
        for (key of Object.keys(PAGES[strCurrentPage].listeners)) {
            document.querySelector(`.${key}`).addEventListener('click', eval(PAGES[strCurrentPage].listeners[key]));
        }
    }
    showNavBar();
    // eval(PAGES.strCurrentPage.functions);
}

/* onClickSearch
--------------------------------------------------------------
Description: change hyphen to space */
const onClickSearch = (event) => {
    console.log("חיפוש");
}

/* showNavBar
--------------------------------------------------------------
Description: change hyphen to space */
const showNavBar = () => {
    document.querySelector(`.topNavBar`).innerHTML = "";
    for (key of Object.keys(PAGES[strCurrentPage].topNavBar)) {
        let navBarItem
        if (key.slice(0,3) === "img") {
            if (key.includes("button")) {
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: `${key.slice(4)} ${key.slice(11)}`},
                listeners: {click : showPage}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            } else if (key === "img_SearchIcon") {
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: key.slice(4)},
                listeners: {click : onClickSearch}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            }else {
                navBarItem = El(key.slice(0,3), 
                { attributes: { src: `../assets/images/grapics/topNavBar/${PAGES[strCurrentPage].topNavBar[key]}`, class: key.slice(4)}});
                document.querySelector(`.topNavBar`).append(navBarItem);
            }
        } else if (key.slice(0,3) === "div"){
            navBarItem = El(key.slice(0,3), { cls: key.slice(4)}, PAGES[strCurrentPage].topNavBar[key]);
            document.querySelector(`.topNavBar`).append(navBarItem);
        } else {
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