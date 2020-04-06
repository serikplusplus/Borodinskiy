var wereButton = document.querySelector(".were");
//Форма заявки и ее поля
var writeForm = document.querySelector(".write__form");
var writeFormDate = writeForm.querySelector("[name=date]");
var writeFormTime = writeForm.querySelector("[name=time]");
var writeFormName = writeForm.querySelector("[name=name]");
var writeFormTel = writeForm.querySelector("[name=tel]");

//Открытие попапа с картой
wereButton.addEventListener("click", function(evt)
{
    evt.preventDefault();
    mapPopup.classList.toggle("open_popup_map");

});

writeForm.addEventListener("submit", function(evt)
{
    if(!writeFormDate.value || !writeFormName.value || !writeFormTel.value || !writeFormTime.value)
    {
        evt.preventDefault();
        alert("Заполните данные")
    }
});