$(function(){

        $("#typed").typed({
            strings: ["Typed.js is a jQuery plugin.", "It types out sentences.", "And then deletes them.", "Try it out!"],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });
