axios
.get("https://api.hnpwa.com/v0/newest/1.json").then((response) => {
    //console.log(response);
    CreateList(response);
}).catch((err) => {
    alert("Server Error!!!");
});



let CreateList = (response) => {
    response.data.forEach(element => {
        console.log(element.title);
        var li = document.createElement("li");
        li.setAttribute("class","list-group-item list-group-item-action list-group-item-primary");
       // li.innerHTML = element.title;
        
        //round pill showing points
        var span =  document.createElement("span");
        span.setAttribute("class","badge bg-primary rounded-pill")
        span.innerHTML = element.points;
        //a tag
        var anchor = document.createElement("a"); 
        anchor.setAttribute("href",element.url);
        anchor.setAttribute("target","__blank");
        anchor.innerHTML = element.title;
        
        //author tag 
        var time = document.createElement("a");
        time.setAttribute("class","time");
        time.innerHTML = element.time_ago;
        // anchor.prepend(span);
        
        li.append(span);
        
        li.append(anchor);
        li.append(time);
        document.querySelector(".list-group").appendChild(li);
         

    });


}