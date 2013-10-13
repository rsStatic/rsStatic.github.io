var stage;
var fontstyle = "19pt Calibri";

function init() {
    stage = new createjs.Stage("canvas");
	
	w = stage.canvas.width;
	h = stage.canvas.height;

    background = new createjs.Shape();
    background.graphics.beginFill("#111").drawRect(0, 0, w, h);
    background.alpha = 1;
	background.addEventListener("click", playKnocking);
    stage.addChild(background);

    backgroundtransition = new createjs.Tween.get(background)
        .wait(500)
        .to({
        alpha: 0.85
    }, 2000)
        .wait(500)
        .to({
        alpha: 1
    }, 2000);
    backgroundtransition.loop = true;
	
	loading = new createjs.Text("Loading additional components... Hold on!", "2em Arial", "#fff");
	var loadingW = loading.getMeasuredWidth();
	var loadingH = loading.getMeasuredHeight();
    loading.x = (w/2)-loading.getMeasuredWidth()/2;
    loading.y = (h/2)-loading.getMeasuredHeight()/2;
    stage.addChild(loading);
	
	manifest = [
		{id:"intro", src:"sounds/intro.mp3|sounds/intro.ogg"},
		{id:"knock", src:"sounds/knock.mp3"},
		{id:"master", src:"sounds/master.mp3"},
		{id:"noiseSprite", src:"images/noise_sheet.png"}
	];

    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", handleComplete);
	queue.addEventListener("progress", queueProgress);
	queue.loadManifest(manifest);
	stage.update();
}

function playKnocking(event) {
	var knock = createjs.Sound.play("knock");
	knock.volume = 1;
}

function queueProgress(event) {
	loading.text = "Loading " + (queue.progress*100|0) + "%";
	loading.x = (w/2)-(loading.getMeasuredWidth())+(loading.getMeasuredWidth()/2)-25;
    loading.y = (h/2)-(loading.getMeasuredHeight()/2);
	stage.update();
}

function handleComplete(event) {
	stage.removeChild(loading);
    intromusic = createjs.Sound.play("intro");
    intromusic.volume = 0.7;
	intromusic.addEventListener("complete", replayIntro);
	
	var data = new createjs.SpriteSheet({
		"images": [queue.getResult("noiseSprite")],
		"frames": {"regX": 0, "height": 695, "count": 25, "regY": 0, "width": 1238},
		// define two animations, run (loops, 1.5x speed) and jump (returns to run):
		"animations": {"default": [0, 25, "run", 1.5]}
	});
	noiseBackground = new createjs.Sprite(data, "run");
	noiseBackground.setTransform(0, 0, 0.8, 0.8);
	noiseBackground.framerate = 1;
	blurFilter = new createjs.BlurFilter(4,4,0);
	noiseBackground.filters = [blurFilter];
	bounds = blurFilter.getBounds();
	noiseBackground.cache(bounds.x, bounds.y, 1000+bounds.width, 1000+bounds.height);
	stage.addChild(noiseBackground);

	startbuttonborder = new createjs.Shape();
    startbuttonborder.graphics.beginFill("#fff").drawRect(248, 428, 179, 44);
    stage.addChild(startbuttonborder);

    startbutton = new createjs.Shape();
    startbutton.graphics.beginFill("#050505").drawRect(250, 430, 175, 40);
    startbutton.addEventListener("click", startbuttonClick);
	startbutton.addEventListener("mouseover", startbuttonMouseOver);
    stage.addChild(startbutton);

    startbuttontext = new createjs.Text("START", "19pt Calibri", "#fff");
    startbuttontext.x = 305;
    startbuttontext.y = 433;
	blurFilter = new createjs.BlurFilter(1,4,0);
	startbuttontext.filters = [blurFilter];
	bounds = blurFilter.getBounds();
	startbuttontext.cache(bounds.x, bounds.y, 150+bounds.width, 80+bounds.height);
    stage.addChild(startbuttontext);

    introtext = new createjs.Text("An adventure awaits...", fontstyle, "#fff");
    introtext.x = 50;
    introtext.y = 50;
	blurFilter = new createjs.BlurFilter(2,3,0);
	introtext.filters = [blurFilter];
	bounds = blurFilter.getBounds();
	introtext.cache(bounds.x, bounds.y, 500+bounds.width, 80+bounds.height);
    stage.addChild(introtext);

    introtext2 = new createjs.Text("Prepare for a game that will scare you to death", fontstyle, "#fff");
    introtext2.x = 70;
    introtext2.y = 75;
	blurFilter = new createjs.BlurFilter(2,3,0);
	introtext2.filters = [blurFilter];
	bounds = blurFilter.getBounds();
	introtext2.cache(bounds.x, bounds.y, 500+bounds.width, 80+bounds.height);
    stage.addChild(introtext2);

    introtext3 = new createjs.Text("And will                   you forever", fontstyle, "#fff");
    introtext3.x = 90;
    introtext3.y = 100;
	blurFilter = new createjs.BlurFilter(3,5,0);
	introtext3.filters = [blurFilter];
	bounds = blurFilter.getBounds();
	introtext3.cache(bounds.x, bounds.y, 500+bounds.width, 80+bounds.height);
    stage.addChild(introtext3);

    haunt = new createjs.Text("haunt", "35px Consolas bold", "#900");
    haunt.x = 186;
    haunt.y = 95;
	blurFilter = new createjs.BlurFilter(1,4,100);
	haunt.filters = [blurFilter];
	bounds = blurFilter.getBounds();
	haunt.cache(bounds.x, bounds.y, 150+bounds.width, 80+bounds.height);
    stage.addChild(haunt);
	
	var haunttransition = new createjs.Tween.get(haunt)
        .to({x:186,y:95}, 2000)
        .to({x:180,y:95}, 50);
    haunttransition.loop = true;

    createjs.Ticker.addEventListener("tick", handleTick);
}

function replayIntro() {
	intromusic = createjs.Sound.play("intro");
    intromusic.volume = 0.7;
	intromusic.addEventListener("complete", replayIntro);
}

function replayMaster() {
	intromusic = createjs.Sound.play("master");
    intromusic.volume = 1;
	intromusic.addEventListener("complete", replayMaster);
}

function handleTick(event) {
	noiseBackground.updateCache();
    stage.update();
}

function startbuttonClick(event) {
	console.log("mouseclick");
    console.log("you clicked me, removing intro music");
    createjs.Sound.removeSound("intro");
	createjs.Sound.removeSound("knock");
	stage.removeChild(startbutton);
	stage.removeChild(startbuttonborder);
	stage.removeChild(startbuttontext);
	master = createjs.Sound.play("master");
	master.volume = 1;
	stage.update();
}

function startbuttonMouseOver(event) {
	console.log("mouseover");
}

init();