//***************Hamburger Nav******************
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

//*********Extra info pannels for portfolio Grid************
const quickViewButtons = document.querySelectorAll('[data-quick-view]');
const closeButtons = document.querySelectorAll('[data-close]');
const fullwidthCards = document.querySelectorAll('.fullwidth');
let toggle; // Quick view <button>.
let toggleParent; // <li>.
let fullwidth; // Fullwidth card to be "injected".

const openQuickView = (toggle, toggleParent, fullwidth) => {
    toggle.setAttribute('aria-expanded', 'true');
    toggleParent.classList.toggle('is-selected');
    fullwidth.classList.toggle('is-hidden');
    // Make fullwidth card keyboard focusable.
    fullwidth.setAttribute('tabIndex', '0');
};

const closeQuickView = (toggle, toggleParent, fullwidth) => {
    toggle.setAttribute('aria-expanded', 'false');
    toggleParent.classList.toggle('is-selected');
    fullwidth.classList.toggle('is-hidden');
    fullwidth.removeAttribute('tabIndex');
};

quickViewButtons.forEach(quickView =>{
    //Add appropriate ARIA attributes for "toggle" behaviour.
    fullwidth = quickView.parentElement.nextElementSibling;
    quickView.setAttribute('aria-expanded', 'false');
    quickView.setAttribute('aria-controls', fullwidth.id);

    quickView.addEventListener('click', (e) => {
        toggle = e.target;
        toggleParent = toggle.parentElement;
        fullwidth = toggleParent.nextElementSibling;
              
        if (toggle.getAttribute('aria-expanded') === 'false'){
            //Do we have another fullwidth card already open? If so, close it. 
            fullwidthCards.forEach(fullwidthOpen => {
                if (!fullwidthOpen.classList.contains('is-hidden')){
                    toggleParentOpen = fullwidthOpen.previousElementSibling;
                    toggleOpen = toggleParentOpen.querySelector('[data-quick-view]');

                    closeQuickView(toggleOpen, toggleParentOpen, fullwidthOpen);
                }
            });
            openQuickView(toggle, toggleParent, fullwidth);
        } else {
            closeQuickView(toggle, toggleParent, fullwidth);
        }
    });
});

closeButtons.forEach(close =>{
    close.addEventListener("click", (e) =>{
        fullwidth = e.target.parentElement;
        toggleParent = e.target.parentElement.previousElementSibling;
        toggle = toggleParent.querySelector("[data-quick-view]");
        
        closeQuickView(toggle, toggleParent, fullwidth);
        toggle.focus();//Return keyboard focus to "toggle" button.
    }); 
});


//***************Timeline Animation******************
var $element=$('.each-event, .title, .fom-btn');
    var $window = $(window);
    $window.on('scroll resize', check_for_fade);
    $(window).trigger('scroll');
    function check_for_fade(){
        var window_height = $window.height()
        $.each($element, function (event){
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_offset = $element.offset().top;
            space = window_height - (element_height + element_offset - $(window).scrollTop());
            if(space < 0){
                $element.addClass("non-focus");
            }else{
                $element.removeClass("non-focus");
            }
        });
    };
//***************Timeline Find Out More Button******************

jobbtn.addEventListener("click", showHide);

function showHide(){
    var x = document.getElementById("lgfl");
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}