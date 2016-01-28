# Imfine Web Agency

We are developping an ultra lightweight Javascript library for I'm Fine.

* js/imfine-lib.js: contains the basic Javascript functionality:
  * toggleClass(selector, className): toggle the class on the DOMElement provided
  * modal(modalId): show a modal specified by the DOMElement's id attribute

## Modals

To declare a modal, simply use the block of HTML. The modal will be initalized at load.
`
<a href="#" data-type="modal" data-target="#mymodal">trigger modal</a>

<section class="modal" id="mymodal" tabindex="-1" role="dialog">

  <div class="modal-dialog">
  
    <header class="modal-header">
      
      <h2>Modal title</h2>
    
    </header>
    
    <main class="modal-main">
    
      <p>Content</p>
    
    </main>
    
    <footer class="modal-footer">
      
      <a href="#" data-dismiss="modal">Close modal</a>
    
    </footer>
  
  </div>

</section>
`