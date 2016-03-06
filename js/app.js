/*global $*/
function backToTop(){
	$("html, body").animate({scrollTop: 0}, 1000);
}

//Checking scroll for back to top
function checkScroll(e){
	var scroll = $(window).scrollTop();
	scroll > 600 ? $('.back-to-top').fadeIn() : $('.back-to-top').fadeOut();
};

function buyRentTabs(){
    var $this = $(this),
       count = $this.index();
    $(".tab-data:eq("+count+")").removeClass("hide").siblings().addClass("hide");
};

function propTabs(e){
    e.preventDefault()
    var $this = $(this),
       count = $this.index();
    $this.find("a").addClass("prop-active").parent().siblings().find("a").removeClass("prop-active");
    $(".prop-tab-data:eq("+count+")").removeClass("hide").siblings().addClass("hide");
};

function tabDropDowns(){
    var $this = $(this);
    $this.next(".drop-down").toggleClass("hide").parent().siblings().find(".drop-down").addClass("hide");
};

function priceSelectionMin(){
    var $this = $(this);
    $this.parents(".drop-down").find(".min").val($this.text());
};

function priceSelectionMax(){
    var $this = $(this);
    $this.parents(".drop-down").find(".max").val($this.text());
};

//if user click outside of buy / rent drop downs.
function outsideDpClick(e){
    var container = $(".dp");
    if (!container.is(e.target) && container.has(e.target).length === 0){
        $('.drop-down').addClass("hide");
    };
};

//if user click outside of Shortings drop downs.
function outsideShortingClick(e){
    var container = $(".dp-shorting");
    if (!container.is(e.target) && container.has(e.target).length === 0){
        $('.listing-buy-dropdowns').addClass("hide").parent().removeClass("dp-shorting-active");
    }
};

function contactAgentPopup(e) {
    e.preventDefault();
    $("#overlay").show();
    $(".contact-agent-popup").addClass("popupOpen");
};

function reportPopup(e){
    e.preventDefault();
    $("#overlay").show();
    $(".report-problem-popup").addClass("popupOpen");
};

function sellRentPopup(e){
    e.preventDefault();
    $("#overlay").show();
    $(".sell-rent-popup").addClass("popupOpen");
};

/* popup close function */
function PopupClose() {
    $("#overlay").hide();
    $(this).parents(".popupOpen").removeClass("popupOpen");
};

function shortingDropdowns(){
    var $this = $(this);
    $this
    .next(".listing-buy-dropdowns")
    .toggleClass("hide")
    .parent()
    .addClass("dp-shorting-active")
    .siblings()
    .removeClass("dp-shorting-active")
    .find(".listing-buy-dropdowns")
    .addClass("hide");
};

function checkAllResident(){
    $(this).is(":checked") ? $(".resi-checked").prop("checked", true) : $(".resi-checked").prop("checked", false);
};

function checkAllResidentRent(){
    $(this).is(":checked") ? $(".resi-rent-checked").prop("checked", true) : $(".resi-rent-checked").prop("checked", false); 
};


$(function(){
	//event bindings
	$(".back-to-top").on("click", backToTop);
	$(window).on("scroll", checkScroll);
    $(".buy-rent-tabs li").on("click", buyRentTabs);
    $(".prop-tabs li").on("click", propTabs);
    $(".dp-click").on("click", tabDropDowns);
    $(".min-container > li").on("click", priceSelectionMin);
    $(".max-container > li").on("click", priceSelectionMax);
    $(".contact-agent").on("click", contactAgentPopup);
    $(".problem-report").on("click", reportPopup);
    $(".sell-rent-prop").on("click", sellRentPopup);
    $(".contact-close, .report-cancel").on("click", PopupClose);
    $(document).on("click", outsideDpClick);
    $(document).on("click", outsideShortingClick);
    $(".dp-shorting-click").on("click", shortingDropdowns);
    $(".all-resi-checked").on("click", checkAllResident);
    $(".all-resi-rent-checked").on("click", checkAllResidentRent);
    $('.custom-scroll').enscroll();
});