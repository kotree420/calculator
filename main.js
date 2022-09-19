let click_value = "0";
let output_value = document.getElementById("textbox");

function clickbutton(target) {
  
  if (target=="AC"){
    click_value = "0";
    output_value.innerHTML = click_value;
  } else if (target=="="){
    let result = eval(click_value);
    output_value.innerHTML = result;
    click_value = result;
  } else if ((target=="*" || target=="/") && 
    (output_value.innerHTML=="0" || output_value.innerHTML=="00")){
    return
  } else if (target=="." && output_value.innerHTML=="0") {
    click_value += target;
    output_value.innerHTML = click_value;
  } else if (target=="." && output_value.innerHTML=="00") {
    click_value = "0";
    click_value += target;
    output_value.innerHTML = click_value;
  } else if (target=="." && output_value.innerHTML.match(/\d+\.\d+$/)){
    //小数点(".")が2つ入力されてしまうのを防ぐ
    return
  } else if (output_value.innerHTML=="0" || output_value.innerHTML=="00") {
    click_value = target;
    output_value.innerHTML = click_value;
  } else if ((target=="+" || target=="-" || target=="*" || target=="." ||
    target=="/") && output_value.innerHTML.match(/[\+\-\*\.\/]$/)) {
    return
  } else {
    click_value += target;
    output_value.innerHTML = click_value;
  };

};