// Mouse over events mainly from: https://www.w3schools.com/jsref/event_onmouseover.asp
function stylize(item){
    var holder = item.innerHTML;
    item.innerHTML = ">" + holder;
}

function restore(item){
    var holder = item.innerHTML;
    var edited = holder.slice(4);
    item.innerHTML = edited;
}