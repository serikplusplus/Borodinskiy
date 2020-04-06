/*Попапы*/
var mapPopup = document.querySelector(".popup_map");

/*Кнопки врода в попапы*/
var mapFooter = document.querySelector(".mapFooter");

/* Кнопки закрытия popups*/
var closePopup1 = mapPopup.querySelector(".close_popup");

//Открытие карты в футере
mapFooter.addEventListener("click", function(evt)
{
    evt.preventDefault();
    mapPopup.classList.toggle("open_popup_map");
});

closePopup1.addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.toggle("open_popup_map");
    mapPopup.classList.toggle("close_popup_map");
    setTimeout( function(){mapPopup.classList.toggle("close_popup_map")},600)
});