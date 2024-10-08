$(document).ready(function() {
    // Check if user is logged in
    var username = localStorage.getItem('username');
    if (username) {
        $('#username').text(username);
    } else {
        $('#username').text('guest');
    }

    $('#userIcon').on('click', function() {
        window.location.href = 'login.html'; // Redirect to login page
    });

    $('#hamburger-menu-1').click(function () {
                $('#collapse-1').toggleClass('active');
    });

    $('#hamburger-menu-2').click(function () {
                $('#collapse-2').toggle();
    });


    // jQuery for sticky navbar effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    // Handle card click
    $('.item').on('click', function() {
        // Remove 'clicked' class from all items
        $('.item').removeClass('clicked');
        $('.item .shop-now').hide(); // Hide 'Shop Now' for all items

        // Add 'clicked' class only to the clicked item
        $(this).addClass('clicked');
        $(this).find('.shop-now').show(); // Show 'Shop Now' for clicked item
    });

    // Hover effect for images
    $('.item').hover(
        function () {
            // On mouse enter, zoom the image
            $(this).find('img').css({
                'transform': 'scale(1.2)'
            });
        },
        function () {
            // On mouse leave, if not clicked, reset the zoom
            if (!$(this).hasClass('clicked')) {
                $(this).find('img').css({
                    'transform': 'scale(1)'
                });
            }
        }
    );
   
   function showCategory(category) {
     if (category === 'All-products') {
       $('.clothe > div').show(); // Show all categories
       $('.shoe > div').show();
       $('.accessorie > div').show();
       $('.belt > div').show();
       $('.watch > div').show();
     } else if(category === 'Clothes') {
       $('.clothe > div').show(); // Show all categories
       $('.accessorie > div').hide();
       $('.belt > div').hide();
       $('.shoe > div').hide();
       $('.watch > div').hide(); // Hide all categories
     }else if (category === 'Accessories') {
       $('.clothe > div').hide();
       $('.accessorie > div').show();
       $('.belt > div').hide();
       $('.shoe > div').hide();
       $('.watch > div').hide(); // Hide all categories
     }else if (category === 'Belts') {
       $('.clothe > div').hide();
       $('.accessorie > div').hide();
       $('.belt > div').show();0
       $('.shoe > div').hide();
       $('.watch > div').hide();// Hide all categories
     }else if (category === 'Shoes') {
       $('.clothe > div').hide();
       $('.accessorie > div').hide();
       $('.belt > div').hide();
       $('.shoe > div').show();
       $('.watch > div').hide(); // Hide all categories
     }else if (category === 'Watches') {
       $('.clothe > div').hide(); // Hide all categories
       $('.accessorie > div').hide();
       $('.belt > div').hide();
       $('.shoe > div').hide();
       $('.watch > div').show();
     }else{
       $('.' + category).show(); // Show the selected category
     }  
   }
   
    // Click event for each link
            $('.navbr a').click(function(event) {
                event.preventDefault();  // Prevent default link behavior
                // Determine the category based on the clicked link
                const category = $(this).attr('class').split(' ')[0];

                // Show the correct category
                showCategory(category);
            });

            // Initially show all products
            showCategory('All-products');
            
            
            $('form').on('submit', function(e) {  
   e.preventDefault();  
   // Handle newsletter subscription  
  });  
  

  // Quick View modal pop-up
            $('.js-show-modal1').on('click', function(event) {
                event.preventDefault();

                // Fetch product details
                var productImage = $(this).closest('.block2').find('img').attr('src');
                var productName = $(this).closest('.block2-txt').find('.product_name').text();
                var productPrice = $(this).closest('.block2-txt').find('.stext-105').text();

                // Fill modal with product details
                $('#quickViewModal .modal-body').html(`
                    <img src="${productImage}" alt="${productName}" style="width:100%;">
                    <h2>${productName}</h2>
                    <p>${productPrice}</p>
                `);

                // Show modal
                $('#quickViewModal').fadeIn();
            });

            // Close modal on close button click
            $('.close').on('click', function() {
                $('#quickViewModal').fadeOut();
            });

            // Add to Wishlist effect
            $('.js-addwish-b2').on('click', function() {
                var heartIcon = $(this).find('.icon-heart1');
                var heartFilledIcon = $(this).find('.icon-heart2');

                if (heartIcon.is(":visible")) {
                    heartIcon.hide();
                    heartFilledIcon.show();
                } else {
                    heartFilledIcon.hide();
                    heartIcon.show();
                }

                // Optionally send AJAX request to add/remove wishlist item
                // $.post("wishlist_config.php", {wish_product: $(this).closest('form').find('input[name="wish_product"]').val()});

                return false; // prevent form submission
            });

            
            
});