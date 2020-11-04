var tl = new TimelineMax({
    onUpdate: updatePercentage
});

const controller = new ScrollMagic.Controller();


tl.from('#coffee', .5, {
    y: 200,
    opacity: 0
});
tl.from('#coffeetext', .5, {
    x: 200,
    opacity: 0
});
const scene = new ScrollMagic.Scene({
        triggerElement: ".coffeesection",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setPin(".coffeesection")
    .setTween(tl)
    .addTo(controller);







function updatePercentage() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tl.progress();
    console.log(tl.progress());
}