$(document).ready(function(){function e(e,t){$("#sequence ul li:nth-child("+e+")").children().children(".sequence-class").text(t)}var t={},n=$("#sequence").sequence(t).data("sequence");n.beforeCurrentFrameAnimatesIn=function(){n.direction===1?e(n.nextFrameID,""):e(n.nextFrameID,".animate-out")},n.beforeCurrentFrameAnimatesOut=function(){if(n.direction===1){e(n.currentFrameID,".animate-out");e(n.nextFrameID,"")}else{e(n.currentFrameID,"");e(n.nextFrameID,".animate-out")}},n.beforeNextFrameAnimatesIn=function(){e(n.nextFrameID,".animate-in")}});