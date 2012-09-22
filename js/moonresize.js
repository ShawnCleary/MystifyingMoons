
onload = init;

function init(){
	var CurrentInfoBox = 1;
	MoonFact = "None";
	RefreshScreen();

			
		
////////////Planet listeners//////////

document.getElementById("Ganymede").onclick = GanymedeFacts;
document.getElementById("Titan").onclick = TitanFacts;
document.getElementById("Callisto").onclick = CallistoFacts;
document.getElementById("Io").onclick = IoFacts;
document.getElementById("Europa").onclick = EuropaFacts;
document.getElementById("Triton").onclick = TritonFacts;
document.getElementById("Enceladus").onclick = EnceladusFacts;
document.getElementById("Miranda").onclick = MirandaFacts;
document.getElementById("Nereid").onclick = NereidFacts;
document.getElementById("Mimas").onclick = MimasFacts;
document.getElementById('Right').onclick = Right;
document.getElementById('Left').onclick = Left;
document.getElementById('Bottom').onclick = Back;


////////ON RESIZE//////////

	window.onresize = function(){
		RefreshScreen();
	}
}

function Back(){
	MoonFact = "None";
	var WindowHeight = $(window).height(); // New height
	var WindowWidth = $(window).width(); // New width
	var SizeDown = .7;
	if(WindowWidth <= 800){
		SizeDown = 0.4571428571428571;}
	else if(WindowWidth >= 1500){
		SizeDown = 0.8571428571428571;}
	else if(WindowWidth > 800 && WindowWidth < 1500){
		SizeDown = (WindowWidth-800)/700;
		SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		var MimasInfoBox = DisplayMoon+DisplayInfoBox;
		var WindowHeight2 = (WindowHeight*-.5)-350;
	document.getElementById('Left').style.display = "none";
	document.getElementById('Right').style.display = "none";
	document.getElementById('Bottom').style.display = "none";
	document.getElementById('GanymedeInfoBox').style.opacity = 0;
	document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ DisplayInfoBox +'px) translateY('+WindowHeight2+'px) scale(0) rotate(0deg)';//3,273 mi #1	
	document.getElementById('TitanInfoBox').style.opacity = 0;
	document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ DisplayInfoBox +'px) translateY('+WindowHeight2+'px) scale(0) rotate(0deg)';//3,273 mi #1	
	document.getElementById('CallistoInfoBox').style.opacity = 0;
	document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ DisplayInfoBox +'px) translateY('+WindowHeight2+'px) scale(0) rotate(0deg)';//3,273 mi #1	
	document.getElementById('IoInfoBox').style.opacity = 0;
	document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ DisplayInfoBox +'px) translateY('+WindowHeight2+'px) scale(0) rotate(0deg)';//3,273 mi #1	
	document.getElementById('EuropaInfoBox').style.opacity = 0;
	document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ DisplayInfoBox +'px) translateY('+WindowHeight2+'px) scale(0) rotate(0deg)';//3,273 mi #1	
	document.getElementById('TritonInfoBox').style.display= 'none';
	document.getElementById('EnceladusInfoBox').style.display= 'none';
	document.getElementById('MirandaInfoBox').style.display= 'none';
	document.getElementById('NereidInfoBox').style.display= 'none';
	document.getElementById('MimasInfoBox').style.display= 'none';
	document.getElementById('title').style.display= 'block';
	RefreshScreen();
}

function Right(){
	if(MoonFact == "Ganymede"){
		MoonFact = "Titan";}
	else if(MoonFact == "Titan"){
		MoonFact = "Callisto";}
	else if(MoonFact == "Callisto"){
		MoonFact = "Io";}
	else if(MoonFact == "Io"){
		MoonFact = "Europa";}
	else if(MoonFact == "Europa"){
		MoonFact = "Triton";}
	else if(MoonFact == "Triton"){
		MoonFact = "Enceladus";}
	else if(MoonFact == "Enceladus"){
		MoonFact = "Miranda";}
	else if(MoonFact == "Miranda"){
		MoonFact = "Nereid";}
	else if(MoonFact == "Nereid"){
		MoonFact = "Mimas";}
	else if(MoonFact == "Mimas"){
		MoonFact = "Ganymede";}
		
		RefreshScreen();
	}
	
function Left(){
	if(MoonFact == "Ganymede"){
		MoonFact = "Mimas";}
	else if(MoonFact == "Titan"){
		MoonFact = "Ganymede";}
	else if(MoonFact == "Callisto"){
		MoonFact = "Titan"}
	else if(MoonFact == "Io"){
		MoonFact = "Callisto"}
	else if(MoonFact == "Europa"){
		MoonFact = "Io"}
	else if(MoonFact == "Triton"){
		MoonFact = "Europa";}
	else if(MoonFact == "Enceladus"){
		MoonFact = "Triton";}
	else if(MoonFact == "Miranda"){
		MoonFact = "Enceladus";}
	else if(MoonFact == "Nereid"){
		MoonFact = "Miranda";}
	else if(MoonFact == "Mimas"){
		MoonFact = "Nereid";}
		
		RefreshScreen();
	}


function GanymedeFacts(){
	MoonFact = "Ganymede";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";
	document.getElementById('GanymedeInfoBox').style.opacity = 1;

	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}
function TitanFacts(){
	MoonFact = "Titan";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";
	document.getElementById('GanymedeInfoBox').style.display = "block";

	document.getElementById('TitanInfoBox').style.opacity = 1;
	



	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}
function CallistoFacts(){
	MoonFact = "Callisto";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";

	document.getElementById('CallistoInfoBox').style.opacity = 1;

	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}
function IoFacts(){
	MoonFact = "Io";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";

	document.getElementById('IoInfoBox').style.opacity = 1;

	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}
function EuropaFacts(){
	MoonFact = "Europa";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";

	document.getElementById('EuropaInfoBox').style.opacity = 1;
	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}
function TritonFacts(){
	MoonFact = "Triton";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";
	document.getElementById('GanymedeInfoBox').style.display = "block";
	document.getElementById('TitanInfoBox').style.display = "block";
	document.getElementById('CallistoInfoBox').style.display = "block";
	document.getElementById('IoInfoBox').style.display= 'block';
	document.getElementById('EuropaInfoBox').style.display= 'block';
	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}
function EnceladusFacts(){
	MoonFact = "Enceladus";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";
	document.getElementById('GanymedeInfoBox').style.display = "block";
	document.getElementById('TitanInfoBox').style.display = "block";
	document.getElementById('CallistoInfoBox').style.display = "block";
	document.getElementById('IoInfoBox').style.display= 'block';
	document.getElementById('EuropaInfoBox').style.display= 'block';
	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}
function MirandaFacts(){
	MoonFact = "Miranda";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";
	document.getElementById('GanymedeInfoBox').style.display = "block";
	document.getElementById('TitanInfoBox').style.display = "block";
	document.getElementById('CallistoInfoBox').style.display = "block";
	document.getElementById('IoInfoBox').style.display= 'block';
	document.getElementById('EuropaInfoBox').style.display= 'block';
	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}
function NereidFacts(){
	MoonFact = "Nereid";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";
	document.getElementById('GanymedeInfoBox').style.display = "block";
	document.getElementById('TitanInfoBox').style.display = "block";
	document.getElementById('CallistoInfoBox').style.display = "block";
	document.getElementById('IoInfoBox').style.display= 'block';
	document.getElementById('EuropaInfoBox').style.display= 'block';
	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}
function MimasFacts(){
	MoonFact = "Mimas";
	document.getElementById('Left').style.display = "block";
	document.getElementById('Right').style.display = "block";
	document.getElementById('Bottom').style.display = "block";
	document.getElementById('GanymedeInfoBox').style.display = "block";
	document.getElementById('TitanInfoBox').style.display = "block";
	document.getElementById('CallistoInfoBox').style.display = "block";
	document.getElementById('IoInfoBox').style.display= 'block';
	document.getElementById('EuropaInfoBox').style.display= 'block';
	document.getElementById('TritonInfoBox').style.display= 'block';
	document.getElementById('EnceladusInfoBox').style.display= 'block';
	document.getElementById('MirandaInfoBox').style.display= 'block';
	document.getElementById('NereidInfoBox').style.display= 'block';
	document.getElementById('MimasInfoBox').style.display= 'block';
	document.getElementById('title').style.display= 'none';
	RefreshScreen();
}

		
////////FUNCTIONS///////

function RefreshScreen(){
	
////Ganymede////	
	
	if(MoonFact == "Ganymede"){
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = 1;
		if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
			
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = DisplayMoon;
		var GanymedeInfoBox = MoonOne+DisplayInfoBox;
		var MoonTwo = MoonThree = MoonFour = MoonFive = MoonSix = MoonSeven = MoonEight = MoonNine = MoonTen = MoonOne+(WindowWidth*2);
		var TitanInfoBox = CallistoInfoBox = IoInfoBox = EuropaInfoBox = TritonInfoBox = EnceladusInfoBox = MirandaInfoBox = NereidInfoBox = MimasInfoBox = MoonTwo+DisplayInfoBox;
		
				
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "91%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		LightUpAll();
	}
////Titan////

	else if(MoonFact == "Titan"){
	
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = .7;
				if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = PreviousMoonSpace;
		var GanymedeInfoBox = MoonOne+PreviousInfoBoxSpace;
		var MoonTwo = DisplayMoon;
		var TitanInfoBox = MoonTwo+DisplayInfoBox;
		var MoonThree = MoonFour = MoonFive = MoonSix = MoonSeven = MoonEight = MoonNine = MoonTen = MoonTwo+(WindowWidth*2) ;
		var CallistoInfoBox = IoInfoBox = EuropaInfoBox = TritonInfoBox = EnceladusInfoBox = MirandaInfoBox = NereidInfoBox = MimasInfoBox = MoonThree+DisplayInfoBox;
				
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "82%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		
	}
	

	else if(MoonFact == "Callisto"){
	
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = .7;
				if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = MoonTwo = PreviousMoonSpace;
		var GanymedeInfoBox = TitanInfoBox = MoonOne+PreviousInfoBoxSpace;
		var MoonThree = DisplayMoon;
		var CallistoInfoBox = MoonThree+DisplayInfoBox;
		var MoonFour = MoonFive = MoonSix = MoonSeven = MoonEight = MoonNine = MoonTen = MoonThree+(WindowWidth*2) ;
		var IoInfoBox = EuropaInfoBox = TritonInfoBox = EnceladusInfoBox = MirandaInfoBox = NereidInfoBox = MimasInfoBox = MoonFour+DisplayInfoBox;
				
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "73%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
	
	}
	
	else if(MoonFact == "Io"){
	
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = .7;
				if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = MoonTwo = MoonThree = PreviousMoonSpace;
		var GanymedeInfoBox = TitanInfoBox = CallistoInfoBox = MoonOne+PreviousInfoBoxSpace;
		var MoonFour = DisplayMoon;
		var IoInfoBox = MoonFour+DisplayInfoBox;
		var MoonFive = MoonSix = MoonSeven = MoonEight = MoonNine = MoonTen = MoonFour+(WindowWidth*2) ;
		var EuropaInfoBox = TritonInfoBox = EnceladusInfoBox = MirandaInfoBox = NereidInfoBox = MimasInfoBox = MoonFive+DisplayInfoBox;
				
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "64%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
	}
	
	
	else if(MoonFact == "Europa"){
	
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = .7;
				if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = MoonTwo = MoonThree = MoonFour = PreviousMoonSpace;
		var GanymedeInfoBox = TitanInfoBox = CallistoInfoBox = IoInfoBox = MoonOne+PreviousInfoBoxSpace;
		var MoonFive = DisplayMoon;
		var EuropaInfoBox = MoonFive+DisplayInfoBox;
		var MoonSix = MoonSeven = MoonEight = MoonNine = MoonTen = MoonFive+(WindowWidth*2) ;
		var TritonInfoBox = EnceladusInfoBox = MirandaInfoBox = NereidInfoBox = MimasInfoBox = MoonSix+DisplayInfoBox;
				
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "55%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
	}
	

	else if(MoonFact == "Triton"){
	
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = .7;
		if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = MoonTwo = MoonThree = MoonFour = MoonFive = PreviousMoonSpace;
		var GanymedeInfoBox = TitanInfoBox = CallistoInfoBox = IoInfoBox = EuropaInfoBox = MoonOne+PreviousInfoBoxSpace;
		var MoonSix = DisplayMoon;
		var TritonInfoBox = MoonSix+DisplayInfoBox;
		var MoonSeven = MoonEight = MoonNine = MoonTen = MoonSix+(WindowWidth*2) ;
		var EnceladusInfoBox = MirandaInfoBox = NereidInfoBox = MimasInfoBox = MoonSeven+DisplayInfoBox;
				
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "46%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
	}
	
	else if(MoonFact == "Enceladus"){
	
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = .7;
		if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = MoonTwo = MoonThree = MoonFour = MoonFive = MoonSix = PreviousMoonSpace;
		var GanymedeInfoBox = TitanInfoBox = CallistoInfoBox = IoInfoBox = EuropaInfoBox = TritonInfoBox = MoonOne+PreviousInfoBoxSpace;
		var MoonSeven = DisplayMoon;
		var EnceladusInfoBox = MoonSeven+DisplayInfoBox;
		var MoonEight = MoonNine = MoonTen = MoonSeven+(WindowWidth*2) ;
		var MirandaInfoBox = NereidInfoBox = MimasInfoBox = MoonEight+DisplayInfoBox;
				
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "37%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
	}
	
	
	else if(MoonFact == "Miranda"){
	
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = .7;
		if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = MoonTwo = MoonThree = MoonFour = MoonFive = MoonSix = MoonSeven = PreviousMoonSpace;
		var GanymedeInfoBox = TitanInfoBox = CallistoInfoBox = IoInfoBox = EuropaInfoBox = TritonInfoBox = EnceladusInfoBox = MoonOne+PreviousInfoBoxSpace;
		var MoonEight = DisplayMoon;
		var MirandaInfoBox = MoonEight+DisplayInfoBox;
		var MoonNine = MoonTen = MoonEight+(WindowWidth*2) ;
		var NereidInfoBox = MimasInfoBox = MoonNine+DisplayInfoBox;
				
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "28%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
	}
	

	else if(MoonFact == "Nereid"){
	
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = .7;
		if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = MoonTwo = MoonThree = MoonFour = MoonFive = MoonSix = MoonSeven = MoonEight = PreviousMoonSpace;
		var GanymedeInfoBox = TitanInfoBox = CallistoInfoBox = IoInfoBox = EuropaInfoBox = TritonInfoBox = EnceladusInfoBox = MirandaInfoBox = MoonOne+PreviousInfoBoxSpace;
		var MoonNine = DisplayMoon;
		var NereidInfoBox = MoonNine+DisplayInfoBox;
		var MoonTen = MoonNine+(WindowWidth*2) ;
		var MimasInfoBox = MoonTen+DisplayInfoBox;
				
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "19%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
	}
	
	else if(MoonFact == "Mimas"){
	
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		var SizeDown = .7;
		if(WindowWidth <= 800){
			SizeDown = 0.4571428571428571;}
		else if(WindowWidth >= 1500){
			SizeDown = 0.8571428571428571;}
		else if(WindowWidth > 800 && WindowWidth < 1500){
			SizeDown = (WindowWidth-800)/700;
			SizeDown = ((SizeDown*.4)+0.4571428571428571);}
		
		var Space = (WindowWidth-(SizeDown*700)*2)/2;
		var PreviousMoonSpace = 348-(WindowWidth*2)-((SizeDown*700)*.975);
		var PreviousInfoBoxSpace = (SizeDown*700)*.975;
		var DisplayMoon = Space-(348*(1-SizeDown));
		var DisplayInfoBox = ((SizeDown*700)*.975); 
		
		var MoonOne = MoonTwo = MoonThree = MoonFour = MoonFive = MoonSix = MoonSeven = MoonEight = MoonNine = PreviousMoonSpace;
		var GanymedeInfoBox = TitanInfoBox = CallistoInfoBox = IoInfoBox = EuropaInfoBox = TritonInfoBox = EnceladusInfoBox = MirandaInfoBox = NereidInfoBox = MoonOne+PreviousInfoBoxSpace;
		var MoonTen = DisplayMoon;
		var MimasInfoBox = MoonTen+DisplayInfoBox;
						
		var WindowHeight2 = (WindowHeight*-.5)-350;
		var WindowHeight = WindowHeight/2 - 368;
		
		document.getElementById('starfield').style.left =  "10%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//3,200 mi #2
		document.getElementById('TitanInfoBox').style.MozTransform = 'translateX('+ TitanInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2985 miles #3
		document.getElementById('CallistoInfoBox').style.MozTransform = 'translateX('+ CallistoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//2263 mi #4
		document.getElementById('IoInfoBox').style.MozTransform = 'translateX('+ IoInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1950 mi #5
		document.getElementById('EuropaInfoBox').style.MozTransform = 'translateX('+ EuropaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//1677 mi #6
		document.getElementById('TritonInfoBox').style.MozTransform = 'translateX('+ TritonInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//310 mi #7
		document.getElementById('EnceladusInfoBox').style.MozTransform = 'translateX('+ EnceladusInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//290 mi #8
		document.getElementById('MirandaInfoBox').style.MozTransform = 'translateX('+ MirandaInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//210 mi #9
		document.getElementById('NereidInfoBox').style.MozTransform = 'translateX('+ NereidInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+SizeDown+') rotate(0deg)';//88 mi #10		
		document.getElementById('MimasInfoBox').style.MozTransform = 'translateX('+ MimasInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
	
	}
	
	else{
		
		var WindowHeight = $(window).height(); // New height
		var WindowWidth = $(window).width(); // New width
		//Sets a NewWidth to space out the moons
		var NewWidth = WindowWidth*.8;
		//The Largest Moon
		var LargestMoon = 3273;
		//Scale down the moons
		var AllMoonSizes = 16246;
		var MoonsTotalWidth = 1398.6328125;
		var AmountOfSpaces = 9.5;
		var MaxMoonPixels = 700;
		//Calc Scale size
		var ScaleCalc = ((LargestMoon / AllMoonSizes))*NewWidth;
		var ScaleDown = (ScaleCalc/MaxMoonPixels);
		var Space = 0;
		//Calc Spaces
		if (ScaleDown >= 1){
			Space = (WindowWidth-MoonsTotalWidth)/AmountOfSpaces;
			ScaleDown = 1;
		}
		
		var GanymedeSize = 3273/LargestMoon * ScaleDown;
		var TitanSize = 3200/LargestMoon * ScaleDown;
		var CallistoSize = 2985/LargestMoon * ScaleDown;
		var IoSize = 2263/LargestMoon * ScaleDown;
		var EuropaSize = 1950/LargestMoon * ScaleDown;
		var TritonSize = 1677/LargestMoon * ScaleDown;
		var EnceladusSize = 310/LargestMoon * ScaleDown;
		var MirandaSize = 290/LargestMoon * ScaleDown;
		var NereidSize = 210/LargestMoon * ScaleDown;
		var MimasSize = 88/LargestMoon * ScaleDown;
		
		if (ScaleDown < 1){Space = ((WindowWidth-((GanymedeSize*MaxMoonPixels)+(TitanSize*MaxMoonPixels)+(CallistoSize*MaxMoonPixels)+(IoSize*MaxMoonPixels)+(EuropaSize*MaxMoonPixels)+(TritonSize*MaxMoonPixels)+(EnceladusSize*MaxMoonPixels)+(MirandaSize*MaxMoonPixels)+(NereidSize*MaxMoonPixels)+(MimasSize*MaxMoonPixels)))/AmountOfSpaces);}
		
		var MoonOne = (Space)-(348*(1-GanymedeSize));
		var MoonTwo = MoonOne+(GanymedeSize*MaxMoonPixels)+Space-((TitanSize*MaxMoonPixels)*.063);
		var MoonThree = MoonTwo+(TitanSize*MaxMoonPixels)+Space-((CallistoSize*MaxMoonPixels)*.085);
		var MoonFour = MoonThree+(CallistoSize*MaxMoonPixels)+Space-((IoSize*MaxMoonPixels)*.218);
		var MoonFive = MoonFour+(IoSize*MaxMoonPixels)+Space-((EuropaSize*MaxMoonPixels)*.135);
		var MoonSix = MoonFive+(EuropaSize*MaxMoonPixels)+Space-((TritonSize*MaxMoonPixels)*.13);
		var MoonSeven = MoonSix+(TritonSize*MaxMoonPixels)+Space-((EnceladusSize*MaxMoonPixels)*2.35);
		var MoonEight = MoonSeven+(EnceladusSize*MaxMoonPixels)+Space-((MirandaSize*MaxMoonPixels)*.08);
		var MoonNine = MoonEight+(MirandaSize*MaxMoonPixels)+Space-((NereidSize*MaxMoonPixels)*.24);
		var MoonTen = MoonNine+(NereidSize*MaxMoonPixels)+Space-((MimasSize*MaxMoonPixels)*.75);
		
		var DisplayMoon = Space-(348*(1-ScaleDown));
		var DisplayInfoBox = DisplayMoon+((ScaleDown*700)*.975); 
		
		WindowHeight = WindowHeight/2 - 368;
		document.getElementById('starfield').style.left =  "50%"
		document.getElementById('Ganymede').style.MozTransform = 'translateX('+ MoonOne +'px) translateY('+WindowHeight+'px) scale('+GanymedeSize+') rotate(10deg)';//3,273 mi #1
		document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ DisplayInfoBox +'px) translateY('+WindowHeight2+'px) scale('+ScaleDown+') rotate(0deg)';//3,273 mi #1
		document.getElementById('Titan').style.MozTransform = 'translateX('+MoonTwo+'px) translateY('+WindowHeight+'px) scale('+TitanSize+') rotate(10deg)';//3,200 mi #2
		document.getElementById('Callisto').style.MozTransform = 'translateX('+MoonThree+'px) translateY('+WindowHeight+'px) scale('+CallistoSize+') rotate(10deg)';//2985 miles #3
		document.getElementById('Io').style.MozTransform = 'translateX('+ MoonFour +'px) translateY('+WindowHeight+'px) scale('+IoSize+') rotate(10deg)';//2263 mi #4
		document.getElementById('Europa').style.MozTransform = 'translateX('+ MoonFive +'px) translateY('+WindowHeight+'px) scale('+EuropaSize+') rotate(10deg)';//1950 mi #5
		document.getElementById('Triton').style.MozTransform = 'translateX('+ MoonSix +'px) translateY('+WindowHeight+'px) scale('+TritonSize+') rotate(10deg)';//1677 mi #6
		document.getElementById('Enceladus').style.MozTransform = 'translateX('+ MoonSeven +'px) translateY('+WindowHeight+'px) scale('+EnceladusSize+') rotate(10deg)';//310 mi #7
		document.getElementById('Miranda').style.MozTransform = 'translateX('+ MoonEight +'px) translateY('+WindowHeight+'px) scale('+MirandaSize+') rotate(10deg)';//290 mi #8
		document.getElementById('Nereid').style.MozTransform = 'translateX('+ MoonNine +'px) translateY('+WindowHeight+'px) scale('+NereidSize+') rotate(10deg)';//210 mi #9
		document.getElementById('Mimas').style.MozTransform = 'translateX('+ MoonTen +'px) translateY('+WindowHeight+'px) scale('+MimasSize+') rotate(10deg)';//88 mi #10
		
			}
}

function wait(msecs)
{
var start = new Date().getTime();
var cur = start
while(cur - start < msecs)
{
cur = new Date().getTime();
}	
} 

function AnimateGanymedeInfoBox(GanymedeInfoBox,SizeDown){
	var WindowHeight2 = (WindowHeight*-.5)-350;
	document.getElementById('GanymedeInfoBox').style.MozTransform = 'translateX('+ GanymedeInfoBox +'px) translateY('+WindowHeight2+'px) scale('+SizeDown+') rotate(0deg)';//3,273 mi #1
	}
	
function LightUpAll(){
		document.getElementById('TitanInfoBox').style.opacity = 1;
	}