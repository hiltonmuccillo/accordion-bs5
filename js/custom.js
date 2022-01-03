// Open Sidebar
(function () {
    document.querySelector("#openNav").addEventListener('click', function() {
        document.querySelector(".openbtn").style.cssText = "opacity: 0";
        document.querySelector("#mySidebar").style.cssText = "width: 30%";
        document.querySelector("#main").style.cssText = "margin-left: 0";                                
        document.querySelector("#closeNav").style.cssText = "opacity: 1; transition: 2s";                       
    })
})();

// Close Sidebar
function recolheBarraLateral () {
    document.querySelector("#mySidebar").style.cssText = "width: 0";
    document.querySelector("#main").style.cssText = "margin-left: 0";
    document.querySelector(".openbtn").style.cssText = "opacity: 1";
    document.querySelector("#closeNav").style.cssText = "opacity: 0; transition: 0.3s";    
}        

// Close Accordion
(function () { 
    var myCollapseOne = document.getElementById('collapseOne');
    var myCollapseTwo = document.getElementById('collapseTwo');
    var myCollapseThree = document.getElementById('collapseThree');
    var myCollapseFour = document.getElementById('collapseFour');
    var myCollapseFive = document.getElementById('collapseFive');            
    var btnFecha = document.querySelector("#closeNav");                      
    btnFecha.addEventListener('click', function() {                                              
        recolheBarraLateral();
        
        // Collapse One
        var bsCollapseOne = new bootstrap.Collapse(myCollapseOne, {
        toggle: false 
        })
        bsCollapseOne.hide()
        
        // Collapse Two
        var bsCollapseTwo = new bootstrap.Collapse(myCollapseTwo, {
        toggle: false 
        })
        bsCollapseTwo.hide()

        // Collapse Three
        var bsCollapseThree = new bootstrap.Collapse(myCollapseThree, {
        toggle: false 
        })
        bsCollapseThree.hide()

        // Collapse Four
        var bsCollapseFour = new bootstrap.Collapse(myCollapseFour, {
        toggle: false 
        })
        bsCollapseFour.hide()

        // Collapse Five
        var bsCollapseFive = new bootstrap.Collapse(myCollapseFive, {
        toggle: false 
        })
        bsCollapseFive.hide()
    })                                  
})();