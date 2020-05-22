function clickAndDrag(obj, dragUrl, clickUrl) {
        obj.draggable = "true";
        var nonHref = "javascript:void 0;"
        obj.href = nonHref;
        var flag = 0;
        var runIndex = Math.floor(Math.random() * 10000);
        obj.addEventListener("mouseover", function() {
            this.href = dragUrl;
        }, false);
        obj.addEventListener("mouseout", function() {
            this.href = nonHref;
        }, false);
        obj.addEventListener("mousedown", function() {
            flag = 0;
        }, false)
        obj.addEventListener("mousemove", function() {
            flag = 1;
        }, false)
        obj.addEventListener("mouseup", function() {
            obj.href = nonHref;
            if (flag === 0) {
                openWin(clickUrl);
            }
        }, false)
    }
