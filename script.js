let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

touristSpots.sort((a,b)=>{
	let withoutarticle=[];
let map={};
let regexp=/\ban\b|\bthe\b|\ba\b/gi;
for(let i = 0 ; i < touristSpots.length ; i++ ){
	String str= str.replace(regexp,"");
	str=str.replace(/ +\g, " ");
	map[str]=touristSpots[i];
	withoutarticle.push(map[str])
}
withoutarticle.sort();
for(let i = 0 ; i < withoutarticle.length ; i++){
	console.log(map[withoutarticle[i]]);
}

});

