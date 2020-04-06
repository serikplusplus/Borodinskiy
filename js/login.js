//Попап
var loginPopup = document.querySelector(".popup_login");
//Кнопка входа
var login = document.querySelector(".user__open");  
//Кнопка выхода
var closePopup = loginPopup.querySelector(".close_popup");
//Форма в попапе и ее поля
var popupForm = loginPopup.querySelector("form");
var popupFormName = popupForm.querySelector("[name=login]");
var popupFormPassword = popupForm.querySelector("[name=password]");
//Стор
var storage = "";
var storageSupport = true;
//Проверка работы со стор
try{
    storage = localStorage.getItem("login");
} catch(err)
{
    storageSupport = false;
}
//Открытие попапа
login.addEventListener("click", function(evt) {

    evt.preventDefault();
    loginPopup.classList.toggle("open_popup_login");
    if(storage)
    {
        popupFormName.value = storage;
        popupFormPassword.focus();
    }else {
        popupFormName.focus();
    }
}
);
//Закрытие попапа
closePopup.addEventListener("click", function(evt){
    evt.preventDefault();
    loginPopup.classList.toggle("open_popup_login");
    loginPopup.classList.toggle("close_popup_login");
    loginPopup.classList.remove("eror_popup_login")
    setTimeout( function(){loginPopup.classList.toggle("close_popup_login")},800)
});
//Проверка данных в форме 
popupForm.addEventListener("submit", function(evt){
    if(!popupFormName.value || !popupFormPassword.value)
    {
        evt.preventDefault();
        
        if( loginPopup.classList.contains("eror_popup_login")){
            loginPopup.classList.remove("eror_popup_login");
            setTimeout( function(){loginPopup.classList.add("eror_popup_login")},50)
        }
        else{
            loginPopup.classList.add("eror_popup_login");
        }
    }
    else{
        if(storageSupport)
        {
            localStorage.setItem("login",popupFormName.value);
        }
    }
});



//Считывание нажатых клавиш
window.addEventListener("keydown",function(evt)
{
    if(evt.keyCode === 27)//Еsc
    {
        evt.preventDefault();
        if(loginPopup.classList.contains('open_popup_login'))
        {
            loginPopup.classList.toggle("open_popup_login");
            loginPopup.classList.toggle("close_popup_login");
            setTimeout( function(){loginPopup.classList.toggle("close_popup_login")},800)
        }
        if(mapPopup.classList.contains('open_popup_map'))
        {
            mapPopup.classList.toggle("open_popup_map");
            mapPopup.classList.toggle("close_popup_map");
            setTimeout( function(){mapPopup.classList.toggle("close_popup_map")},600)
        }

    }
    if(evt.keyCode === 70)//f
    {
        evt.preventDefault();
        localStorage.clear();
    }
});