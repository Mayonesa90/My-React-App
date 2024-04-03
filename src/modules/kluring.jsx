

var Employee = function() {}; 

Employee.prototype.task = 'Learning new skills'; 

var SoftwareDeveloper = function() {};

SoftwareDeveloper.prototype = new Employee(); 

SoftwareDeveloper.prototype.task = 'Developing software'; 

var intern = new SoftwareDeveloper(); 

export default function Kluring() {
    return (
        <p className=' bg-gradient-to-b from-green-300 to-yellow-200 h-52'>Message: {intern.task}</p>
    )
}
