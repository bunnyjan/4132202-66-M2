
    var num = 10;
    let name = "Bunny";
    age = 19;
    const year = 2004;

    console.log(year);

    fruit = ["banana","apple","orange"];

    console.log(fruit[1]);

    plant = {fruit: "banana", car:"nissan", color:"orange" };

    console.log(plant);

    dataJson = {
      employee:[{ name: "bunny" },{ age: 19 }, { year: 2004},]
 };

    console.log(dataJson.employee[0].name);

    let msg = name + year;
    msg = `${name} ${year}`;

    console.log(msg);

    document.getElementById('title').innerHTML = msg;

    $(function(){
      $("#title")
        .html(msg + " jQuery")
        .addClass('red');
    });
