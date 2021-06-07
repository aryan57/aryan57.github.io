var test_case = "";
var output_string = "";


document.getElementById('InputTestCase').addEventListener("change", (event) => {
    test_case = event.target.value;
    console.log("Test Case : ",test_case);
});

document.getElementById('button').addEventListener("click", () => {
    
    

    let input_list=[];
    input_list.push(eval(test_case));
    console.log("Input List : ",input_list);

    output_string = "";
    print_list(input_list,output_string);
    console.log("Output String : ",output_string);
    
    document.getElementById('OutputTestCase').value = output_string;
    
});

function print_list(arr) {
    let space = false;
    for (let i = 0; i < arr.length; i++)
    {
        if (typeof (arr[i]) != "object")
        {
            if (space) output_string+=" ";
            output_string+=arr[i].toString();
            space = true;
            continue;
        }
        if(i)output_string+="\n";
        space = false;
        print_list(arr[i]);
    }
}