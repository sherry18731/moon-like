// $(window).on("scroll", function() {
//     var yPos = $(this).scrollTop(),
//         yPer = (yPos / 120);
  
//         if (yPer > 1) {
//            yPer = 1;
//         }
//   });

//  const header = $("header"),
//     headerHeight = header.height(),
//     logo = $(".logo"),
//     logoHeight = logo.height();

//     $(window).on("scroll", function() {
//        // Rest of our code
//     });

// const logoPos = ( -1*(yPer * 50) + 50),
// logoSize = ((headerHeight * yPer) - (logoHeight * yPer) + logoHeight),
// headerPos = ((yPer * headerHeight) - headerHeight);

// logo.css({
//     top: logoPos + "%",
//     left: logoPos + "%",
//     transform: "translate3d(-" + logoPos + "%,-" + logoPos + "%,0)",
//     height: logoSize
//   });
  
//   header.css({
//     top: headerPos,
//     opacity: yPer
//   });