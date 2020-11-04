const flightpath = {
    curviness: 1.25,
    autoRotate: true,
    values: [{
        x: 0,
        y: 10
    }, {
        x: 1000,
        y: 10
    }]
};

const tween = new TimelineLite({
    onUpdate: updatePercentage1

});
tween.to('#lala', 1, {
    strokeDasharray: 0,
    strokeDashoffset: 0
});
tween.add(
    TweenLite.to('.papperplane', 1, {
        bezier: flightpath,
        ease: Power1.easeInOut
    })
).add(
    TweenLite.to('#lala', 1, {
        strokeDasharray: 0,
        strokeDashoffset: 0
    }))

const controller1 = new ScrollMagic.Controller();
const Scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 1000,
        triggerHook: 0
    })
    .setTween(tween)
    .setPin('.animation')
    .addTo(controller1);

function updatePercentage1() {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    tween.progress();
    console.log(tween.progress());
}