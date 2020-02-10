// const onload = () => {
//     const $allDivs = $('div');
//     const $firstDiv = $('div').first();

//     for (let i = 0; i < 16; i++) {
//         // Write the code to create 16 divs and give each a random background color
//         let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        
//         const $newDiv = $('<div></div>').css("background-color",randomColor);
//         $('section').append($newDiv)
//     }

//     window.setInterval(function(){

        // let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
        
        // $('div').css({
        //   'background-color' : randomColor,
        // });
    
    //   }, 2000);





    
    // $('div').each(function(index) {
    //     setInterval(() => {
    //         // const $newDiv = $('<div></div>').text("Ma new div");
    //         // $('section').append($newDiv);
    //         $(this).fadeOut();
    //     }, (500 * index));
    // })

//     $firstDiv.css("background-color", "red");

//     // $allDivs.each(function() {
//     //     $(this).click(function() {
//     //         $(this).css('background-color', 'green');
//     //          $( this ).addClass( "green" );
//     //     })
//     $allDivs.click(function() {
//         $(this).addClass('green');
//         $(this).text($(this).index());
//     })

// }

// $(onload);

const onload = () => {
    const myArray = ["Good!", "Bad", "Aleluia"];
    $generate = $('button');
    $generate.click(function() {
                const randomA = Math.floor(Math.random() * myArray.length);
                $("p").text(myArray[randomA]);
                console.log($generate);
            })

    //   $(function(){
         
    //       $("button").click(function(){
    //           $("").hide();
    //       });
    //   });

            
}
 $(onload);