(function(window) {

  'use strict';

  function define_imfine() {

    var imfine = {},
        name = "ImFine";

    imfine.version = function() {

      return "ImFine JS library v0.1";
    }

    imfine.toggleClass = function(selector, className) {

      var selection = document.querySelectorAll(selector);

      if (selection.length > 0) {

        for (var i = 0; i < selection.length; i++) {

          var elt = selection[i];
          elt.classList.toggle(className);
        }
      }
    }

    imfine.modal = function(modalId) {

      if (modalId.length > 0) {

        var modal = document.querySelector(modalId);

        if (modal != null) {

          var dismissModal = function(modalElement) {
            modal.style.opacity = 0;
            modal.style.zIndex = -99999;
          };

          // Show modal
          modal.style.opacity = 1;
          modal.style.zIndex = 99999;

          // Setup the dismiss buttons
          var dismissButtons = modal.querySelectorAll('a[data-dismiss], button[data-dismiss]');

          if (dismissButtons.length > 0) {

            for (var i = 0; i < dismissButtons.length; i++) {

              var button = dismissButtons[i];
              button.addEventListener('click', function(event) { 

                dismissModal(modal);
              });
            }
          }

          // Setup modal close on click outside
          modal.addEventListener('click', function(event) {
            
            // Close if we clicked outside the modal dialog
            var modalDialog = modal.querySelector('.modal-dialog');
            
            if (modalDialog != null) {
              
              modal.addEventListener('click', function(event) {
                
                if (event.target != modalDialog) {
                  
                  dismissModal();
                }
              });
            }
          });
        }
      }
    }

    return imfine;
  }


  function init() {
    /* DOM loaded initialisation */
    initModals();
  }

  function initModals() {
    /* Initialize modals */
    var modalTriggers = document.querySelectorAll('a[data-type="modal"], button[data-type="modal"]');

    if (modalTriggers.length > 0) {

      for (var i = 0; i < modalTriggers.length; i++) {

        var modalTrigger = modalTriggers[i];
        modalTrigger.addEventListener('click', function(event) { imfine.modal(event.target.dataset.target) });
      }
    }
  }

  if (typeof(imfine) === 'undefined') {

    window.imfine = define_imfine();
  }
  else {

    console.log("imfine already defined");
  }

  /* Do initialization when DOM is loaded */
  document.addEventListener('DOMContentLoaded', function(event) { init() });

})(window);