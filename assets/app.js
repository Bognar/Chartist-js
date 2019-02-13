
var obj = [
  {
    "_id": "5c649fd39e10e7a8fda259f1",
    "picture": "http://placehold.it/32x32",
    "age": 130,
    "gender": "male"
  },
  {
    "_id": "5c649fd344c4a506670b9e92",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "gender": "female"
  },
  {
    "_id": "5c649fd31138668b7e8a3ce6",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "gender": "female"
  },
  {
    "_id": "5c649fd3ee20d926ccd3d42f",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "gender": "female"
  },
  {
    "_id": "5c649fd3d1b31e82b40a625f",
    "picture": "http://placehold.it/32x32",
    "age": 78,
    "gender": "male"
  },
  {
    "_id": "5c649fd34105163c9dc77765",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "gender": "male"
  },
  {
    "_id": "5c649fd39f69524a5b37fb8f",
    "picture": "http://placehold.it/32x32",
    "age": 11,
    "gender": "male"
  }
]
// Loading data of ages from json obj into d1 also we can add var d2=[];
var d1 = [];
for(var i=0; i < obj.length; i++){
  d1.push(obj[i].age);
  // if we want to use label d2 'd2.push(obj[i]._id);'
}
new Chartist.Pie('.ct-chart', {
  //using d1 as an data surce to plot chart
    series: d1
    // we acn here add label 'label: d2'
  }, {
    donut: true,
    donutWidth: 30,
    donutSolid: true,
    startAngle: 270,
    showLabel: true
  });

