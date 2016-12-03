// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:initial.reset.path
// Description:Resetting the canvas state resets the current path
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("Resetting the canvas state resets the current path");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

offscreenCanvas.width = 100;
ctx.rect(0, 0, 100, 50);
offscreenCanvas2.width = 100;
ctx.fillStyle = '#f00';
ctx.fill();
_assertPixel(offscreenCanvas, 20,20, 0,0,0,0, "20,20", "0,0,0,0");

t.done();

});
done();
