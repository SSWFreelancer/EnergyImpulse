document.addEventListener('DOMContentLoaded', function(event) {	

	var burger = document.querySelector('.header__burger');
	var body = document.querySelector('body');
	var menu = document.querySelector('.menu');
	var menuLink = document.querySelectorAll('.menu__link')
	if(burger){
    burger.addEventListener('click', function(event) {
    		burger.classList.toggle('active');
    		menu.classList.toggle('active');
    		body.classList.toggle('lock');
    });
	}
	if(menuLink){
		menuLink.forEach(function(menuLink) {
		    menuLink.addEventListener('click', function(event) {
		    		burger.classList.remove('active');
		    		menu.classList.remove('active');
		    		body.classList.remove('lock');
		    });
		});
	}

	var catalog = document.querySelector('.header__catalog>p');
	if(catalog){
	    catalog.addEventListener('click', function(event) {
	    		catalog.classList.toggle('active');
	    		catalog.nextElementSibling.classList.toggle('active');
	    });
	}
	var catalogWrapper = document.querySelector('.header__catalog');
	document.addEventListener('click', function(event) {
	  if (!catalogWrapper.contains(event.target)) {
    		catalog.classList.remove('active');
    		catalog.nextElementSibling.classList.remove('active');
	  }	  
	});

  if(document.querySelector('.main__slider')){
      new Swiper('.main__slider', {
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        loop:true,
		  navigation: {
		    nextEl: '.main__next',
		    prevEl: '.main__prev',
		  },
		  pagination: {
		  	 clickable:true,
		    el: '.main__pagination',
		  },

      });
   }

  if(document.querySelector('.sales__content')){
		document.querySelectorAll('.sales__content').forEach(function(wrapper) {
		  var slider = wrapper.querySelector('.sales__slider');
		  if(slider){
			  var swiper = new Swiper(slider, {
	        speed: 600,
	        spaceBetween: 10,
	        slidesPerView: 4,
			    navigation: {
			      prevEl: wrapper.querySelector('.sales__prev'),
			      nextEl: wrapper.querySelector('.sales__next'),
			    },
			    breakpoints: {
			        1301: {
			        	loop:false,
			        	slidesPerView: 4,
			        },
			        1101: {
			        	loop:false,
			        	slidesPerView: 3,
			        },
			        501: {
			        	loop:false,
			        	slidesPerView: 2,
			        },
			        0: {
			        	loop:true,
			        	slidesPerView: 1,	        		
			       },		                
			    }
			  });		  	
		  }
		});  	
  }
  if(document.querySelector('.novelty__container')){
		document.querySelectorAll('.novelty__container').forEach(function(wrapper) {
		  var slider = wrapper.querySelector('.novelty__slider');
		  if(slider){
			  var swiper = new Swiper(slider, {
	        speed: 600,
	        spaceBetween: 10,
	        slidesPerView: 5,
			    navigation: {
			      prevEl: wrapper.querySelector('.novelty__prev'),
			      nextEl: wrapper.querySelector('.novelty__next'),
			    },
			    breakpoints: {
			        1301: {
			        	loop:false,
			        	slidesPerView: 5,
			        },
			        1101: {
			        	loop:false,
			        	slidesPerView: 4,
			        },
			        992: {
			        	loop:false,
			        	slidesPerView: 3,
			        },
			        501: {
			        	loop:false,
			        	slidesPerView: 2,
			        },
			        0: {
			        	loop:true,
			        	slidesPerView: 1,	        		
			       },		                
			    }
			  });		  	
		  }
		});  	
  }
	var sales__cart = document.querySelectorAll('.sales__cart>button');
	if(sales__cart){
		sales__cart.forEach(function(sales__cart) {
		    sales__cart.addEventListener('click', function(event) {
		    	event.preventDefault();
		    	sales__cart.parentNode.classList.add('open');
		    });
		});
	}

	var decrementButtons = document.querySelectorAll('.decrement');
	var incrementButtons = document.querySelectorAll('.increment');
	decrementButtons.forEach(function (button) {
	    button.addEventListener('click', function (event) {
				event.preventDefault();
				decreaseQuantity(button);
	    });
	});
	incrementButtons.forEach(function (button) {
	    button.addEventListener('click', function (event) {
				event.preventDefault();
				increaseQuantity(button);
	    });
	});
	function decreaseQuantity(clickedButton) {
	    var parentDiv = clickedButton.closest('.quantity');
	    var quantityInput = parentDiv.querySelector('.quantityInput');
	    var currentValue = parseInt(quantityInput.value, 10);
	    if (!isNaN(currentValue) && currentValue > 1) {
	        quantityInput.value = currentValue - 1;
	    }
	}
	function increaseQuantity(clickedButton) {
	    var parentDiv = clickedButton.closest('.quantity');
	    var quantityInput = parentDiv.querySelector('.quantityInput');

	    var currentValue = parseInt(quantityInput.value, 10);
	    if (!isNaN(currentValue)) {
	        quantityInput.value = currentValue + 1;
	    }
	}

	var sort = document.querySelector('.categories__sort>p');
	var sortWrapper = document.querySelector('.categories__sort');
	if(sort){
	    sort.addEventListener('click', function(event) {
	    	sort.parentNode.classList.toggle('active');
	    });
			document.addEventListener('click', function(event) {
			  if (!sortWrapper.contains(event.target)) {
		    	sortWrapper.classList.remove('active');
			  }	  
			});
	}

  var displayButtons = document.querySelectorAll('.categories__disptype input');
  var categoriesCards = document.querySelector('.categories__cards');
  function handleDisplayChange() {
      displayButtons.forEach(function (button) {
          if (button.checked && button.hasAttribute('data-tolist')) {
              categoriesCards.classList.toggle('list', true);
          } else {
              categoriesCards.classList.remove('list');
          }
      });
  }
  displayButtons.forEach(function (button) {
      button.addEventListener('change', handleDisplayChange);
  });

  var cartDisplayButtons = document.querySelectorAll('.cart__disptype input');
  var cartCards = document.querySelector('.cart__cards');
  function handleCartDisplayChange() {
      cartDisplayButtons.forEach(function (cartDisplayButtons) {
          if (cartDisplayButtons.checked && cartDisplayButtons.hasAttribute('data-tolist')) {
              cartCards.classList.toggle('list', true);
          } else {
              cartCards.classList.remove('list');
          }
      });
  }
  cartDisplayButtons.forEach(function (cartButton) {
      cartButton.addEventListener('change', handleCartDisplayChange);
  });

  var cartCheckAll = document.querySelectorAll('.cart__checkall input');
  if(cartCheckAll){
	  cartCheckAll.forEach(function (cartCheckAll) {
	      cartCheckAll.addEventListener('change', function(event){
	      	var cartCardsToCheck = cartCheckAll.closest('.cart').querySelectorAll('.cart__card-check input');
	      	if(cartCheckAll.checked && cartCardsToCheck){
	      		cartCardsToCheck.forEach(function (cartCardsToCheck) {
	      			cartCardsToCheck.checked = true;
	      		});
	      	}else{
	      		cartCardsToCheck.forEach(function (cartCardsToCheck) {
	      			cartCardsToCheck.checked = false;
	      		});	      		
	      	}
	      });
	  });  	
  }

	var tabsItems = document.querySelectorAll('[data-tab]');
	if(tabsItems){
		tabsItems.forEach(function(tabsItem) {
		    tabsItem.addEventListener('click', function(event) {
				    event.preventDefault();
				    var tabParent = this.closest('.tabs');
				    var tabActive = tabParent.querySelector('[data-tab].active');
				    var contentActive = tabParent.querySelectorAll('[data-content].target');
				    if (tabActive) {
				        tabActive.classList.remove('active');
				    }
						contentActive.forEach(function(contentActive){
						  if (contentActive) {
								contentActive.classList.remove('target');
						  }	  
						});
				    this.classList.add('active');
				    const tabContent = this.getAttribute("data-tab");
				    const tabId = tabParent.querySelectorAll(`[data-content="${tabContent}"]`);
						tabId.forEach(function(tabId){
						  if (tabId) {
								tabId.classList.add('target');
						  }	  
						});
		    });
		});
	}

  if (document.querySelector("#uislider") !== null) {
    const slider = document.getElementById("uislider");
		const leftValueInput = slider.parentNode.querySelector('.filter__categories-fields input:first-child');
		const rightValueInput = slider.parentNode.querySelector('.filter__categories-fields input:last-child');
		const min = parseInt(slider.getAttribute("data-min"), 10);
		const start = parseInt(slider.getAttribute("data-start"), 10);
		const max = parseInt(slider.getAttribute("data-max"), 10);
		const end = parseInt(slider.getAttribute("data-end"), 10);

		const gcd = function(a, b) {
		    a = (a === 0) ? 5 : a;
		    return b === 0 ? a : gcd(b, a % b);
		};
		
		const step = gcd(start, end);
	   noUiSlider.create(slider, {
	      start: [start, end],
	      connect: true,
	      padding: [0,0],
	      step: step,
	      range: {
	          'min': [min],
	          'max': [max]
	      },
	    });
	    if (leftValueInput && rightValueInput) {
			  slider.noUiSlider.on('update', function (values, handle) {
			    if (handle) {
			    	rightValueInput.value = parseFloat(values[handle]);
			      
			    } else {
			      leftValueInput.value = parseFloat(values[handle]);
			    }
			  });
		    leftValueInput.addEventListener('change', function() {
		      slider.noUiSlider.set([parseFloat(this.value), null]);
		    });
		    rightValueInput.addEventListener('change', function() {
		      slider.noUiSlider.set([null, parseFloat(this.value)]);
		    });
			}
	  }

	var filterMore = document.querySelectorAll('.filter__more');
	filterMore.forEach(function (filterMore) {
	    filterMore.addEventListener('click', function (event) {
				filterMore.parentNode.classList.toggle('show');
	    });
	});
	var ordersMore = document.querySelectorAll('.cabinet__more');
	ordersMore.forEach(function (ordersMore) {
	    ordersMore.addEventListener('click', function (event) {
				ordersMore.previousElementSibling.classList.toggle('show');
	    });
	});
	var cabinetTop = document.querySelectorAll('.cabinet__blockname');
	cabinetTop.forEach(function (cabinetTop) {
	    cabinetTop.addEventListener('click', function (event) {
	    	if(cabinetTop.parentNode.nextElementSibling){
	    		cabinetTop.classList.toggle('toggle');
	    		cabinetTop.parentNode.nextElementSibling.classList.toggle('toggle');
	    	}
	    });
	});
  const popupButton = document.querySelectorAll("[data-topopup]");
  if(popupButton){
	  popupButton.forEach(function (popupButton) {
	    popupButton.addEventListener("click", function (event) {
	    	event.preventDefault();
	      const dataPopup = this.getAttribute("data-topopup");
	      const dataClassPopup = document.querySelector(`${dataPopup}`);
	      if (dataClassPopup !== null) {
	        dataClassPopup.classList.add("open");
	        body.classList.add('popuplock');	
	      }

	    });
	  });  	
  }
	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose) {
		    popupClose.addEventListener('click', function(event) {
		    		body.classList.remove('popuplock');	
		    		popupClose.closest('.popup').classList.remove('open');
		    });
		});		
	}
	var catalogMore = document.querySelectorAll('.catalog__more');
	if(catalogMore){
		catalogMore.forEach(function(catalogMore) {
		    catalogMore.addEventListener('click', function(event) {
		    		event.preventDefault();
		    		catalogMore.classList.toggle('hide');	
		    		catalogMore.previousElementSibling.classList.toggle('hide');
		    });
		});		
	}
	var catalogCardMore = document.querySelectorAll('.catalog__body>a');
	if(catalogCardMore){
		catalogCardMore.forEach(function(catalogCardMore) {
		    catalogCardMore.addEventListener('click', function(event) {
		    		event.preventDefault();
		    		catalogCardMore.closest('.catalog__card').classList.toggle('open');	
		    		
		    });
		});		
	}
	var cabinetFile = document.querySelectorAll(".cabinet__form-input input[type='file']");
	cabinetFile.forEach(function (cabinetFile) {
	    cabinetFile.addEventListener('change', function (event) {
	    	var cabinetFileLabel = cabinetFile.nextElementSibling.querySelector('span');
				if (cabinetFile.files.length > 0 && cabinetFileLabel) {
					cabinetFileLabel.innerHTML = cabinetFile.files[0].name;
				}
	    });
	});
	var cabinetLinks = document.querySelectorAll(".cabinet__links li span");
	cabinetLinks.forEach(function (cabinetLinks) {
	    cabinetLinks.addEventListener('click', function (event) {
	    	cabinetLinks.parentNode.classList.toggle('active');
	    });
	});
	var invoiceToggle = document.querySelectorAll(".cabinet__invoice-left>p");
	invoiceToggle.forEach(function (invoiceToggle) {
	    invoiceToggle.addEventListener('click', function (event) {
	    	if(invoiceToggle.closest('.cabinet__invoice')){
	    		invoiceToggle.closest('.cabinet__invoice').classList.toggle('active');
	    	}
	    	
	    });
	});

});
