function timer(e){let t=new Date(e).getTime();setInterval(function(){let e=(new Date).getTime(),n=t-e;document.getElementById("timer-date").innerText=Math.floor(n/864e5),document.getElementById("timer-hours").innerText=Math.floor(n%864e5/36e5),document.getElementById("timer-minutes").innerText=Math.floor(n%36e5/6e4),document.getElementById("timer-seconds").innerText=Math.floor(n%6e4/1e3)},1e3)}$(document).ready(function(e){let t=$(".contacts-modal");$(".contacts-modal__btn").on("click",function(e){e.preventDefault(),t.removeClass("is-visible")})}),timer("Jan 1, 2019 00:00:00");
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidGltZXIiLCJldmVudCIsImV2ZW50RGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2V0SW50ZXJ2YWwiLCJub3dEYXRlIiwiZGlzdGFuY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwiTWF0aCIsImZsb29yIiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIiQiLCJyZWFkeSIsImUiLCJtb2RhbENvbnRhY3RzIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUNsYXNzIl0sIm1hcHBpbmdzIjoiQUFhQSxTQUFTQSxNQUFPQyxHQVFmLElBQUlDLEVBQVksSUFBSUMsS0FBS0YsR0FBT0csVUFDM0JDLFlBQVksV0FFZixJQUFJQyxHQUFVLElBQUlILE1BQU9DLFVBQ3hCRyxFQUFXTCxFQUFZSSxFQUV4QkUsU0FBU0MsZUFBZSxjQUFjQyxVQUFZQyxLQUFLQyxNQUFNTCxFQVJ2RE0sT0FTTkwsU0FBU0MsZUFBZSxlQUFlQyxVQUFZQyxLQUFLQyxNQUFPTCxFQVR6RE0sTUFEQ0MsTUFXUE4sU0FBU0MsZUFBZSxpQkFBaUJDLFVBQVlDLEtBQUtDLE1BQU9MLEVBWDFETyxLQURFQyxLQWFUUCxTQUFTQyxlQUFlLGlCQUFpQkMsVUFBWUMsS0FBS0MsTUFBT0wsRUFieERRLElBRE0sTUFBQSxLQWZsQkMsRUFBRVIsVUFBVVMsTUFBTSxTQUFTQyxHQUMxQixJQUFJQyxFQUFnQkgsRUFBRSxtQkFDVkEsRUFBRSx3QkFFTEksR0FBRyxRQUFTLFNBQVNGLEdBQzdCQSxFQUFFRyxpQkFDRkYsRUFBY0csWUFBWSxrQkE2QjVCdEIsTUFBTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKGUpIHtcclxuXHRsZXQgbW9kYWxDb250YWN0cyA9ICQoJy5jb250YWN0cy1tb2RhbCcpLFxyXG5cdFx0bW9kYWxCdG4gPSAkKCcuY29udGFjdHMtbW9kYWxfX2J0bicpO1xyXG5cdFxyXG5cdG1vZGFsQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdG1vZGFsQ29udGFjdHMucmVtb3ZlQ2xhc3MoJ2lzLXZpc2libGUnKTtcclxuXHR9KTtcclxufSk7XHJcblxyXG5cclxuLyoqKioqKioqKiogVGltZXIgKioqKioqKiovXHJcbmZ1bmN0aW9uIHRpbWVyIChldmVudCl7XHJcblxyXG5cdC8v0JIg0LzQuNC70LvQuNGB0LXQutGD0L3QtNCw0YVcclxuXHRjb25zdCAgIHNlY29uZCA9IDEwMDAsXHJcblx0XHRcdG1pbnV0ZSA9IHNlY29uZCAqIDYwLFxyXG5cdFx0XHRob3VyID0gbWludXRlICogNjAsXHJcblx0XHRcdGRheSA9IGhvdXIgKiAyNDtcclxuXHJcblx0bGV0IGV2ZW50RGF0ZSA9IG5ldyBEYXRlKGV2ZW50KS5nZXRUaW1lKCksXHJcblx0XHR4ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG5cdFx0XHRcdGRpc3RhbmNlID0gZXZlbnREYXRlIC0gbm93RGF0ZTtcclxuXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lci1kYXRlJykuaW5uZXJUZXh0ID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvIGRheSksXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lci1ob3VycycpLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgZGF5KSAvIGhvdXIpLFxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXItbWludXRlcycpLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgaG91cikgLyBtaW51dGUpLFxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXItc2Vjb25kcycpLmlubmVyVGV4dCA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgbWludXRlKSAvIHNlY29uZCk7XHJcblxyXG5cdFx0fSwgc2Vjb25kKVxyXG5cclxufTtcclxuXHJcbnRpbWVyKCdKYW4gMSwgMjAxOSAwMDowMDowMCcpOyAvLyDQktCy0L7QtNC40Lwg0L3QtdC+0LHRhdC+0LTQuNC80YPRjiDQtNCw0YLRgyDQvNC10YDQvtC/0YDQuNGP0YLQuNGPIl19