const topImages = ["diggers.jpg","riotinto.jpg","topo.jpg","ikusi.jpg","gamewall.jpg","PullmanSydneyAirport.jpg","byte.jpg"];
var currentImage=0;
setInterval(imageChange,3000);

function imageChange() {
    currentImage++;
    if (currentImage==topImages.length) {
        currentImage=0;
    }
    document.getElementById("big-image").src="img/"+topImages[currentImage];
}