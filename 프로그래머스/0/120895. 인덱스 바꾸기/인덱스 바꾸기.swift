import Foundation

func solution(_ my_string:String, _ num1:Int, _ num2:Int) -> String {
    var array = Array(my_string)
    
    let temp = array[num1]
    array[num1] = array[num2]
    array[num2] = temp
    
    return String(array)
}