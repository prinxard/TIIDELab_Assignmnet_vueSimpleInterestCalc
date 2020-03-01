
var calculator = new Vue({
el: '#calculator',
data: {
principal: '',
rate: '',
time: '',
computeReset: ''
},
computed: {
calcInterest: function(e){
    var p = this.principal;
    var r = this.rate;
    var t = this.time;
    var SI = ( p * r * t) / 100;
    return (SI).toFixed(2);
}
},
methods: {
computeReset: function(e){
this.principal = 0;
this.rate = 0;
this.time = 0;
done = false
}
}
});
