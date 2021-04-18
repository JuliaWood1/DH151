var map = L.map('map').setView([18, 105], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

var markers5 = [
{
	'title':'Hanoi',
	'description' : 'The capital city of Vietnam with beauitful tree lined streets. It was 104 degrees and humid the second day we were here, a sorcher!',
	'dates': 'June 3rd - 4th, 2017',
	'url' : 'hanoi.jpeg',
	'lat': 21.0278,
	'lon': 105.8342
},
{
	'title':'Sa Pa',
	'description' : "A lush town nestled far up in the mountains close to Vietnam's border with China.",
	'dates': 'June 5th - 6th, 2017',
	'url' : 'sapa.jpeg',
	'lat': 22.3364,
	'lon': 103.8438
},
{
	'title':'Ha Long Bay',
	'description' : 'A stunning bay with hundreds of green islands jutting out of turquoise waters.',
	'dates': 'June 7th - 8th, 2017',
	'url' : 'halongbay.jpeg',
	'lat': 20.9101,
	'lon': 107.1839
},
{
	'title':'Hue',
	'description' : 'The old national capitol with long boats along the Perfume River and historical palaces and shrines. Also where my sister and I got knock-off North Face backpacks for high school, lol.',
	'dates': 'June 9th, 2017',
	'url' : 'hue.jpeg',
	'lat': 16.0326,
	'lon': 108.1450
},
{
	'title':'Da Nang',
	'description' : 'Urban coastal city with very warm water where my sister and I talked about where I want to go for college.',
	'dates': 'June 10th, 2017',
	'url' : 'danang.jpeg',
	'lat': 16.0574417,
	'lon': 108.247475
},
{
	'title':'Hoi An',
	'description' : 'The city of latterns, banh mis, and where our tour guide read our palms! We loved the well-preserved ancient town.',
	'dates': 'June 10th - 11th, 2017',
	'url' : 'hoian.jpeg',
	'lat': 15.8801,
	'lon': 108.3380
},
{
	'title':'Ho Chi Minh City',
	'description' : 'The biggest city in Vietnam with many high rises. We took day trips from here to see the Cu Chi tunnels from the American War and the historical Cao Dai church which is pictured below.',
	'dates': 'June 12th - 13th, 2017',
	'url' : 'church.jpeg',
	'lat': 10.8231,
	'lon': 106.6297
},
{
	'title':'Can Tho',
	'description' : 'A city along the Mekong River where we went on a boat to a honey farm, laughed at a roof top bar, and went to a night market.',
	'dates': 'June 14th, 2017',
	'url' : 'cantho.jpeg',
	'lat': 10.0452,
	'lon': 105.7469
}
]

// create a feature group
let myMarkers = L.featureGroup();

// loop through cities
markers5.forEach(function(item, index){
		let popup = L.popup().setContent(
			`<hr>${item.title}<\hr> ${item.description}
			<br /> <br /> <img src = ${item.url} width=90%>`
		);
		let marker = L.marker([item.lat, item.lon]).addTo(map).bindPopup(popup).openPopup();
		console.log('The latitude for ' + item.title + ' is ' + item.lat)

		myMarkers.addLayer(marker)

		$('.sidebar').append(`<div class = "sidebar-item"onclick="flyToIndex(${index})">${item.title}</div>`)
});

myMarkers.addTo(map)

//define layers
let layers = {
	"My Markers": myMarkers
}

// add Layer control box
L.control.layers(null, layers).addTo(map)

// makes it show all the markers
map.fitBounds(myMarkers.getBounds())


function flyToIndex(index){
	map.flyTo([markers5[index].lat, markers5[index].lon], 12)
	myMarkers.getLayers()[index].openPopup()
}

var polyline = L.polyline([
	[21.0278, 105.8342],
	[22.3364, 103.8438],
	[20.9101, 107.1839],
	[16.0326, 108.1450],
	[16.0574417, 108.247475],
	[15.8801, 108.3380],
	[10.8231, 106.6297],
	[10.0452, 105.7469],
	],
	{
		color: 'red',
		weight: 5,
		opacity: .7,
		dashArray: '20,15',
		lineJoin: 'round'
	}
	).addTo(map);