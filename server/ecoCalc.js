/*input: an object of values corresponding to answers 

for each question, total the answer value compared to the max value for that question
eg. 
"Distance travelled annually by private car"
Answer- "Between 1,000 and 10,000 miles" = 6
Max answer- "More than 15,000 miles" = 12
12-6 = 6

retain a subtotal for each category and a total for all the subtotals OR
return the hectare or acre value for the grand total

divide grand total by 100 = hectares
for acres, divide by 2.47

compare to Average ecological footprints: 
-US 10 hectares (24 acres) per person
-Canada 9 hectares (22 acres) per person 
-Italy 4 hectares (9 acres) per person
-Pakistan less than 1 hectare (2 acres) per person

calculate how much of Earth's biologically productive land is available to each person
on the planet:
divide the total area of biologically productive land (12 billion hectares) by the number
of people on the planet (6.3 billion). This amount (1.9 hectares / 4.7 acres per person).
This is known as average earth share. 


calculate how many Earths would be needed if every human had an ecological footprint the size
of theirs:
divide the total ecological footprint by the Average Earth Share (eg. the ecological footprint 
)
*/
class EcoCalc {
    constructor(input, maxValue, category) {
        this.input = input
        this.maxValue = maxValue
        this.total = 0
        this.category = category
    }

    calcAnswer() {
        return this.maxValue - this.input
    }

    calcTotal() {
        return this.total
    }

    addToTotal(subCategory, num) {
        if (this.category === subCategory || !subCategory) this.total += num
    }

    checkCategory(subCategory) {
        return this.category === subCategory
    }

    convertToHectares() {
        return this.total / 100
    }

    convertToAcres() {
        return (this.convertToHectares() / 2.47)
    }
}

module.exports = ecoCalc;
